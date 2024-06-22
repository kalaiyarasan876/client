import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, password);
      navigate("/profile");
    } catch (error) {
      setMessage("Error: " + error.response.data.msg);
    }
  };

  function handleClick(e) {
    e.preventDefault();
    navigate("/register");
  }

  return (
    <>
      <div className="container">
        <div class="d-flex justify-content-center h-100 mt-5 ">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>
            <label>Email</label>
            <input
              type="email"
              class="form-control" placeholder="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password" class="form-control" placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-success my-2 mt-3" type="submit">Login</button>
          <p className="fs-5">For New Users</p>
          <button
          className="btn btn-primary   "
            type="submit"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Register
          </button>
        </form>
        {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
