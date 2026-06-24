import { Link } from 'react-router-dom';
import './Menu.css';
import { HardenLogo } from './HardenBrandLogos.jsx';

export default function Menu() {
  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1 className="menu-header-title" aria-label="Design files">
          <span className="menu-header-logo-wrap" aria-hidden="true">
            <HardenLogo className="menu-header-logo" markColor="#872921" />
          </span>
        </h1>
      </header>

      <ul className="menu-list" role="list">
        <li>
          <Link className="menu-card" to="/brand-guidelines">
            <span className="menu-card-title">Brand guidelines</span>
            <span className="menu-card-hint">Logo usage, colors &amp; typography</span>
            <span className="menu-card-date">4.14.26</span>
          </Link>
        </li>
        <li>
          <Link className="menu-card" to="/presentation">
            <span className="menu-card-title">Presentation Templates</span>
            <span className="menu-card-hint">Slides, narrative &amp; speaker notes</span>
            <span className="menu-card-date">5.7.26</span>
          </Link>
        </li>
        <li>
          <Link className="menu-card" to="/website-improvement">
            <span className="menu-card-title">Website Improvement</span>
            <span className="menu-card-hint">Site updates &amp; mock reference</span>
            <span className="menu-card-date">5.9.26</span>
          </Link>
        </li>
        <li>
          <Link className="menu-card" to="/app-design">
            <span className="menu-card-title">App Design</span>
            <span className="menu-card-hint">Product UI &amp; mock reference</span>
            <span className="menu-card-date">6.23.26</span>
          </Link>
        </li>
      </ul>

      <p className="menu-last-updated">
        Last updated <time dateTime="2026-06-23">6.23.26</time>
      </p>
    </div>
  );
}
