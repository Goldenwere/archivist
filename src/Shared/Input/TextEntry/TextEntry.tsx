import { ChangeEvent } from 'react'
import './TextEntry.sass'

function TextEntry(props: any) {
  const {
    onChange,
    value,
  } = props

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target?.value)
  }

  return (
    <div
      className="text-entry input"
    >
      <div>
        <p
          className="label"
        >
          { props.label }
        </p>
      </div>
      <div>
        <input
          type="text"
          value={value}
          onChange={inputOnChange}
        />
      </div>
    </div>
  )
}

export default TextEntry
