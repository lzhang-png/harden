import { verifyPasscodeClient, verifyTokenClient } from './authClient.js';
import { assetUrl } from '../utils/assetUrl.js';

const TOKEN_KEY = '_token';
const USE_CLIENT_AUTH = import.meta.env.VITE_USE_CLIENT_AUTH === 'true';

export function getStoredToken() {
  return sessionStorage.getItem(TOKEN_KEY);
}

export function storeToken(token) {
  sessionStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  sessionStorage.removeItem(TOKEN_KEY);
}

export async function verifyPasscode(passcode) {
  if (USE_CLIENT_AUTH) {
    return verifyPasscodeClient(passcode);
  }

  const res = await fetch(assetUrl('/api/verify'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ passcode }),
  });
  return res.json();
}

export async function verifyToken(token) {
  if (USE_CLIENT_AUTH) {
    return verifyTokenClient(token);
  }

  const res = await fetch(assetUrl('/api/verify'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
  return res.json();
}
