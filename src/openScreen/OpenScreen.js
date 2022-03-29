function OpenScreen() {
    return (
        <div className="home">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="email" class="form-control username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email /&nbsp;Username"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control password" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div>
                    <label>Not register?&nbsp;</label>
                    <a href="url">Click here</a>
                    <label>&nbsp;to register</label>
                </div>
                <button type="submit" class="btn btn-primary">Log in</button>
            </form>
        </div>
    );
}

export default OpenScreen;