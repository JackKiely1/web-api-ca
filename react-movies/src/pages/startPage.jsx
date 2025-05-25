import { useContext } from "react";
import { AuthContext } from "../contexts/authContext"; 
import { Link } from "react-router-dom";

const StartPage = () => {
  const context = useContext(AuthContext);

  return context.isAuthenticated ? (
    <p>
      Welcome {context.userName}! Browse the <Link to="/discover">Discover</Link> page or visit your <Link to="/profile">Profile</Link>.
    </p>
  ) : (
    <p>
      <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to start browsing movies!
    </p>
  );
};

export default StartPage;
