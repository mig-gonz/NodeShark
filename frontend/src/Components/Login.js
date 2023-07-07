import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import CurrentUser  from "../contexts/CurrentUser"

function Login() {

    const navigate = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)
    
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:9000/authentication/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            setCurrentUser(data.user)
            console.log(data.token)
            localStorage.setItem('token', data.token)
            navigate('/')
        } else {
            setErrorMessage(data.message)
        }
    }

    return (
        <div>
            <img class="brand-img" src="https://images.unsplash.com/photo-1610969524113-bae462bb3892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF0aGxldGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
            <h1 class="block text-3xl font-semibold text-center my-auto form-title">Login</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }

            <div class="form-container">
                <div class="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(85,85,85,0.8),0_10px_20px_-2px_rgba(85,85,85,0.8)] dark:bg-neutral-700">
                    <form onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <input
                                type="email"
                                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                placeholder="Enter email"
                                value={credentials.email}
							    onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                            />
                            <label
                                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Email Address</label>
                        </div>

                        {/* Password Input */}
                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <input
                                type="password"
                                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                placeholder="Password" 
                                value={credentials.password}
                                onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            />
                            <label
                                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Password</label>
                        </div>

                        {/* Register Link */}
                        <a 
                            class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                            href="/user/register"
                        >Don't have an account? Register here.</a>
                        
                        {/* :Login in Button */}
                        <button
                            type="submit"
                            class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;

{/* <div class = "body">
            <div class="alert-box">msg</div>
            <div class="form">
                <h1 class="heading">Login</h1>
                <input type="email" placeholder="email" autocomplete="off" class="email" required></input>
                <input type="password" placeholder="password" autocomplete="off" class="pass" required></input>
                <button class="submit-btn">Login</button>
                <Link to ="/user/register" class="link">Don't have an account? Register here.</Link>
            </div>
        </div> */}