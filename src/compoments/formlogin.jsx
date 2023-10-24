
import './formlogin.css'
import React, { useState } from "react";
import {SiFacebook} from "react-icons/si"
import {AiFillGoogleCircle} from "react-icons/ai"
const Formlogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Đặt logic xác thực ở đây, ví dụ kiểm tra tài khoản và mật khẩu
    };
    return (
        <div className="body">
            <div className="container">
                <div className="sign-up">
                    <form onSubmit={handleSubmit}>
                        <h1>Create acccont</h1>
                        <div className="social-container">
                            <a href="#" className="social"><SiFacebook/></a>
                            <a href="#" className="social"><AiFillGoogleCircle/></a>
                            <a href="#" className="social"><SiFacebook/></a>
                        </div>
                        <p>or use your email for registration</p>
                        <input type="text" name="txt" placeholder="Name" required=""/>
                        <input type="email" name="email" placeholder="Email" required=""/>
                        <input type="password" name="password" placeholder="Password" required=""/>
                        <button id="SignUp">Sign up</button>
                    </form>    
                </div>
                {/* <div className="sign-in">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign-in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><SiFacebook/></a>
                            <a href="#" className="social"><AiFillGoogleCircle/></a>
                            <a href="#" className="social"><SiFacebook/></a>
                        </div>
                        <p>or use your account</p>
                        <input type="email" name="email" placeholder="Email" required=""/>
                        <input type="password" name="password" placeholder="Password" required=""/>
                        <a href="#">Forget your password</a>
                        <button id="SignIn">Sign in</button>
                    </form>    
                </div> */}
                
            </div>
        </div>
    )
}

export default Formlogin;