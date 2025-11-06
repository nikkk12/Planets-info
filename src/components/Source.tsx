
interface Source {
    children? : any
    className : string
}

export const Source = ({children,className} : Source) => {
  return (
    <div className={className}>{children}</div>
  )
}
