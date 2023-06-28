

function Register() {
    return (
        <div clas="form">
            <h1 class="heading">Register</h1>
            <input type="text" placeholder="First Name" autocomplete="off" class="first-name" required></input>
            <input type="text" placeholder="Last Name" autocomplete="off" class="last-name" required></input>
            <input type="email" placeholder="Email" autocomplete="off" class="email" required></input>
            <input type="password" placeholder="Password" autocomplete="off" class="password" required></input>
        </div>
    );
}

export default Register;