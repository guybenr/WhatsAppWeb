import React from "react";
import { Link } from "react-router-dom";
import ErrorModal from "../errorModal/ErrorModal";


function RegisterScreen(props) {

    const [showError, setShowError] = React.useState(false);
    const [bodyMassage, setBodyMassage] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        var userName = document.getElementById('exampleInputEmail2').value;
        var nickName = document.getElementById('nick-name').value;
        var password = document.getElementById('exampleInputPassword2').value;
        var confirmPass = document.getElementById('exampleInputPassword1').value;
        
        // input validation
        if(userName === '') {
            setShowError(true);
            setBodyMassage("Please enter username.");
            return;
        }
        if(nickName === '') {
            setShowError(true);
            setBodyMassage("Please enter nickname.");
            return;
        }
        if(password === '') {
            setShowError(true);
            setBodyMassage("Please enter password.");
            return;
        }
        if(confirmPass === '') {
            setShowError(true);
            setBodyMassage("Please confirm your password.");
            return;
        }
        if(!(/^[A-Za-z]+[0-9]+$/.test(password))) { // test if password contain only letter and number using regex
            setShowError(true);
            setBodyMassage("Your password must be 8-20 characters long," + 
                            " contain letters and numbers, and must not contain spaces, special characters, or emoji.");
            return;
        }
        if(confirmPass !== password) {
            setShowError(true);
            setBodyMassage("The password confirmation does not match.");
            return;
        }
    }


    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label">Username</label>
                    <input class="form-control username" id="exampleInputEmail2" placeholder="Username"></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Nickname</label>
                    <input id="nick-name" class="form-control username" placeholder="Nick&nbsp;name"></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">image</label>
                    <input class="form-control image" placeholder="Image"></input>
                    <input type="file" id="upload" hidden />
                    <label id = "photo" for="upload">Choose file</label>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control password" id="exampleInputPassword2" placeholder="Password"></input>
                    <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control password" id="exampleInputPassword1" placeholder="Confirm Password"></input>
                </div>
                <div>
                    <label>Already register?&nbsp;</label>
                        <Link to='/'>Click here</Link>
                    <label>&nbsp;to login</label>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
            <ErrorModal handleShow={showError} handleClose={() => setShowError(false)} bodyMassage={bodyMassage} closeButton="Close"/>
        </div>
    );
}

export default RegisterScreen;