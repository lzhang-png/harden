import { Outlet, Link, useLocation } from 'react-router-dom';
import './AuthenticatedLayout.css';

export default function AuthenticatedLayout() {
  const { pathname } = useLocation();
  const showBack = pathname !== '/';

  return (
    <div className="auth-shell">
      {showBack && (
        <nav className="app-nav" aria-label="Site">
          <Link to="/" className="app-nav-link">
            ← Menu
          </Link>
        </nav>
      )}
      <Outlet />
    </div>
  );
}
