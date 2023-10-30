import { Link } from 'react-router-dom';
import Styles from './Dashboard.module.css'

 const Dashboard =() =>{
  return (
    <div className={Styles.dashboardContainer} >
   <h1>Dashboard</h1>
   <Link to="/">Return Home</Link>
    </div>
  )
}


export default Dashboard