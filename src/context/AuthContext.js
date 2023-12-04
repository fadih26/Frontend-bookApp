import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [checkUser, setCheckUser] = useState(true);

    useEffect(() => {
        if(!user && user === null){
        fetchUserData();
        }
       else{
        console.log("loggedin")
       }
    },[user]);

    const fetchUserData = async () => {
        try {
            const response = await axiosInstance.get('/api/auth/user');
            setUser(response.data.user);
        } catch(err) {
          
            setUser(null);
        }
        finally{
            setCheckUser(false)
        }
    };

    const login = async (email, password) => {
        try {
            await axiosInstance.post('/api/auth/login', { email, password });
            await fetchUserData(); // Fetch user data after successful login
            // console.log(response.data)
        } catch (error) {
            // Handle login error (e.g., show a message)
            console.error('Login failed:', error);
        }
    };

    const logout = async () => {
        await axiosInstance.post('/api/auth/logout');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user,setUser,checkUser,fetchUserData,login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};