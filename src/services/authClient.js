const PASSCODE = import.meta.env.VITE_SITE_PASSCODE || 'roadmap2026';
const SECRET = import.meta.env.VITE_TOKEN_SECRET || 'dR7x$kQ9mW2pL4vN';

async function hmacSha256(secret, message) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(message));
  return Array.from(new Uint8Array(sig), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

async function makeToken() {
  const expires = Date.now() + 1000 * 60 * 60 * 4;
  const payload = String(expires);
  const sig = await hmacSha256(SECRET, payload);
  return `${payload}.${sig}`;
}

async function verifyTokenValue(token) {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [payload, sig] = parts;
  const expected = await hmacSha256(SECRET, payload);
  if (sig !== expected) return false;
  if (Date.now() > Number(payload)) return false;
  return true;
}

export async function verifyPasscodeClient(passcode) {
  if (passcode === PASSCODE) {
    return { ok: true, token: await makeToken() };
  }
  return { ok: false };
}

export async function verifyTokenClient(token) {
  return { ok: await verifyTokenValue(token) };
}
