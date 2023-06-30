import React from 'react';
import { Link } from 'react-router-dom'

import Login from '../Components/Login';
import Register from '../Components/Register';

const  User = () => {
    return (
        <div class="container">
            <img class="brand-img" src="https://images.unsplash.com/photo-1610969524113-bae462bb3892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF0aGxldGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
            <div>
                <Login/>
            </div>
        </div>
    )
}

export default User;