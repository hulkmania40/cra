import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { otpObj } from './LoginModel';

type Props = {

}

declare global {
    interface Window {
        otpless:any;
    }
}

function Login(props: Props) {
    useEffect(() => {
        // Define the 'otpless' function
        window.otpless = (otplessUser:otpObj) => {
         // Retrieve the user's details after successful login
         const waName = otplessUser.waName;
         const waNumber = otplessUser.waNumber;
                 
         // Handle the signup/signin process
         // ...
        };
       }, []);
    
  return (
    <div>Login</div>
  )
}

Login.propTypes = {}

export default Login
