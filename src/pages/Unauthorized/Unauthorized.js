import { Link } from 'react-router-dom';
import Styles from './Unauthorized.module.css'

const Unauthorized = () => {

return(
    <div className={Styles.notFoundContainer} >
   <h1>Unauthorized</h1>

   <Link to="/">Return Home</Link>
    </div>
    
)

}

export default Unauthorized;