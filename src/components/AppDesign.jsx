import { useEffect, useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AppDesign.css';

const SUBPAGES = [
  { to: '/app-design', end: true, title: 'Proposal 6/24' },
  { to: '/app-design/proposal-7-13', title: 'Proposal 7/13' },
];

export default function AppDesign() {
  const pageRef = useRef(null);

  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector('.app-nav');
      const h = nav ? nav.getBoundingClientRect().height : 0;
      pageRef.current?.style.setProperty('--nav-h', `${h}px`);
    };
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  return (
    <div className="page-container app-design-page" ref={pageRef}>
      <header className="page-header app-design-header">
        <h1 className="page-title">App Design</h1>
        <p className="ad-lead">
          Product design proposals for the Harden app — built directly in the front-end prototype.
        </p>
      </header>

      <div className="app-design-body">
        <nav className="app-design-toc" aria-label="App design proposals">
          <ol>
            {SUBPAGES.map((page) => (
              <li key={page.to}>
                <NavLink
                  to={page.to}
                  end={page.end}
                  className={({ isActive }) => (isActive ? 'toc-active' : undefined)}
                >
                  {page.title}
                </NavLink>
              </li>
            ))}
          </ol>
        </nav>

        <main className="app-design-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
