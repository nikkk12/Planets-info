import { Link } from 'react-router-dom'

interface Props {
    className : string,
}

export const Main = ({className } : Props) => {

  return (
    <div className={className}>
        <div className='header'>
            <button className='page-btn'>
                <h1>
                    <Link to="/" >THE PLANETS</Link>
                </h1>
            </button>
            <ul>
                <li>
                  <Link to="/mercury">mercury</Link>
                </li>
                <li>
                   <Link to="/venus">venus</Link>
                </li>
                <li>
                    <Link to="/earth">earth</Link>
                </li>
                <li>
                    <Link to="/mars">mars</Link>
                </li>
                <li>
                    <Link to="/jupiter">jupiter</Link>
                </li>
                <li>
                    <Link to="/saturn">saturn</Link>
                </li>
                <li>
                    <Link to="/uranus">uranus</Link>
                </li>
                <li>
                    <Link to="/neptune">neptune</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}