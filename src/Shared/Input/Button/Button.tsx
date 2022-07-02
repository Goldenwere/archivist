import './Button.sass'

function Button(props: any) {
  const {
    icon,
    label,
    onClick,
    disabled,
  } = props

  const buttonOnClick = () => {
    onClick()
  }

  return (
    <div
      className={`button input ${disabled ? 'disabled' : ''}`}
    >
      <button
        type="button"
        onClick={ buttonOnClick }
        style={{ backgroundImage: icon }}
        tabIndex={disabled ? -1 : 0}
      >
        { label }
      </button>
    </div>
  )
}

export default Button
