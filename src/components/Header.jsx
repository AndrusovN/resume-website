import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">

      <h1>Nikita Andrusov</h1>

      <nav>

        <NavLink to="/">Welcome page</NavLink>

        <NavLink to="/math">Math life</NavLink>

        <NavLink to="/software">Programming</NavLink>

        <NavLink to="/teaching">Teaching</NavLink>

        <NavLink to="/activities">Other</NavLink>

      </nav>

    </header>
  );
}