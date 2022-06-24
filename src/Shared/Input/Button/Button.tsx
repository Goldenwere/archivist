import './Button.sass'

function Button(props: any) {
  const {
    onClick,
    label,
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
        onClick={buttonOnClick}
      >
        { label }
      </button>
    </div>
  )
}

export default Button
