import { Link } from "react-router-dom";

function Login() {
    return (
        <div class = "body">
            <div class="alert-box">msg</div>
            <div class="form">
                <h1 class="heading">Login</h1>
                <input type="email" placeholder="email" autocomplete="off" class="email" required></input>
                <input type="password" placeholder="password" autocomplete="off" class="pass" required></input>
                <button class="submit-btn">Login</button>
                <a href="#" class="link">Don't have an account? Register here.</a>
            </div>
        </div>

    );
}
export default Login;