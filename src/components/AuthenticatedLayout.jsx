import { Outlet, Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { HardenLogo } from './HardenBrandLogos.jsx';
import { useTheme } from '../theme/useTheme';
import './AppNav.css';
import './AuthenticatedLayout.css';

export default function AuthenticatedLayout() {
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const logoMark = theme === 'dark' ? '#B5564E' : '#872921';
  const showBack = pathname !== '/';
  const isHome = pathname === '/';

  return (
    <div className={`auth-shell${isHome ? ' auth-shell--home' : ''}`}>
      <nav className="app-nav" aria-label="Site">
        <div className="app-nav-start">
          {showBack ? (
            <Link to="/" className="app-nav-back">
              ← Menu
            </Link>
          ) : (
            <Link to="/" className="app-nav-logo-link" aria-label="Design files home">
              <HardenLogo className="app-nav-logo" markColor={logoMark} />
            </Link>
          )}
        </div>
        <ThemeToggle />
      </nav>
      <Outlet />
    </div>
  );
}
