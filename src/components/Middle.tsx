
interface Middle {
    children : any
    className? : string
}



export const Middle = ({children , className} : Middle) => {
  return (
    <div className={className}>{children}
    </div>
  )
}
