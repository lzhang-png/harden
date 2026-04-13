import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1>Harden.run Design</h1>
      </header>

      <ul className="menu-list" role="list">
        <li>
          <Link className="menu-card menu-card-primary" to="/proposal">
            <span className="menu-card-title">Full proposal</span>
            <span className="menu-card-hint">All directions &amp; pricing</span>
          </Link>
        </li>
        <li>
          <Link className="menu-card" to="/web-design">
            <span className="menu-card-title">Web design</span>
            <span className="menu-card-hint">Site &amp; layout exploration</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
