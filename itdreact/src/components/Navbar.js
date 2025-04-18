import { Outlet, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/userReducer";
import logo from "../images/onlineShopping.png";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogin, userDetails } = useSelector((state) => state.user);
  const cartItemCount = useSelector((state) => state.cart.cartCounter);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-white position-fixed w-100 top-0 start-0 shadow">
        <div className="container-fluid px-4">
          {/* Left: Logo + Links */}
          <Link className="navbar-brand text-uppercase fw-800" to="/">
            <img
              style={{ height: "61px", width: "90px" }}
              src={logo}
              alt="logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fas fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            {/* Left-side links */}
            <ul className="navbar-nav me-auto">
              {userDetails?.userType !== "staff" ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">All</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/men">Men</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/women">Women</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/kids">Kids</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/JewellerySection">jewllery</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cosmetics">Beauty</Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/product_form">Publish Product</Link>
                </li>
              )}
            </ul>

            {/* Right-side: Search + Auth + Cart */}
            <form className="d-flex me-3" style={{ width: "200px" }}>
  <input
    className="form-control"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
</form>


            <ul className="navbar-nav d-flex align-items-center">
              {!isLogin ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <span className="fas fa-shopping-bag"></span> {cartItemCount}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </nav>
    </>
  );
};

export default AppNavbar;
