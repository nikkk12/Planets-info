
interface Info {
    children : any
    className : string
}

export const Info = ({children , className} : Info) => {
  return (
    <div className={className}>{children}</div>
  )
}
