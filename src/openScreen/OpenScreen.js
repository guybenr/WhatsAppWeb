import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UsersList from "../usersList/UsersList";


function OpenScreen() {

    const navigate = useNavigate();

    const handleSubmit = () => {
        var username = document.getElementById('exampleInputEmail1').value;
        var password = document.getElementById('exampleInputPassword1').value;
        for (let i = 0; i < UsersList.length; i++) {
            if (UsersList[i].userName === username && UsersList[i].password === password) {
                navigate('/Chat');
                return;
            }
    
        }
        this.setState({ isLoggedIn: false });
    }


    return (
        <div className="home">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input className="form-control username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email /&nbsp;Username"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control password" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div>
                    <label>Not register?&nbsp;</label>
                    <Link to='/Register'>Click here</Link>
                    <label>&nbsp;to register</label>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
        </div>
    );
};



export default OpenScreen;