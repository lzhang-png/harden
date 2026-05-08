import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1>Harden Design</h1>
      </header>

      <ul className="menu-list" role="list">
        <li>
          <Link className="menu-card" to="/proposal">
            <span className="menu-card-title">Full proposal</span>
            <span className="menu-card-hint">All directions &amp; pricing</span>
            <span className="menu-card-date">3.27.26</span>
          </Link>
        </li>
        <li>
          <Link className="menu-card" to="/brand-guidelines">
            <span className="menu-card-title">Brand guidelines</span>
            <span className="menu-card-hint">Logo usage, colors &amp; typography</span>
            <span className="menu-card-date">4.14.26</span>
          </Link>
        </li>
        <li>
          <Link className="menu-card" to="/presentation">
            <span className="menu-card-title">Presentation</span>
            <span className="menu-card-hint">Slides, narrative &amp; speaker notes</span>
            <span className="menu-card-date">5.7.26</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
