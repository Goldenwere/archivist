import {
  useState,
} from 'react'
import './DropdownSelect.sass'

function DropdownSelect(props: any) {
  const {
    label,
    onChange,
    options,
    value,
  } = props
  let [isOpen, setOpen] = useState(false)

  const optionOnClick = (option: any) => {
    onChange(option);
    setOpen(false);
  }

  return (
    <div
      className="dropdown input"
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
        >
          { value }
        </button>
      </div>
      <div
        className={`dropdown-content + ${isOpen ? 'open' : ''}`}
      >
        <ul>
          {
            options.map((option: any) =>
              <li
                key={option}
                onClick={() => { optionOnClick(option) }}
                className={`${option === value ? 'selected' : ''}`}
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