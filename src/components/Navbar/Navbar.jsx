import PropTypes from "prop-types";

const Navbar = ({ addCredit }) => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  text-[rgba(19,19,19,0.7)]"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <div>
            <img src="./images/logo.png" alt="logo" />
          </div>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 hidden lg:flex text-[rgba(19,19,19,0.7)]">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
          <a className="btn">
            {addCredit} Coin <i className="fa-solid fa-coins"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  addCredit: PropTypes.number.isRequired,
};

export default Navbar;
