import { useState, useCallback, useRef, useEffect } from 'react';
import {
  Shield, Lock, Key, Eye, EyeOff, Search, Settings, User, Users,
  Bell, Mail, ChevronRight, ArrowRight, Check, X, AlertTriangle,
  Info, ExternalLink, Download, Upload, Copy, Trash2, Edit, Plus,
} from 'lucide-react';
import './BrandGuidelines.css';
import { HardenLogo, HardenLogoStacked, HardenLogomark } from './HardenBrandLogos.jsx';

function DownloadSvgButton({ containerRef, filename }) {
  const handleDownload = useCallback(() => {
    const svgEl = containerRef.current?.querySelector('svg');
    if (!svgEl) return;
    const computed = getComputedStyle(containerRef.current).color;
    const clone = svgEl.cloneNode(true);
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.querySelectorAll('[fill="currentColor"]').forEach((el) => {
      el.setAttribute('fill', computed);
    });
    const blob = new Blob([clone.outerHTML], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }, [containerRef, filename]);

  return (
    <button className="brand-guide-download" onClick={handleDownload}>
      Download SVG
    </button>
  );
}

function hexToCmyk(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const k = 1 - Math.max(r, g, b);
  if (k === 1) return { c: 0, m: 0, y: 0, k: 100 };
  const c = Math.round(((1 - r - k) / (1 - k)) * 100);
  const m = Math.round(((1 - g - k) / (1 - k)) * 100);
  const y = Math.round(((1 - b - k) / (1 - k)) * 100);
  return { c, m, y, k: Math.round(k * 100) };
}

function CopyText({ className, value, children }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback((e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }, [value]);

  return (
    <span className={`${className} palette-copyable`} onClick={handleCopy} title={`Copy ${value}`}>
      {copied ? 'Copied' : children}
    </span>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

function PaletteTable({ group }) {
  return (
    <div className="palette-table-group">
      <span className="palette-group-name">{group.name}</span>
      <table className="palette-table">
        <thead>
          <tr>
            <th className="palette-th-swatch"></th>
            <th>Shade</th>
            <th>HEX</th>
            <th>RGB</th>
            <th>CMYK</th>
          </tr>
        </thead>
        <tbody>
          {group.shades.map((shade) => {
            const cmyk = hexToCmyk(shade.hex);
            const cmykStr = `${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k}`;
            const rgbStr = hexToRgb(shade.hex);
            return (
              <tr key={shade.hex}>
                <td>
                  <div className="palette-table-swatch" style={{ background: shade.hex }} />
                </td>
                <td className="palette-table-label">{shade.label}</td>
                <td><CopyText className="palette-table-value" value={shade.hex}>{shade.hex}</CopyText></td>
                <td><CopyText className="palette-table-value" value={rgbStr}>{rgbStr}</CopyText></td>
                <td><CopyText className="palette-table-value" value={cmykStr}>{cmykStr}</CopyText></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const FAVICON_PATH = 'M64.3155 61.3053H115.685V34.4167C115.685 33.082 116.769 32 118.108 32H150.834C152.652 32 153.848 33.9251 153.074 35.5651C150.26 41.5288 145.038 53.6278 145.038 61.3053C145.038 70.6349 152.749 131.718 154.48 145.319C154.664 146.764 153.53 148 152.069 148H115.685V116.253C115.685 102.091 104.185 90.6105 90 90.6105C75.8148 90.6105 64.3155 102.091 64.3155 116.253V148H27.9306C26.4701 148 25.3356 146.764 25.5196 145.319C27.2513 131.718 34.9617 70.6349 34.9617 61.3053C34.9617 53.6278 29.7403 41.5288 26.926 35.5651C26.1521 33.9251 27.3481 32 29.1656 32H61.8922C63.2305 32 64.3155 33.082 64.3155 34.4167V61.3053Z';

function FaviconIcon({ className, color = '#000000' }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={FAVICON_PATH} fill={color} />
    </svg>
  );
}

function downloadFavicon(size, fillColor, bgColor, filename) {
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="${size}" height="${size}"><rect width="180" height="180" fill="${bgColor}"/><path d="${FAVICON_PATH}" fill="${fillColor}"/></svg>`;
  const blob = new Blob([svgMarkup], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, size, size);
    URL.revokeObjectURL(url);
    canvas.toBlob((pngBlob) => {
      const pngUrl = URL.createObjectURL(pngBlob);
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(pngUrl);
    }, 'image/png');
  };
  img.src = url;
}

function DownloadFaviconButton({ size, fillColor, bgColor, filename }) {
  const handleDownload = useCallback(() => {
    downloadFavicon(size, fillColor, bgColor, filename);
  }, [size, fillColor, bgColor, filename]);

  return (
    <button className="brand-guide-download" onClick={handleDownload}>
      Download {size}×{size} PNG
    </button>
  );
}

const sections = [
  {
    id: 'logo',
    title: 'Logo',
    showLogo: true,
    desc: 'The logo comes in horizontal, stacked, and logomark variants, each available in on-light, on-dark, and mono versions.',
  },
  {
    id: 'clear-space',
    title: 'Clear space & minimum size',
    showClearSpace: true,
  },
  {
    id: 'logo-misuse',
    title: 'Logo misuse',
    showMisuse: true,
  },
  {
    id: 'color-palette',
    title: 'Color palette',
    palette: [
      {
        name: 'Crimson',
        base: '#872921',
        shades: [
          { hex: '#F9E8E7', label: '50' },
          { hex: '#F2D5D3', label: '100' },
          { hex: '#E4A9A4', label: '200' },
          { hex: '#D4827B', label: '300' },
          { hex: '#B5564E', label: '400' },
          { hex: '#872921', label: '500' },
          { hex: '#72231C', label: '600' },
          { hex: '#5E1D17', label: '700' },
          { hex: '#441510', label: '800' },
          { hex: '#351210', label: '900' },
        ],
      },
      {
        name: 'Gold',
        base: '#BEA163',
        shades: [
          { hex: '#F4F2EA', label: '50' },
          { hex: '#EDE8D5', label: '100' },
          { hex: '#DED2B0', label: '200' },
          { hex: '#D4C08A', label: '300' },
          { hex: '#C9B076', label: '400' },
          { hex: '#BEA163', label: '500' },
          { hex: '#A48B52', label: '600' },
          { hex: '#8A7340', label: '700' },
          { hex: '#6E5B31', label: '800' },
          { hex: '#524422', label: '900' },
        ],
      },
      {
        name: 'Charcoal',
        base: '#31353B',
        shades: [
          { hex: '#E8E9EA', label: '50' },
          { hex: '#D2D3D5', label: '100' },
          { hex: '#B0B2B6', label: '200' },
          { hex: '#8A8D92', label: '300' },
          { hex: '#5E6268', label: '400' },
          { hex: '#31353B', label: '500' },
          { hex: '#292C31', label: '600' },
          { hex: '#1F2226', label: '700' },
          { hex: '#171A1D', label: '800' },
          { hex: '#111314', label: '900' },
        ],
      },
    ],
  },
  {
    id: 'typography',
    title: 'Typography',
    showTypography: true,
  },
  {
    id: 'iconography',
    title: 'Iconography',
    showIconography: true,
  },
  {
    id: 'imagery',
    title: 'Imagery & photography',
    showImagery: true,
    desc: 'Classical oil-painting hero scenes—visible brushwork, warm chiaroscuro, and gold-armor highlights—plus painterly maritime and isometric fortress views. Every subject ties back to a security metaphor.',
  },
  {
    id: 'voice-tone',
    title: 'Voice & tone',
    showVoiceTone: true,
    desc: 'Authoritative, direct, and protective. Medieval metaphors keep the copy vivid while the tone stays concise.',
  },
];

function ClearSpaceDiagram({ label, children, variant }) {
  const logoRef = useRef(null);
  const [pad, setPad] = useState(24);

  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;
    const svg = el.querySelector('svg');
    if (!svg) return;

    const measure = () => setPad(svg.getBoundingClientRect().height * 0.5);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(svg);
    return () => ro.disconnect();
  }, []);

  const variantClass = variant ? ` clearspace-diagram--${variant}` : '';

  return (
    <div className={`clearspace-diagram${variantClass}`}>
      <span className="clearspace-diagram-label">{label}</span>
      <div className="clearspace-box">
        <div className="clearspace-zone" style={{ padding: pad }}>
          <span className="clearspace-dim clearspace-dim-top" style={{ top: pad / 2 }}>0.5H</span>
          <span className="clearspace-dim clearspace-dim-bottom" style={{ bottom: pad / 2 }}>0.5H</span>
          <span className="clearspace-dim clearspace-dim-left" style={{ left: pad / 2 }}>0.5H</span>
          <span className="clearspace-dim clearspace-dim-right" style={{ right: pad / 2 }}>0.5H</span>
          <div className="clearspace-logo" ref={logoRef}>{children}</div>
        </div>
      </div>
    </div>
  );
}

function ClearSpaceShowcase() {
  return (
    <div className="clearspace-showcase">
      <p className="clearspace-intro">
        Clear space is defined as <strong>0.5× the height of the logomark (H)</strong> on all sides.
        Nothing (text, images, borders, or other logos) should enter this zone.
      </p>
      <div className="clearspace-grid">
        <ClearSpaceDiagram label="Horizontal lockup">
          <HardenLogo className="clearspace-logo-svg" />
        </ClearSpaceDiagram>
        <ClearSpaceDiagram label="Stacked lockup" variant="stacked">
          <HardenLogoStacked className="clearspace-logo-svg clearspace-logo-stacked" />
        </ClearSpaceDiagram>
        <ClearSpaceDiagram label="Logomark" variant="mark">
          <HardenLogomark className="clearspace-logo-svg clearspace-logo-mark" />
        </ClearSpaceDiagram>
      </div>
      <div className="clearspace-min-sizes">
        <span className="clearspace-diagram-label">Minimum reproduction sizes</span>
        <table className="clearspace-table">
          <thead>
            <tr>
              <th>Variant</th>
              <th>Digital (min width)</th>
              <th>Print (min width)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Horizontal lockup</td><td>100 px</td><td>25 mm</td></tr>
            <tr><td>Stacked lockup</td><td>64 px</td><td>16 mm</td></tr>
            <tr><td>Logomark</td><td>16 px</td><td>8 mm</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LogoShowcase() {
  const hLightRef = useRef(null);
  const hDarkRef = useRef(null);
  const sLightRef = useRef(null);
  const sDarkRef = useRef(null);
  const mLightRef = useRef(null);
  const mDarkRef = useRef(null);
  const hMonoLightRef = useRef(null);
  const hMonoDarkRef = useRef(null);
  const sMonoLightRef = useRef(null);
  const sMonoDarkRef = useRef(null);
  const mMonoLightRef = useRef(null);
  const mMonoDarkRef = useRef(null);

  return (
    <div className="brand-guide-logo-showcase">
      <div className="brand-guide-logo-row">
        <span className="brand-guide-logo-variant-label">Horizontal lockup</span>
        <div className="brand-guide-logo-pair">
          <div className="brand-guide-logo-cell">
            <div className="brand-guide-logo-light" ref={hLightRef}>
              <HardenLogo className="brand-guide-logo-svg" />
            </div>
            <div className="brand-guide-logo-meta">
              <span className="brand-guide-logo-bg-label">On light</span>
              <DownloadSvgButton containerRef={hLightRef} filename="harden-horizontal-light.svg" />
            </div>
          </div>
          <div className="brand-guide-logo-cell">
            <div className="brand-guide-logo-dark" ref={hDarkRef}>
              <HardenLogo className="brand-guide-logo-svg" markColor="#B5564E" />
            </div>
            <div className="brand-guide-logo-meta">
              <span className="brand-guide-logo-bg-label">On dark</span>
              <DownloadSvgButton containerRef={hDarkRef} filename="harden-horizontal-dark.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="brand-guide-logo-row">
        <span className="brand-guide-logo-variant-label">Stacked lockup</span>
        <div className="brand-guide-logo-pair">
          <div className="brand-guide-logo-cell">
            <div className="brand-guide-logo-light" ref={sLightRef}>
              <HardenLogoStacked className="brand-guide-logo-svg brand-guide-logo-stacked" />
            </div>
            <div className="brand-guide-logo-meta">
              <span className="brand-guide-logo-bg-label">On light</span>
              <DownloadSvgButton containerRef={sLightRef} filename="harden-stacked-light.svg" />
            </div>
          </div>
          <div className="brand-guide-logo-cell">
            <div className="brand-guide-logo-dark" ref={sDarkRef}>
              <HardenLogoStacked className="brand-guide-logo-svg brand-guide-logo-stacked" markColor="#B5564E" />
            </div>
            <div className="brand-guide-logo-meta">
              <span className="brand-guide-logo-bg-label">On dark</span>
              <DownloadSvgButton containerRef={sDarkRef} filename="harden-stacked-dark.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="brand-guide-logo-row">
        <span className="brand-guide-logo-variant-label">Logomark</span>
        <div className="brand-guide-logo-pair">
          <div className="brand-guide-logo-cell">
            <div className="brand-guide-logo-light" ref={mLightRef}>
              <HardenLogomark className="brand-guide-logo-svg brand-guide-logo-mark" />
            </div>
            <div className="brand-guide-logo-meta">
              <span className="brand-guide-logo-bg-label">On light</span>
              <DownloadSvgButton containerRef={mLightRef} filename="harden-logomark-light.svg" />
            </div>
          </div>
          <div className="brand-guide-logo-cell">
            <div className="brand-guide-logo-dark" ref={mDarkRef}>
              <HardenLogomark className="brand-guide-logo-svg brand-guide-logo-mark" color="#B5564E" />
            </div>
            <div className="brand-guide-logo-meta">
              <span className="brand-guide-logo-bg-label">On dark</span>
              <DownloadSvgButton containerRef={mDarkRef} filename="harden-logomark-dark.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="brand-guide-logo-row">
        <span className="brand-guide-logo-variant-label">Horizontal lockup, mono</span>
        <div className="brand-guide-logo-pair">
          <div className="brand-guide-logo-cell">
            <div className="brand-guide-logo-light brand-guide-logo-mono" ref={hMonoLightRef}>
              <HardenLogo className="brand-guide-logo-svg" markColor="#000000" />
            </div>
            <div className="brand-guide-logo-meta">
              <span className="brand-guide-logo-bg-label">Black on white</span>
              <DownloadSvgButton containerRef={hMonoLightRef} filename="harden-horizontal-mono-black.svg" />
            </div>
          </div>
          <div className="brand-guide-logo-cell">
            <div className="brand-guide-logo-dark brand-guide-logo-mono" ref={hMonoDarkRef}>
              <HardenLogo className="brand-guide-logo-svg" markColor="#FFFFFF" />
            </div>
            <div className="brand-guide-logo-meta">
              <span className="brand-guide-logo-bg-label">White on black</span>
              <DownloadSvgButton containerRef={hMonoDarkRef} filename="harden-horizontal-mono-white.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="brand-guide-logo-row">
        <span className="brand-guide-logo-variant-label">Stacked lockup, mono</span>
        <div className="brand-guide-logo-pair">
          <div className="brand-guide-logo-cell">
            <div className="brand-guide-logo-light brand-guide-logo-mono" ref={sMonoLightRef}>
              <HardenLogoStacked className="brand-guide-logo-svg brand-guide-logo-stacked" markColor="#000000" />
            </div>
            <div className="brand-guide-logo-meta">
              <span className="brand-guide-logo-bg-label">Black on white</span>
              <DownloadSvgButton containerRef={sMonoLightRef} filename="harden-stacked-mono-black.svg" />
            </div>
          </div>
          <div className="brand-guide-logo-cell">
            <div className="brand-guide-logo-dark brand-guide-logo-mono" ref={sMonoDarkRef}>
              <HardenLogoStacked className="brand-guide-logo-svg brand-guide-logo-stacked" markColor="#FFFFFF" />
            </div>
            <div className="brand-guide-logo-meta">
              <span className="brand-guide-logo-bg-label">White on black</span>
              <DownloadSvgButton containerRef={sMonoDarkRef} filename="harden-stacked-mono-white.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="brand-guide-logo-row">
        <span className="brand-guide-logo-variant-label">Logomark, mono</span>
        <div className="brand-guide-logo-pair">
          <div className="brand-guide-logo-cell">
            <div className="brand-guide-logo-light brand-guide-logo-mono" ref={mMonoLightRef}>
              <HardenLogomark className="brand-guide-logo-svg brand-guide-logo-mark" color="#000000" />
            </div>
            <div className="brand-guide-logo-meta">
              <span className="brand-guide-logo-bg-label">Black on white</span>
              <DownloadSvgButton containerRef={mMonoLightRef} filename="harden-logomark-mono-black.svg" />
            </div>
          </div>
          <div className="brand-guide-logo-cell">
            <div className="brand-guide-logo-dark brand-guide-logo-mono" ref={mMonoDarkRef}>
              <HardenLogomark className="brand-guide-logo-svg brand-guide-logo-mark" color="#FFFFFF" />
            </div>
            <div className="brand-guide-logo-meta">
              <span className="brand-guide-logo-bg-label">White on black</span>
              <DownloadSvgButton containerRef={mMonoDarkRef} filename="harden-logomark-mono-white.svg" />
            </div>
          </div>
        </div>
      </div>

      <div className="brand-guide-logo-row">
        <span className="brand-guide-logo-variant-label">Favicon</span>

        <div className="brand-guide-favicon-example">
          <div className="brand-guide-favicon-preview">
            <svg className="brand-guide-favicon-svg" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="180" height="180" fill="#F4F2EA"/>
              <path d={FAVICON_PATH} fill="#872921"/>
            </svg>
          </div>
          <div className="brand-guide-favicon-sizes">
            {[
              { size: 16, label: '16×16', use: 'Browser tab' },
              { size: 32, label: '32×32', use: 'Taskbar / bookmark' },
              { size: 180, label: '180×180', use: 'Apple touch icon' },
              { size: 512, label: '512×512', use: 'Google / PWA' },
            ].map((item) => (
              <div className="brand-guide-favicon-size-row" key={item.size}>
                <span className="brand-guide-favicon-size">{item.label}</span>
                <span className="brand-guide-favicon-use">{item.use}</span>
                <DownloadFaviconButton size={item.size} fillColor="#872921" bgColor="#F4F2EA" filename={`favicon-${item.size}.png`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const BRAND_KEYWORDS = [
  { concept: 'Security', metaphor: 'Knight, shield' },
  { concept: 'Build', metaphor: 'Building the castle' },
  { concept: 'Enterprise', metaphor: 'Map of connected castles' },
  { concept: 'Governance', metaphor: 'King oversees the town' },
  { concept: 'In House', metaphor: 'Forging inside the castle' },
  { concept: 'Scan then fix', metaphor: 'Team of knights scouting' },
];

const VOICE_DONTS = [
  { preferred: 'Harden your deployment', avoided: 'Utilize our hardening solution' },
  { preferred: 'Runs in your VPC', avoided: 'Leverages your cloud infrastructure' },
  { preferred: 'Fix vulnerabilities fast', avoided: 'Remediate security deficiencies efficiently' },
  { preferred: 'Sign in', avoided: 'Log in / Login' },
  { preferred: 'Set up', avoided: 'Configure / Provision' },
  { preferred: 'Your app', avoided: 'Your application workload' },
];

const SOCIAL_AD_PHRASES = [
  'Harden AI code before it leaves the gate.',
  'Deploy like a knight. Govern like a king.',
  'Scan fast. Patch faster.',
  'Forge secure AI apps in house.',
  'Forge fast. Ship hardened.',
  'Your AI app. Your cloud. Your walls.',
  'SSO, SCIM, and secure deploys without the siege.',
  'Keep data inside the castle walls.',
  'From prototype to protected in minutes.',
  'Every PR scouted. Every weakness challenged.',
  'Enterprise guardrails for AI-built apps.',
  'Zero DevOps overhead. Full fortress control.',
  'Run in your VPC. Keep credentials in house.',
  'Security that stands watch while your team ships.',
];

function VoiceToneShowcase() {
  const [copiedPhrase, setCopiedPhrase] = useState(null);

  const handleCopyPhrase = useCallback((phrase) => {
    navigator.clipboard.writeText(phrase).then(() => {
      setCopiedPhrase(phrase);
      setTimeout(() => setCopiedPhrase(null), 1200);
    });
  }, []);

  return (
    <div className="voice-tone-showcase">
      <div className="voice-personality">
        <span className="voice-section-label">Personality</span>
        <div className="voice-traits">
          <div className="voice-trait">
            <span className="voice-trait-name">Authoritative</span>
            <span className="voice-trait-desc">Speak with earned confidence. A fortress, not a sales pitch.</span>
          </div>
          <div className="voice-trait">
            <span className="voice-trait-name">Direct</span>
            <span className="voice-trait-desc">Say it in fewer words; cut jargon unless it adds precision.</span>
          </div>
          <div className="voice-trait">
            <span className="voice-trait-name">Protective</span>
            <span className="voice-trait-desc">Frame every feature as something that guards the user's work.</span>
          </div>
        </div>
      </div>

      <div className="voice-metaphors">
        <span className="voice-section-label">Brand metaphors</span>
        <p className="voice-metaphors-intro">Every product concept maps to a medieval metaphor. Use these to keep copy vivid and consistent.</p>
        <div className="voice-keyword-grid">
          {BRAND_KEYWORDS.map((kw) => (
            <div className="voice-keyword" key={kw.concept}>
              <span className="voice-keyword-concept">{kw.concept}</span>
              <span className="voice-keyword-metaphor">{kw.metaphor}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="voice-context">
        <span className="voice-section-label">Tone by context</span>
        <div className="voice-context-grid">
          <div className="voice-context-card">
            <span className="voice-context-type">Marketing</span>
            <span className="voice-context-example">"Harden your deployment, like a knight."</span>
            <span className="voice-context-note">Bold metaphors, punchy headlines, confident.</span>
          </div>
          <div className="voice-context-card">
            <span className="voice-context-type">Product UI</span>
            <span className="voice-context-example">"Scan complete. 2 issues found."</span>
            <span className="voice-context-note">Neutral, brief, action-oriented.</span>
          </div>
          <div className="voice-context-card">
            <span className="voice-context-type">Support</span>
            <span className="voice-context-example">"We're looking into this. You'll hear back within the hour."</span>
            <span className="voice-context-note">Warm, reassuring, no deflection.</span>
          </div>
        </div>
      </div>

      <div className="voice-social">
        <span className="voice-section-label">Social ad phrases</span>
        <p className="voice-metaphors-intro">
          Short banner lines grounded in Harden's core offer: secure AI-generated code, enterprise identity,
          scan-and-fix workflows, and deployment inside the customer's own cloud.
        </p>
        <div className="voice-social-grid">
          {SOCIAL_AD_PHRASES.map((phrase) => (
            <div className="voice-social-card" key={phrase}>
              <span className="voice-social-phrase">{phrase}</span>
              <button
                type="button"
                className="imagery-prompt-copy voice-social-copy"
                onClick={() => handleCopyPhrase(phrase)}
              >
                {copiedPhrase === phrase ? 'Copied' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="voice-donts">
        <span className="voice-section-label">This, not that</span>
        <table className="voice-donts-table">
          <thead>
            <tr>
              <th>Preferred</th>
              <th>Avoid</th>
            </tr>
          </thead>
          <tbody>
            {VOICE_DONTS.map((row) => (
              <tr key={row.preferred}>
                <td className="voice-preferred">{row.preferred}</td>
                <td className="voice-avoided">{row.avoided}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TypographyShowcase() {
  const scale = [
    { level: 'H1', size: '3rem', lh: '1.15', ls: '-0.02em', font: 'title' },
    { level: 'H2', size: '2.25rem', lh: '1.2', ls: '-0.015em', font: 'title' },
    { level: 'H3', size: '1.75rem', lh: '1.25', ls: '-0.01em', font: 'title' },
    { level: 'H4', size: '1.25rem', lh: '1.3', ls: '-0.005em', font: 'title' },
    { level: 'Body', size: '1rem', lh: '1.6', ls: '0', font: 'body' },
    { level: 'Caption', size: '0.75rem', lh: '1.5', ls: '0.02em', font: 'body' },
  ];

  return (
    <div className="typo-showcase">
      <div className="typo-families">
        <div className="typo-family">
          <span className="typo-family-role">Display / Headlines</span>
          <span className="typo-family-name" style={{ fontFamily: "'Newsreader', 'Georgia', serif", fontWeight: 300 }}>
            Newsreader Light
          </span>
          <span className="typo-family-meta">Weight 300 · Optical size 6–72</span>
          <p className="typo-specimen" style={{ fontFamily: "'Newsreader', serif", fontWeight: 300, fontSize: '1.5rem' }}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
            0123456789 &amp; !? @ # $ %
          </p>
          <span className="typo-family-fallback">Fallback: Georgia, 'Times New Roman', serif</span>
        </div>

        <div className="typo-family">
          <span className="typo-family-role">Body / UI</span>
          <span className="typo-family-name" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
            Poppins Regular
          </span>
          <span className="typo-family-meta">Weight 400 · Also available in 300, 500, 600, 700</span>
          <p className="typo-specimen" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '1.25rem' }}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
            0123456789 &amp; !? @ # $ %
          </p>
          <span className="typo-family-fallback">Fallback: 'Helvetica Neue', Arial, sans-serif</span>
        </div>
      </div>

      <div className="typo-scale">
        <span className="typo-scale-title">Type scale</span>
        <div className="typo-scale-stack">
          {scale.map((s) => (
            <div className="typo-scale-row" key={s.level}>
              <span
                className="typo-scale-sample"
                style={{
                  fontFamily: s.font === 'title' ? "'Newsreader', serif" : "'Poppins', sans-serif",
                  fontWeight: s.font === 'title' ? 300 : 400,
                  fontSize: s.size,
                  lineHeight: s.lh,
                  letterSpacing: s.ls,
                }}
              >
                {s.level === 'Body' || s.level === 'Caption'
                  ? 'The quick brown fox jumps over the lazy dog'
                  : 'Harden Security'}
              </span>
              <div className="typo-scale-meta">
                <span className="typo-scale-level">{s.level}</span>
                <span className="typo-scale-specs">{s.size} / {s.lh} / {s.ls}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="typo-links">
        <span className="typo-links-label">Google Fonts</span>
        <a href="https://fonts.google.com/specimen/Newsreader" target="_blank" rel="noopener noreferrer">Newsreader <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V10C1.5 10.2761 1.72386 10.5 2 10.5H10C10.2761 10.5 10.5 10.2761 10.5 10V8.5M7 1.5H10.5V5M10.5 1.5L5.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        <a href="https://fonts.google.com/specimen/Poppins" target="_blank" rel="noopener noreferrer">Poppins <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V10C1.5 10.2761 1.72386 10.5 2 10.5H10C10.2761 10.5 10.5 10.2761 10.5 10V8.5M7 1.5H10.5V5M10.5 1.5L5.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </div>
    </div>
  );
}

const IMAGERY_EXAMPLES = [
  {
    src: '/imagery/kingdom.png',
    title: 'The Kingdom',
    desc: 'A crowned knight seen from behind in gold plate and a deep crimson cape—authority and oversight.',
    prompt:
      'Regal medieval knight in highly polished ceremonial gold plate armor, seen from behind and slightly to the side; ornate crown-integrated helm, heavy deep-crimson velvet cape with gold embroidery. Soft off-white ground like a classical portrait panel. Style: classical oil painting with visible brushstrokes, subtle impasto on metal highlights, thin glazes in shadows, rich pigmented reds and golds reminiscent of Old Master portraiture. Lighting: warm directional key with gentle falloff, soft chiaroscuro, delicate edge light on armor pleats and fabric folds. Mood: sovereign, contemplative, timeless fantasy epic.',
    objectPosition: 'right center',
  },
  {
    src: '/imagery/fleet.png',
    title: 'The Fleet',
    desc: 'Timber sailing ships on a wind-ripped sea—patrol, reach, and supply beyond the walls.',
    prompt:
      'Several medieval cogs and round-hulled sailing ships on a choppy teal-blue sea with whitecaps and foam at the bows; billowing cream sails, carved prows, rope rigging. Neutral pale sky. Style: classical marine oil painting—broken color in the water, scumbled sky, painterly wave crests, atmospheric perspective, canvas texture suggested. Lighting: cool ambient sky balanced by warm low sun glints on sails and hulls. Palette: ultramarine and cerulean seas, warm ivory sails, weathered timber browns. Mood: expeditionary, vigilant, historic epic.',
  },
  {
    src: '/imagery/forge.png',
    title: 'The Forge',
    desc: 'An armored smith at the stone anvil, hammer raised over white-hot metal—craftsmanship under pressure.',
    prompt:
      'Knight in full ornate gold plate armor as a blacksmith behind a rough stone anvil, mid-swing with a heavy blacksmith hammer, tongs holding incandescent metal with furnace-white heat and a faint violet reflection on the steel. Purple fabric tabard visible beneath armor. Soft cream backdrop. Style: classical oil painting with thick impasto sparks of light, transparent dark glazes in the anvil recesses, fine sgraffito scratches suggesting hammered metal, hand-blended edges like a studio canvas. Lighting: dramatic chiaroscuro from the hot metal, warm secondary bounce on breastplate. Mood: industrious, resolute, master-craftsman.',
    objectPosition: 'center top',
  },
  {
    src: '/imagery/cavalry.png',
    title: 'The Cavalry',
    desc: 'Three knights on white chargers driving forward—coordinated response and rapid reinforcement.',
    prompt:
      'Three knights in elaborate polished gold plate mounted on pale warhorses, charging toward the viewer in a shallow V; lances, shields, barding with engraved scrollwork. Cream neutral ground. Style: classical equestrian oil painting in the tradition of heroic battle canvases—energetic brushwork in manes and dust, tight rendering on armor highlights, rich earth and gold tones. Lighting: strong frontal warm key with sculptural shadows, wet-looking metal reflections. Mood: disciplined momentum, unity, decisive action.',
  },
  {
    src: '/imagery/gatehouse.png',
    title: 'The Gatehouse',
    desc: 'Mossy stone towers flanking a heavy timber gate—the first line at the perimeter.',
    prompt:
      'Medieval stone gatehouse: twin square towers with crenellations, weathered ashlar blocks, green moss and trailing vines, rounded timber double doors with iron studs, dirt path leading to the entrance, pale sky. Style: classical architectural oil painting—careful perspective, descriptive brush texture in masonry, soft atmospheric haze, naturalistic plant growth. Lighting: warm oblique daylight, gentle shadow pockets under arch and eaves. Palette: greige and warm stone, muted sap greens, restrained sky blues. Mood: enduring, guarded, monumental.',
    objectPosition: 'center bottom',
  },
  {
    src: '/imagery/fortress.png',
    title: 'The Fortress',
    desc: 'A painterly isometric walled city—layered walls, towers, and roofs as structured defense.',
    prompt:
      'High-angle isometric view of a sprawling medieval fortified city: circular curtain wall, dense cluster of towers with russet terracotta conical roofs, inner keeps, gates, and courtyards, surrounded by tidy grass and a few trees—like a hand-painted “bird’s-eye” siege map brought to life. Style: classical oil painting meets cartographic illustration—visible brush marks on rooftops and foliage, subtle glazing for depth planes, warm umber linework feel, not flat vector. Lighting: soft overhead sun with consistent cast shadows defining walls and lanes. Palette: warm stone, burnt sienna roofs, sap green grounds, dusty atmospheric sky. Mood: systemic, layered, impenetrable.',
  },
];

const SOCIAL_AD_EXAMPLES = [
  { alt: 'Deploy like a knight. Govern like a king.', src: '/imagery/ads-ii/ad_01.png', download: 'harden-ad-ii-01.png' },
  { alt: 'Forge fast. Ship hardened.', src: '/imagery/ads-ii/ad_02.png', download: 'harden-ad-ii-02.png' },
  { alt: 'Forge secure AI apps in house.', src: '/imagery/ads-ii/ad_03.png', download: 'harden-ad-ii-03.png' },
  { alt: 'Every PR scouted. Every weakness challenged.', src: '/imagery/ads-ii/ad_04.png', download: 'harden-ad-ii-04.png' },
  { alt: 'Harden AI code before it leaves the gate.', src: '/imagery/ads-ii/ad_05.png', download: 'harden-ad-ii-05.png' },
  { alt: 'Keep data inside the castle walls.', src: '/imagery/ads-ii/ad_06.png', download: 'harden-ad-ii-06.png' },
  { alt: 'Deploy like a knight. Govern like a king.', src: '/imagery/ads-iii/ad_01.png', download: 'harden-ad-square-01.png' },
  { alt: 'Forge fast. Ship hardened.', src: '/imagery/ads-iii/ad_02.png', download: 'harden-ad-square-02.png' },
  { alt: 'Forge secure AI apps in house.', src: '/imagery/ads-iii/ad_03.png', download: 'harden-ad-square-03.png' },
  { alt: 'Every PR scouted. Every weakness challenged.', src: '/imagery/ads-iii/ad_04.png', download: 'harden-ad-square-04.png' },
  { alt: 'Harden AI code before it leaves the gate.', src: '/imagery/ads-iii/ad_05.png', download: 'harden-ad-square-05.png' },
  { alt: 'Keep data inside the castle walls.', src: '/imagery/ads-iii/ad_06.png', download: 'harden-ad-square-06.png' },
];

function ImageryShowcase() {
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopyPrompt = useCallback((prompt, idx) => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1200);
    });
  }, []);

  return (
    <div className="imagery-showcase">
      <div className="imagery-grid">
        {IMAGERY_EXAMPLES.map((img, idx) => (
          <div className="imagery-card" key={img.title}>
            <div className="imagery-img-wrap">
              <img
                src={img.src}
                alt={img.title}
                className="imagery-img"
                style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
              />
            </div>
            <div className="imagery-card-body">
              <span className="imagery-title">{img.title}</span>
              <span className="imagery-desc">{img.desc}</span>
              <div className="imagery-prompt">
                <span className="imagery-prompt-label">AI Prompt</span>
                <p className="imagery-prompt-text">{img.prompt}</p>
                <button
                  className="imagery-prompt-copy"
                  onClick={() => handleCopyPrompt(img.prompt, idx)}
                >
                  {copiedIdx === idx ? 'Copied' : 'Copy prompt'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="imagery-social-ads">
        <span className="imagery-social-ads-label">Social ad examples</span>
        <div className="imagery-ad-grid">
          {SOCIAL_AD_EXAMPLES.map((item) => (
              <div key={item.src} className="imagery-ad-card">
                <img src={item.src} alt={item.alt} className="imagery-ad-flat" />
                <a
                  className="brand-guide-download imagery-ad-download"
                  href={item.src}
                  download={item.download}
                  aria-label={`Download social ad: ${item.alt}`}
                >
                  Download PNG
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

const ICON_SET = [
  { name: 'Shield', Icon: Shield },
  { name: 'Lock', Icon: Lock },
  { name: 'Key', Icon: Key },
  { name: 'Eye', Icon: Eye },
  { name: 'EyeOff', Icon: EyeOff },
  { name: 'Search', Icon: Search },
  { name: 'Settings', Icon: Settings },
  { name: 'User', Icon: User },
  { name: 'Users', Icon: Users },
  { name: 'Bell', Icon: Bell },
  { name: 'Mail', Icon: Mail },
  { name: 'ChevronRight', Icon: ChevronRight },
  { name: 'ArrowRight', Icon: ArrowRight },
  { name: 'Check', Icon: Check },
  { name: 'X', Icon: X },
  { name: 'AlertTriangle', Icon: AlertTriangle },
  { name: 'Info', Icon: Info },
  { name: 'ExternalLink', Icon: ExternalLink },
  { name: 'Download', Icon: Download },
  { name: 'Upload', Icon: Upload },
  { name: 'Copy', Icon: Copy },
  { name: 'Trash2', Icon: Trash2 },
  { name: 'Edit', Icon: Edit },
  { name: 'Plus', Icon: Plus },
];

function IconographyShowcase() {
  return (
    <div className="icon-showcase">
      <div className="icon-specs">
        <div className="icon-spec">
          <span className="icon-spec-label">Library</span>
          <span className="icon-spec-value">
            <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer">
              Lucide <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V10C1.5 10.2761 1.72386 10.5 2 10.5H10C10.2761 10.5 10.5 10.2761 10.5 10V8.5M7 1.5H10.5V5M10.5 1.5L5.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </span>
        </div>
        <div className="icon-spec">
          <span className="icon-spec-label">Style</span>
          <span className="icon-spec-value">Outline (line)</span>
        </div>
        <div className="icon-spec">
          <span className="icon-spec-label">Stroke</span>
          <span className="icon-spec-value">2 px</span>
        </div>
        <div className="icon-spec">
          <span className="icon-spec-label">Default size</span>
          <span className="icon-spec-value">24 × 24 px</span>
        </div>
        <div className="icon-spec">
          <span className="icon-spec-label">Corner radius</span>
          <span className="icon-spec-value">2 px</span>
        </div>
      </div>

      <div className="icon-grid">
        {ICON_SET.map(({ name, Icon }) => (
          <div className="icon-cell" key={name}>
            <div className="icon-cell-box">
              <Icon size={24} strokeWidth={2} />
            </div>
            <span className="icon-cell-name">{name}</span>
          </div>
        ))}
      </div>

      <div className="icon-sizes">
        <span className="icon-sizes-label">Size examples</span>
        <div className="icon-sizes-row">
          {[16, 20, 24, 32, 48].map((s) => (
            <div className="icon-size-example" key={s}>
              <Shield size={s} strokeWidth={2} />
              <span className="icon-size-value">{s}px</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoMisuseShowcase() {
  const misuses = [
    {
      label: 'Do not stretch or distort',
      render: (
        <div className="misuse-example">
          <div className="misuse-demo misuse-demo-light">
            <div style={{ transform: 'scaleX(1.5)' }}>
              <HardenLogo className="misuse-logo-svg" />
            </div>
          </div>
          <span className="misuse-caption">Stretching distorts proportions and weakens recognition.</span>
        </div>
      ),
    },
    {
      label: 'Do not rotate',
      render: (
        <div className="misuse-example">
          <div className="misuse-demo misuse-demo-light">
            <div style={{ transform: 'rotate(15deg)' }}>
              <HardenLogoStacked className="misuse-logo-svg misuse-logo-stacked" />
            </div>
          </div>
          <span className="misuse-caption">The logo must always appear level and upright.</span>
        </div>
      ),
    },
    {
      label: 'Do not recolor',
      render: (
        <div className="misuse-example">
          <div className="misuse-demo misuse-demo-light">
            <HardenLogo className="misuse-logo-svg" markColor="#2E8B57" />
          </div>
          <span className="misuse-caption">Only use approved brand colors for the logomark.</span>
        </div>
      ),
    },
    {
      label: 'Do not add effects',
      render: (
        <div className="misuse-example">
          <div className="misuse-demo misuse-demo-light">
            <div style={{ filter: 'drop-shadow(4px 4px 6px rgba(0,0,0,0.5))' }}>
              <HardenLogomark className="misuse-logo-svg misuse-logo-mark" />
            </div>
          </div>
          <span className="misuse-caption">No drop shadows, glows, outlines, or gradients.</span>
        </div>
      ),
    },
    {
      label: 'Do not place on busy backgrounds',
      render: (
        <div className="misuse-example">
          <div className="misuse-demo" style={{ background: 'repeating-conic-gradient(#ccc 0% 25%, #eee 0% 50%) 0 0 / 20px 20px' }}>
            <HardenLogo className="misuse-logo-svg" />
          </div>
          <span className="misuse-caption">Ensure sufficient contrast with a clean background.</span>
        </div>
      ),
    },
    {
      label: 'Do not crop the logo',
      render: (
        <div className="misuse-example">
          <div className="misuse-demo misuse-demo-light">
            <div className="misuse-crop-wrapper">
              <HardenLogomark className="misuse-logo-svg misuse-logo-mark" />
            </div>
          </div>
          <span className="misuse-caption">Never clip, crop, or partially obscure the logo.</span>
        </div>
      ),
    },
  ];

  return (
    <div className="misuse-showcase">
      <div className="misuse-grid">
        {misuses.map((m) => (
          <div className="misuse-card" key={m.label}>
            <span className="misuse-label">{m.label}</span>
            {m.render}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandGuidelines() {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const guideRef = useRef(null);

  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector('.app-nav');
      const h = nav ? nav.getBoundingClientRect().height : 0;
      guideRef.current?.style.setProperty('--nav-h', `${h}px`);
    };
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(top.target.id);
        }
      },
      { rootMargin: '-10% 0px -60% 0px', threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="brand-guide" ref={guideRef}>
      <header className="brand-guide-header">
        <h1>Brand Guidelines</h1>
        <p>
          Everything needed to represent Harden consistently, from the logo and
          color palette to voice, motion, and co-branding rules.
        </p>
      </header>

      <div className="brand-guide-body">
        <nav className="brand-guide-toc">
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={activeId === s.id ? 'toc-active' : ''}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <main className="brand-guide-content">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="brand-guide-section">
              <h2>{s.title}</h2>

              {s.desc && <p className="brand-guide-desc">{s.desc}</p>}

              {s.showLogo && <LogoShowcase />}

              {s.showClearSpace && <ClearSpaceShowcase />}

              {s.showMisuse && <LogoMisuseShowcase />}

              {s.showTypography && <TypographyShowcase />}

              {s.showIconography && <IconographyShowcase />}

              {s.showVoiceTone && <VoiceToneShowcase />}

              {s.showImagery && <ImageryShowcase />}

              {s.palette && (
                <div className="palette-groups">
                  {s.palette.map((group) => (
                    <PaletteTable key={group.name} group={group} />
                  ))}
                </div>
              )}

            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
