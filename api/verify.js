import crypto from 'crypto';

const PASSCODE = process.env.SITE_PASSCODE || 'roadmap2026';
const SECRET = process.env.TOKEN_SECRET || 'dR7x$kQ9mW2pL4vN';

function makeToken() {
  const expires = Date.now() + 1000 * 60 * 60 * 4; // 4 hours
  const payload = String(expires);
  const sig = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
  return `${payload}.${sig}`;
}

function verifyToken(token) {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [payload, sig] = parts;
  const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
  if (sig !== expected) return false;
  if (Date.now() > Number(payload)) return false;
  return true;
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { passcode, token } = req.body || {};

  if (token) {
    const ok = verifyToken(token);
    return res.status(ok ? 200 : 401).json({ ok });
  }

  if (passcode === PASSCODE) {
    return res.status(200).json({ ok: true, token: makeToken() });
  }

  return res.status(401).json({ ok: false });
}
