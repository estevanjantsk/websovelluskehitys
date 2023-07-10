const Button = ({handleClick, title}) => {
  return (
    <button onClick={handleClick}>{title}</button>
  )
}

export { Button }