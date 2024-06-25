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
        <div class="d-flex justify-content-center h-100 m-5 " >
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div>
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="d-flex gap-5">
              <button className="btn btn-success my-2 mt-3" type="submit">
                Login
              </button>

              <button
                className="btn btn-primary my-2 mt-3   "
                type="submit"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Register
              </button>
            </div>
            {message && <p className="text-danger">{message}</p>}
          </form>
          
        </div>
      </div>
    </>
  );
};

export default Login;
