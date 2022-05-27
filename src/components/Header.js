import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify Application</h1>
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "is-active" : undefined)}
          exact={true}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/create"
          className={({ isActive }) => (isActive ? "is-active" : undefined)}
        >
          Create Expense
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/help"
          className={({ isActive }) => (isActive ? "is-active" : undefined)}
        >
          Help
        </NavLink>
      </li>
    </ul>
  </header>
);
export default Header;
