import { Link } from "react-router-dom";

function RegisterScreen(props) {
    return (
        <div className="register">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="email" class="form-control username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email /&nbsp;Username"></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Nickname</label>
                    <input class="form-control username" placeholder="Nick&nbsp;name"></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">image</label>
                    <input class="form-control image" placeholder="Image"></input>
                    <input type="file" id="upload" hidden />
                    <label id = "photo" for="upload">Choose file</label>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control password" id="exampleInputPassword1" placeholder="Password"></input>
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
        </div>
    );
}

export default RegisterScreen;