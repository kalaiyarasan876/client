import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

const Header = () => {

    const currentUser = authService.getCurrentUser();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      authService.logout();
      navigate("/");
    };
  
    useEffect(() => {
      if (!currentUser) {
        window.alert("You are not logged in...");
        navigate("/");
      }
    }, [currentUser, navigate]);
  
  return (
    <header class="p-3 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>
          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              class="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          {currentUser ? (
            <>
              <h4>WELCOME </h4>
              <b className="m-2 text-light">{currentUser.user.username}</b>
              <button
                className="btn btn-outline-danger me-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
