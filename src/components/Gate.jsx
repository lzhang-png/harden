import { useState } from 'react';
import { verifyPasscode } from '../services/auth';
import './Gate.css';

export default function Gate({ onAuthenticated }) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await verifyPasscode(passcode);
      if (data.ok) {
        onAuthenticated(data.token);
      } else {
        setError('Incorrect passcode. Please try again.');
        setPasscode('');
      }
    } catch {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="gate">
      <h2>This page is protected</h2>
      <p>Enter the passcode to view the Design Roadmap.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Passcode"
          autoComplete="off"
          autoFocus
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Checking\u2026' : 'Enter'}
        </button>
      </form>
      <span className="error">{error}</span>
    </div>
  );
}
