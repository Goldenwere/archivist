import { ChangeEvent } from 'react'
import './TextEntry.sass'

function TextEntry(props: any) {
  const {
    label,
    isPassword,
    onChange,
    value,
    disabled,
  } = props

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target?.value)
  }

  return (
    <div
      className={`text-entry input ${disabled ? 'disabled' : ''}`}
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
          type={isPassword ? "password" : "text"}
          value={value}
          onChange={inputOnChange}
          tabIndex={disabled ? -1 : 0}
        />
      </div>
    </div>
  )
}

export default TextEntry
