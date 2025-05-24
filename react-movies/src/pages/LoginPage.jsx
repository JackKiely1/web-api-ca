import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <h2>Login</h2>
      <input placeholder="Username" /><br />
      <input type="password" placeholder="Password" /><br />
      <button>Log In</button>
      <p>New user? <Link to="/signup">Sign up</Link></p>
    </>
  );
};

export default LoginPage;
