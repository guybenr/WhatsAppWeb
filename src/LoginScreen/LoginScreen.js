import React from "react";
import { BrowserRouter, Routes, Router,Route, Link } from 'react-router-dom';
import Hey from './Hey';

function LoginScreen(props) {
    return (
        <div className="home">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Username</label>
                    <input type="email" className="form-control username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email /&nbsp;Username"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control password" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div>
                    <label>Not register?&nbsp;</label>
                    <Router>
                    <Link to='/'>Click here</Link>
                    <Routes>
                        <Route path= "/" element = { <Hey />}></Route>
                    </Routes>
                    </Router>
                    <label>&nbsp;to register</label>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
        </div>
    );
}
export default LoginScreen