import './Button.sass'

function Button(props: any) {
  const {
    icon,
    label,
    onClick,
  } = props

  const buttonOnClick = () => {
    onClick()
  }

  return (
    <div
      className="button input"
    >
      <button
        type="button"
        onClick={ buttonOnClick }
        style={{ backgroundImage: icon }}
      >
        { label }
      </button>
    </div>
  )
}

export default Button
