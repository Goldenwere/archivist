import { useState } from 'react'
import './DropdownSelect.sass'

function DropdownSelect(props: any) {
  let [isOpen, setOpen] = useState(false)
  let [selection, setSelection] = useState(props.options[0])

  return (
    <div
      className="dropdown input"
    >
      <div>
        <p
          className="label"
        >
          { props.label }
        </p>
        <button
          className={`${isOpen ? 'open' : ''}`}
          onClick={() => setOpen(!isOpen)}
        >
          { selection }
        </button>
      </div>
      <div
        className={`dropdown-content + ${isOpen ? 'open' : ''}`}
      >
        <ul>
          {
            props.options.map((option: any) =>
              <li
                key={option}
                onClick={() => { setSelection(option); setOpen(false); }}
                className={`${option === selection ? 'selected' : ''}`}
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