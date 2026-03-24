import crypto from 'crypto';

const PASSCODE = process.env.SITE_PASSCODE || 'roadmap2026';
const SECRET = process.env.TOKEN_SECRET || 'dR7x$kQ9mW2pL4vN';

function makeToken() {
  const expires = Date.now() + 1000 * 60 * 60 * 4; // 4 hours
  const payload = String(expires);
  const sig = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
  return payload + '.' + sig;
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

const CONTENT_HTML = `
<div class="container">
  <header>
    <h1>Design Roadmap</h1>
    <p>A phased plan of brand &amp; marketing deliverables engineered to build enterprise credibility and accelerate growth.</p>
  </header>

  <section class="phase phase--1">
    <div class="phase-header">
      <span class="phase-badge">Phase 1</span>
      <span class="phase-title">Brand Foundations</span>
    </div>
    <div class="cards">
      <div class="card">
        <div class="card-top">
          <span class="card-category">Core Brand</span>
          <span class="card-purpose">Enterprise credibility &amp; consistency</span>
        </div>
        <ul>
          <li>Full logo suite — primary, wordmark, icon, variants, dark/light, favicon</li>
          <li>Comprehensive Brand Guidelines (logo usage, colors, typography, icons, photography, voice/tone, do's &amp; don'ts)</li>
        </ul>
      </div>
      <div class="card">
        <div class="card-top">
          <span class="card-category">Visual System</span>
          <span class="card-purpose">Unified, technical-yet-trustworthy language</span>
        </div>
        <ul>
          <li>Color palette + accessibility specs</li>
          <li>Custom icon set</li>
          <li>Illustration / pattern library</li>
          <li>Motion / animation guidelines</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="phase phase--2">
    <div class="phase-header">
      <span class="phase-badge">Phase 2</span>
      <span class="phase-title">Digital Presence</span>
    </div>
    <div class="cards">
      <div class="card">
        <div class="card-top">
          <span class="card-category">Website</span>
          <span class="card-purpose">#1 conversion &amp; thought-leadership hub</span>
        </div>
        <ul>
          <li>Complete multi-page website redesign — Homepage, Features, Solutions, Pricing, Resources, About/Team/Careers, Demo previews</li>
          <li>Campaign landing pages</li>
          <li>Custom architecture diagrams &amp; illustrations</li>
          <li>Animated explainers / hero elements</li>
          <li>Social sharing / OG images</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="phase phase--3">
    <div class="phase-header">
      <span class="phase-badge">Phase 3</span>
      <span class="phase-title">Marketing &amp; Sales Collaterals</span>
    </div>
    <div class="cards">
      <div class="card">
        <div class="card-top">
          <span class="card-category">Sales Assets</span>
          <span class="card-purpose">Supports long sales cycles &amp; investor talks</span>
        </div>
        <ul>
          <li>Investor &amp; sales pitch deck (10–15 slides + PDF)</li>
          <li>One-pager / product brochure (PDF)</li>
          <li>Case study &amp; testimonial templates</li>
          <li>Whitepaper / datasheet templates</li>
        </ul>
      </div>
      <div class="card">
        <div class="card-top">
          <span class="card-category">Technical Assets</span>
          <span class="card-purpose">Clear, professional technical messaging</span>
        </div>
        <ul>
          <li>Architecture &amp; security diagram library</li>
          <li>Comparison guides</li>
          <li>Email signature &amp; newsletter templates</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="phase phase--4">
    <div class="phase-header">
      <span class="phase-badge">Phase 4</span>
      <span class="phase-title">Growth &amp; Exposure</span>
    </div>
    <div class="cards">
      <div class="card">
        <div class="card-top">
          <span class="card-category">Content &amp; Social</span>
          <span class="card-purpose">Consistent content marketing &amp; awareness</span>
        </div>
        <ul>
          <li>Social media kit — LinkedIn/X post templates, carousels, quote graphics, story templates</li>
          <li>Infographic series</li>
          <li>Blog thumbnails &amp; content visuals</li>
        </ul>
      </div>
      <div class="card">
        <div class="card-top">
          <span class="card-category">Advertising</span>
          <span class="card-purpose">Targeted lead generation &amp; paid growth</span>
        </div>
        <ul>
          <li>LinkedIn / Google / YouTube ad creatives — images, carousels, video thumbnails</li>
          <li>Retargeting banners</li>
        </ul>
      </div>
      <div class="card">
        <div class="card-top">
          <span class="card-category">Press &amp; Events</span>
          <span class="card-purpose">PR, partnerships &amp; conference visibility</span>
        </div>
        <ul>
          <li>Full press kit — logos, bios, high-res images</li>
          <li>Media one-sheet</li>
          <li>Webinar / demo presentation templates</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="phase phase--5">
    <div class="phase-header">
      <span class="phase-badge">Phase 5</span>
      <span class="phase-title">Product &amp; Experiential</span>
    </div>
    <div class="cards">
      <div class="card">
        <div class="card-top">
          <span class="card-category">Product-Related</span>
          <span class="card-purpose">On-brand product visuals &amp; screenshots</span>
        </div>
        <ul>
          <li>Product design system / Figma component library</li>
          <li>Feature icons &amp; UI mockups</li>
        </ul>
      </div>
      <div class="card">
        <div class="card-top">
          <span class="card-category">Offline &amp; Events</span>
          <span class="card-purpose">In-person presence at AI/tech events</span>
        </div>
        <ul>
          <li>Business cards, letterhead</li>
          <li>Event booth assets — banners, roll-ups</li>
          <li>Swag designs — stickers, hoodies, notebooks</li>
          <li>Conference slide deck template</li>
        </ul>
      </div>
    </div>
  </section>

  <footer>Prepared for client review &middot; Design Roadmap</footer>
</div>`;

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { passcode, token } = req.body || {};

  if (token) {
    if (verifyToken(token)) {
      return res.status(200).json({ ok: true, html: CONTENT_HTML });
    }
    return res.status(401).json({ ok: false });
  }

  if (passcode === PASSCODE) {
    const newToken = makeToken();
    return res.status(200).json({ ok: true, token: newToken });
  }

  return res.status(401).json({ ok: false });
}
