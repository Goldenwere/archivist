import { ChangeEvent } from 'react'
import './Toggle.sass'

function Toggle(props: any) {
  const {
    label,
    onChange,
    value,
    disabled,
  } = props

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target?.checked)
  }

  return (
    <div
      className={`checkbox input ${disabled ? 'disabled' : ''}`}
    >
      <div>
        <p
          className="label"
        >
          { label }
        </p>
      </div>
      <div>
        <input
          type="checkbox"
          value={value}
          defaultChecked={value}
          onChange={inputOnChange}
          tabIndex={disabled ? -1 : 0}
        />
      </div>
    </div>
  )
}

export default Toggle
