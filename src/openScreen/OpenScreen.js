import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function OpenScreen() {
    return (
        <div className="home">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="email" className="form-control username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email /&nbsp;Username"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control password" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div>
                    <label>Not register?&nbsp;</label>
                    <a href="url">Click here</a>
                    <label>&nbsp;to register</label>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
        </div>
    );
}

export default OpenScreen;