import Styles from './loginForm.module.css'
import { useState, useContext } from "react";
import useApi from '../../hooks/useApi';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../assets/images/spinner.gif'

const LoginForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const { fetchUserData } = useContext(AuthContext);
    const { apiCall } = useApi();
    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!email || !password) {
            console.log("ENTER EMAIL OR PASSWORD")
            toast.error("Please insret email or password")
            setLoading(false);
            return;
        }


        try {
             await apiCall({
                url: '/api/auth/login',
                method: 'post',
                data: { email, password }
            }).then((res)=>{console.log(res)});
            await fetchUserData()
            toast.success("Logged in Successfully!")
            setLoading(false);
            navigate('/')
        } catch (error) {

            console.log(error)

            setLoading(false);
        }
    };


    return (
        <form className={Styles.loginForm} >
            <h1 className={Styles.loginTitle}>Login</h1>

            <div className={Styles.inputWrapper}>
                <input type='text'
                    onChange={(e) => { setEmail(e.target.value) }}
                    className={Styles.formInput} name="email" placeholder='Email' />
            </div>

            <div className={Styles.inputWrapper}>
                <input type='password'
                    onChange={(e) => { setPassword(e.target.value) }}
                    className={Styles.formInput} name="password" placeholder='Password' />
            </div>
            {loading ? (<img src={Spinner} alt="loading" />) : (
                <button onClick={(e) => submitHandler(e)} className={Styles.loginButton}>Login</button>

            )}
        </form>
    )

}

export default LoginForm;   