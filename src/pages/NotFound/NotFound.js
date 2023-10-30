import { Link } from 'react-router-dom';
import Styles from './NotFound.module.css'

const NotFound = () => {

return(
    <div className={Styles.notFoundContainer} >
   <h1>404</h1>
   <h2>Oops! Page Not Found</h2>
   <Link to="/">Return Home</Link>
    </div>
    
)

}

export default NotFound;