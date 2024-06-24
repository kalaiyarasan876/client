import React from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

const Profile = () => {
  const currentUser = authService.getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/");
  };

  if (!currentUser) {
    return <h2>You are not logged in</h2>;
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">
              Kalai
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item"></li>
              
            </ul>
            <p>
                <strong>USER:</strong> {currentUser.user.username}
              </p>
              
              <p>
                <strong>Email:</strong> {currentUser.user.email}
              </p>

            <button className="btn btn-danger mx-3 " onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Profile;
