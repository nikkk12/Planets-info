
interface Buttons {
    children : any
    onClick : () => void
}

export const Button = ({children , onClick} : Buttons) => {
  return (
    <button type='button' onClick={onClick}>{children}</button>
  )
}
