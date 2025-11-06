
interface Info {
  children : string,
  className : string
}

export const Title = ({children,className}: Info) => {
  return (
    <div className={className}>{children}</div>
  )
}
