import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gate from './components/Gate';
import AuthenticatedLayout from './components/AuthenticatedLayout';
import Menu from './components/Menu';
import Proposal from './components/Proposal';
import WebDesign from './components/WebDesign';
import { getStoredToken, storeToken, clearToken, verifyToken } from './services/auth';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = getStoredToken();
    if (!token) {
      setChecking(false);
      return;
    }

    verifyToken(token)
      .then((data) => {
        if (data.ok) {
          setAuthenticated(true);
        } else {
          clearToken();
        }
      })
      .catch(() => clearToken())
      .finally(() => setChecking(false));
  }, []);

  function handleAuthenticated(token) {
    storeToken(token);
    setAuthenticated(true);
  }

  if (checking) return null;

  if (!authenticated) {
    return <Gate onAuthenticated={handleAuthenticated} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthenticatedLayout />}>
          <Route index element={<Menu />} />
          <Route path="proposal" element={<Proposal />} />
          <Route path="web-design" element={<WebDesign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
