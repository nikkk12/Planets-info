
interface Images {
    img ? : string
    bgImage? : string
    children? : any
    className? : string
}

export const Planets = ({className, bgImage,children} : Images) => {
  return (
    <div style={{backgroundImage:`url(${bgImage})`}} className={className}>
        {children}
    </div>
  )
}
