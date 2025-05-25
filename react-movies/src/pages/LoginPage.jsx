import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";

const LoginPage = () => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false); // track form submission

    const login = async () => {
        await context.authenticate(userName, password);
        setSubmitted(true);
    };

    // Redirect after login
    if (context.isAuthenticated && submitted) {
        return <Navigate to="/discover" replace />;
    }

    return (
        <>
            <h2>Login page</h2>
            <p>You must log in to view the protected pages </p>
            <input
                id="username"
                placeholder="user name"
                onChange={e => setUserName(e.target.value)}
            /><br />
            <input
                id="password"
                type="password"
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
            /><br />
            <button onClick={login}>Log in</button>
            <p>Not Registered?
                <Link to="/signup">Sign Up!</Link>
            </p>
        </>
    );
};

export default LoginPage;
