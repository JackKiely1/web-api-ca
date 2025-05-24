import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <>
      <p>Welcome to MoviesTMDB!</p>
      <p>
        <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to start browsing movies!
      </p>
    </>
  );
};

export default StartPage;
