import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UsersList from "../usersList/UsersList";
import { Modal, Button } from "react-bootstrap";
import ErrorModal from "../errorModal/ErrorModal";

function OpenScreen(props) {
    const navigate = useNavigate();
    const [isInvalid, setIsInvalid] = React.useState(false);

    const handleClose = () => {
        setIsInvalid(false);
    }
    const handleShow = () => {
        setIsInvalid(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('exampleInputPassword1').value;
        for (let i = 0; i < UsersList.length; i++) { // searching for the same username and password. 
            if (UsersList[i].userName === username && UsersList[i].password === password) {
                navigate('/Chat');
                return;
            }
        }
        handleShow();
    }


    return (
        <main>
            <div className="home" id="main-div">
                <div className="box shadow-lg p-3 mb-5 bg-body rounded">
                <label class="login">Login</label>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input className="form-control username" id="username" aria-describedby="emailHelp" placeholder="Email /&nbsp;Username"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control password" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <div className="mb-3">
                        <label>Not register?&nbsp;</label>
                        <Link to='/Register'>Click here</Link>
                        <label>&nbsp;to register</label>
                    </div>
                    <div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Log in</button>
                    </div>
                </form>
                </div>
                <ErrorModal handleShow={isInvalid} handleClose={handleClose} bodyMassage="Invalid username or password" closeButton="Close"/>
            </div>
        </main>
    );
};



export default OpenScreen;