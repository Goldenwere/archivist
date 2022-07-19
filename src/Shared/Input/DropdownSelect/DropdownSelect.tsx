import React, {
  FocusEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import './DropdownSelect.sass'

function DropdownSelect(props: any) {
  const {
    label,
    onChange,
    options,
    value,
    disabled,
  } = props
  let [isOpen, setOpen] = useState(false)

  const itemElements = useRef(new Array())
  const parentElement = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) {
      itemElements.current[0].focus()
    }
  })

  const optionOnClick = (option: any) => {
    onChange(option);
    setOpen(false);
  }

  const optionOnKeyDown = (event: KeyboardEvent, option: any) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      parentElement.current?.focus()
      optionOnClick(option)
    }
  }

  const onBlur = (event: FocusEvent) => {
    const currentTarget = event.currentTarget

    requestAnimationFrame(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setOpen(false)
      }
    })
  }

  return (
    <div
      className={`dropdown input ${disabled ? 'disabled' : ''}`}
    >
      <div>
        <p
          className="label"
        >
          { label }
        </p>
        <button
          className={`${isOpen ? 'open' : ''}`}
          onClick={() => setOpen(!isOpen)}
          ref={parentElement}
          tabIndex={disabled ? -1 : 0}
        >
          { value }
        </button>
      </div>
      <div
        className={`dropdown-content ${isOpen ? 'open' : ''}`}
      >
        <ul
          onBlur={(e: FocusEvent) => onBlur(e)}
        >
          {
            options.map((option: any) =>
              <li
                key={option}
                ref={(element: HTMLLIElement) => itemElements.current.push(element)}
                onClick={() => { optionOnClick(option) }}
                onKeyDown={(e: KeyboardEvent) => optionOnKeyDown(e, option)}
                className={`${option === value ? 'selected' : ''}`}
                tabIndex={isOpen ? 0 : -1}
              >
                { option }
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default DropdownSelect