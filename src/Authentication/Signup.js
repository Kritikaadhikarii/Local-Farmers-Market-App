import React from 'react';
import { MdLock, MdEmail, MdFace, MdVpnKey } from 'react-icons/md'; // Import Material Icons from react-icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Signup = () => {
    return (
        <div id="container-register">
            <div id="title">
                <MdLock className="lock-icon" /> Register
            </div>

            <form>
                <div className="input">
                    <div className="icons">
                        <MdEmail />
                    </div>
                    <input id="email" placeholder="Email" type="email" required className="validate" autoComplete="off" />
                </div>

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
                    <span style={{ color: '#757575' }}>I accept Terms of Service</span>
                </div>

                <input type="submit" value="Register" />
            </form>

            <div className="register">
                <span style={{ color: '#657575' }}>Already have an account?</span>
                <Link to="/login"><button id="register-link">Log Instead</button></Link>
            </div>
        </div>
    );
};

export default Signup;
