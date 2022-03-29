function RegisterScreen() {
    return (
        <div className="register">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="email" className="form-control username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email /&nbsp;Username"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nickname</label>
                    <input className="form-control username" placeholder="Nick&nbsp;name"></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">image</label>
                    <input className="form-control image" placeholder="Image"></input>
                    <input type="file" id="upload" hidden />
                    <label id = "photo" for="upload">Choose file</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control password" id="exampleInputPassword1" placeholder="Password"></input>
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control password" id="exampleInputPassword1" placeholder="Confirm Password"></input>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>

    );
}

export default RegisterScreen;