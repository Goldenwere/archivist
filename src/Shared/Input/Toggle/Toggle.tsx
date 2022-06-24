import { ChangeEvent } from 'react'
import './Toggle.sass'

function Toggle(props: any) {
  const {
    label,
    onChange,
    value,
  } = props

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target?.checked)
  }

  return (
    <div
      className="checkbox input"
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
        />
      </div>
    </div>
  )
}

export default Toggle
