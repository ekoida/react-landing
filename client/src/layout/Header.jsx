import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
