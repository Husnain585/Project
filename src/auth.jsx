import React, { useState } from 'react'
import Signup from './Component/Auth/signup';
import Login from './Component/Auth/login';

const Auth = () => {
    const [auth, setAuth] = useState("login");
    return (
      <>
        { auth == "login" && <Login setAuth={setAuth} />}
        { auth == "signup" && <Signup setAuth={setAuth} /> }
      </>

  )
};

export default Auth;
