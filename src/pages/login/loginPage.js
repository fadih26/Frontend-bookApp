import LoginForm from '../../components/login/loginForm';
import Styles from './login.module.css'

const LoginPage = () => {

    

return(
    <div className={Styles.loginContainer} >
     <LoginForm/>
    </div>
)

}

export default LoginPage;