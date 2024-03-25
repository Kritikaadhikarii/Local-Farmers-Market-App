import React from 'react';
import { MdLock, MdFace, MdVpnKey } from 'react-icons/md'; // Import Material Icons from react-icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Login = () => {
    return (
        <div id="container-login">
            <div id="title">
                <MdLock className="lock-icon" /> Login
            </div>

            <form>
                <div className="input">
                    <div className="icons">
                        <MdFace />
                    </div>
                    <input id="username" placeholder="Username" type="text" required className="validate" autoComplete="off" />
                </div>

                <div className="input">
                    <div className="icons">
                        <MdVpnKey />
                    </div>
                    <input id="password" placeholder="Password" type="password" required className="validate" autoComplete="off" />
                </div>

                <div className="remember-me">
                    <input type="checkbox" />
                    <span style={{ color: '#757575' }}>Remember Me</span>
                </div>

                <input type="submit" value="Log In" />
            </form>

            <div className="forgot-password">
                <a href="#">Forgot your password?</a>
            </div>

            <div className="register">
                <span style={{ color: '#657575' }}>Don't have an account yet?</span>
                <Link to="/signup"><button id="register-link">Register here</button></Link>
            </div>
        </div>
    );
};

export default Login;
