
interface Footer {
children? : any
className? : string
}

export const Footer = ({children, className} : Footer) => {
  return (
    <div className={className}>{children}</div>
  )
}
