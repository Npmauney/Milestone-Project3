import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router";
import { CurrentUser } from './contexts/CurrentUser';

function Navigation() {

    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => navigate("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => navigate("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.firstName} {currentUser.lastName}
                <a href='#' onClick={() => {localStorage.removeItem('token'); window.location.reload()}}> Logout </a>
            </li>
        )
    }

    return (
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={() => navigate("/")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => navigate("/tasks")}>
                        To Do List
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => navigate("/tasks/new")}>
                        Add Task
                    </a>
                </li>
                {loginActions}
            </ul>
        </nav>
    )
}

export default Navigation;