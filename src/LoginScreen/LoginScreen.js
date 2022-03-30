import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router.dom';
import Hey from './Hey';

function LoginScreen() {
    return (
        <BrowserRouter>
            <div className="home">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input type="email" className="form-control username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email /&nbsp;Username"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control password" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <div>
                        <label>Not register?&nbsp;</label>
                        <Link to='/Hey'>Click here12312</Link>
                        <Routes>
                            <Route path='/Hey' element={<Hey />}>click here</Route>
                        </Routes>
                        <label>&nbsp;to register</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Log in</button>
                </form>
            </div>
        </BrowserRouter>
    );
}

const handleSubmit = (event) => {
    // prevent page reloading
    event.preventDefault();
    var {uname, pass}

}
export default LoginScreen