import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        Pomodoro
      </h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </header>
  );
}
