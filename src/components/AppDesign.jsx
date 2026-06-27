import './AppDesign.css';

const PRACTICES = [
  {
    variant: 'simplify',
    title: 'Simplify what’s on screen',
    body: 'Cut noise and show only what matters at each step.',
  },
  {
    variant: 'system',
    title: 'A design system from the brand',
    body: 'Reusable components grounded in Harden’s brand guidelines.',
  },
  {
    variant: 'motion',
    title: 'Motion that explains the AI',
    body: 'Transitions that show what the AI is scanning and resolving.',
  },
];

function PracticeVisual({ variant }) {
  if (variant === 'simplify') {
    return (
      <svg className="ad-gfx" viewBox="0 0 240 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <rect className="ad-gfx-stroke" x="14" y="18" width="84" height="84" rx="6" fill="none" />
        <g className="ad-gfx-faint">
          <rect x="22" y="26" width="40" height="5" rx="2.5" />
          <rect x="22" y="37" width="68" height="3" rx="1.5" />
          <rect x="22" y="43" width="64" height="3" rx="1.5" />
          <rect x="22" y="49" width="68" height="3" rx="1.5" />
          <rect x="22" y="55" width="54" height="3" rx="1.5" />
          <rect x="22" y="63" width="20" height="18" rx="2" />
          <rect x="46" y="64" width="44" height="3" rx="1.5" />
          <rect x="46" y="70" width="42" height="3" rx="1.5" />
          <rect x="46" y="76" width="38" height="3" rx="1.5" />
          <rect x="22" y="86" width="68" height="3" rx="1.5" />
          <rect x="22" y="92" width="60" height="3" rx="1.5" />
        </g>
        <path className="ad-gfx-brand-stroke" d="M106 60 h22" />
        <path className="ad-gfx-brand-stroke" d="M122 53 l8 7 -8 7" fill="none" />
        <rect className="ad-gfx-stroke" x="142" y="18" width="84" height="84" rx="6" fill="none" />
        <rect className="ad-gfx-brand-fill" x="156" y="52" width="56" height="7" rx="3.5" />
        <rect className="ad-gfx-faint" x="156" y="64" width="38" height="7" rx="3.5" />
      </svg>
    );
  }

  if (variant === 'system') {
    return (
      <svg className="ad-gfx" viewBox="0 0 240 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <pattern id="adDots" width="15" height="15" patternUnits="userSpaceOnUse">
            <circle className="ad-gfx-dot" cx="7.5" cy="7.5" r="1" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="240" height="120" fill="url(#adDots)" />
        <text className="ad-gfx-type" x="20" y="82" fontSize="58">Aa</text>
        <circle className="ad-gfx-swatch" cx="150" cy="30" r="6" fill="#872921" />
        <circle className="ad-gfx-swatch" cx="168" cy="30" r="6" fill="#BEA163" />
        <circle className="ad-gfx-swatch" cx="186" cy="30" r="6" fill="#31353B" />
        <circle className="ad-gfx-swatch" cx="204" cy="30" r="6" fill="#B5564E" />
        <rect className="ad-gfx-stroke" x="148" y="52" width="58" height="18" rx="9" fill="none" />
        <rect className="ad-gfx-brand-fill" x="157" y="59" width="26" height="4" rx="2" />
        <rect className="ad-gfx-stroke" x="148" y="84" width="36" height="16" rx="8" fill="none" />
        <circle className="ad-gfx-brand-fill" cx="176" cy="92" r="5.5" />
      </svg>
    );
  }

  return (
    <svg className="ad-gfx" viewBox="0 0 240 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <path className="ad-gfx-flow" d="M35 31 C 70 34, 90 52, 107 58" />
      <path className="ad-gfx-flow" d="M35 60 H 107" />
      <path className="ad-gfx-flow" d="M35 89 C 70 86, 90 68, 107 62" />
      <path className="ad-gfx-flow ad-gfx-flow--out" d="M133 58 C 160 52, 180 34, 205 31" />
      <path className="ad-gfx-flow ad-gfx-flow--out" d="M133 60 H 205" />
      <path className="ad-gfx-flow ad-gfx-flow--out" d="M133 62 C 160 68, 180 86, 205 89" />
      <circle className="ad-gfx-node" cx="30" cy="30" r="5" />
      <circle className="ad-gfx-node" cx="30" cy="60" r="5" />
      <circle className="ad-gfx-node" cx="30" cy="90" r="5" />
      <circle className="ad-gfx-node" cx="210" cy="30" r="5" />
      <circle className="ad-gfx-node" cx="210" cy="60" r="5" />
      <circle className="ad-gfx-node" cx="210" cy="90" r="5" />
      <rect className="ad-gfx-pulse" x="96" y="38" width="48" height="44" rx="9" />
      <rect className="ad-gfx-pulse ad-gfx-pulse--2" x="96" y="38" width="48" height="44" rx="9" />
      <svg className="ad-gfx-h" x="104" y="46" width="32" height="28.9" viewBox="0 0 359 324">
        <path
          d="M108.021 81.8526H250.979V6.75C250.979 3.02208 253.998 0 257.722 0H348.799C353.857 0 357.185 5.37691 355.031 9.95776C347.199 26.6148 332.668 60.4086 332.668 81.8526C332.668 107.911 354.126 278.523 358.945 316.511C359.457 320.547 356.3 324 352.236 324H250.979V235.326C250.979 195.771 218.977 163.705 179.5 163.705C140.023 163.705 108.021 195.771 108.021 235.326V324H6.7643C2.69967 324 -0.45743 320.547 0.0545597 316.511C4.8737 278.523 26.3315 107.911 26.3315 81.8526C26.3315 60.4086 11.8006 26.6148 3.96855 9.95775C1.81467 5.3769 5.14309 0 10.2013 0H101.278C105.002 0 108.021 3.02208 108.021 6.75V81.8526Z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
}

const WORKSTREAMS = [
  {
    id: '01',
    name: 'Onboarding',
    summary: 'Signup through first scan — the path that starts a POC.',
    screens: [
      'Sign up, workspace & project setup',
      'Connect a repo & run the first scan',
      'Empty, loading & first-result states',
    ],
  },
  {
    id: '02',
    name: 'Basic Reports',
    summary: 'Findings, triage, remediation, and a buyer-ready security report.',
    screens: [
      'Findings feed & detail',
      'Triage & SCA dependency views',
      'Remediation workbench & security report',
    ],
  },
  {
    id: '03',
    name: 'Advanced Viz & Scan',
    summary: 'Exploit-graph views that show why Harden goes deeper.',
    screens: [
      'Code & exploit graphs',
      'Capability map & context editor',
      'Retest & before/after comparison',
    ],
  },
  {
    id: '04',
    name: 'App Utilities',
    summary: 'Settings, teams, permissions, and shared navigation.',
    screens: [
      'Account & profile settings',
      'Team, project & user management',
      'Navigation shell & notifications',
    ],
  },
];

const TIMELINE = [
  {
    week: 'Week 1',
    phase: 'Onboarding',
    detail: 'Register, create a project, connect a repo, and set up the first app scan.',
  },
  {
    week: 'Weeks 2–3',
    phase: 'Basic reports',
    detail: 'Phase 1 reporting — findings, severity, and status presented clearly at a glance.',
  },
  {
    week: 'Week 4',
    phase: 'Advanced viz & scan',
    detail: 'Phase 2 exploit-graph and deeper scan views that show why Harden goes further.',
  },
  {
    week: 'Weeks 5–6',
    phase: 'App utilities & polish',
    detail: 'Account settings, permissions, team and project management, plus a final pass on consistency.',
  },
];

const PRICING = [
  { area: 'Onboarding', hours: '8–12' },
  { area: 'Basic reports · Phase 1', hours: '14–20' },
  { area: 'Advanced viz & scan · Phase 2', hours: '10–16' },
  { area: 'App utilities', hours: '8–12' },
];

const DELIVERABLES = [
  {
    title: 'Coded front-end prototype',
    desc: 'Working, responsive screens and flows built directly in the prototype — not static mockups.',
  },
  {
    title: 'Design system',
    desc: 'A reusable component and token set grounded in Harden’s brand guidelines.',
  },
  {
    title: 'Motion & interaction patterns',
    desc: 'Transitions and micro-interactions that guide attention and surface what the AI is doing.',
  },
];

const FUTURE_STAGES = [
  'PR & release gating in CI/CD',
  'Auto-remediation workbench',
  'AI Firewall runtime governance',
  'Developer workflow & IDE extension',
];

export default function AppDesign() {
  return (
    <div className="page-container app-design-page">
      <header className="page-header app-design-header">
        <h1 className="page-title">Designing the Harden App</h1>
        <p className="ad-lead">
          Design and build directly in the front-end prototype — four workstreams sequenced
          so the highest-leverage flows ship first.
        </p>
      </header>

      <section className="ad-section" aria-labelledby="ad-approach">
        <div className="ad-section-head">
          <h2 id="ad-approach" className="ad-section-title">Design approach</h2>
        </div>
        <div className="ad-practices">
          {PRACTICES.map((practice) => (
            <article key={practice.title} className="ad-practice">
              <figure className="ad-practice-visual">
                <PracticeVisual variant={practice.variant} />
              </figure>
              <h3 className="ad-practice-title">{practice.title}</h3>
              <p className="ad-practice-body">{practice.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ad-section" aria-labelledby="ad-scope">
        <div className="ad-section-head">
          <h2 id="ad-scope" className="ad-section-title">Scope — four workstreams</h2>
        </div>
        <div className="ad-workstreams">
          {WORKSTREAMS.map((ws) => (
            <article key={ws.id} className="ad-card">
              <span className="ad-card-num">{ws.id}</span>
              <h3 className="ad-card-title">{ws.name}</h3>
              <p className="ad-card-summary">{ws.summary}</p>
              <ul className="ad-card-list">
                {ws.screens.map((screen) => (
                  <li key={screen}>{screen}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="ad-section" aria-labelledby="ad-timeline">
        <div className="ad-section-head">
          <h2 id="ad-timeline" className="ad-section-title">Timeline — 4 to 6 weeks</h2>
        </div>
        <ol className="ad-timeline">
          {TIMELINE.map((step) => (
            <li key={step.week} className="ad-timeline-step">
              <span className="ad-timeline-week">{step.week}</span>
              <span className="ad-timeline-phase">{step.phase}</span>
              <span className="ad-timeline-detail">{step.detail}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="ad-section" aria-labelledby="ad-deliverables">
        <div className="ad-section-head">
          <h2 id="ad-deliverables" className="ad-section-title">What you receive</h2>
        </div>
        <div className="ad-deliverables">
          {DELIVERABLES.map((item) => (
            <div key={item.title} className="ad-deliverable">
              <h3 className="ad-deliverable-title">{item.title}</h3>
              <p className="ad-deliverable-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ad-section" aria-labelledby="ad-investment">
        <div className="ad-section-head">
          <h2 id="ad-investment" className="ad-section-title">Investment</h2>
        </div>

        <div className="ad-invest-grid">
          <dl className="ad-invest-summary">
            <div>
              <dt>Rate</dt>
              <dd>$150 / hour</dd>
            </div>
            <div>
              <dt>Cadence</dt>
              <dd>10 hours / week</dd>
            </div>
            <div className="ad-invest-wide">
              <dt>Duration</dt>
              <dd>4–6 weeks</dd>
            </div>
            <div className="ad-invest-total">
              <dt>Stage 1 total</dt>
              <dd>$7,500</dd>
            </div>
          </dl>

          <table className="ad-invest-table">
            <thead>
              <tr>
                <th scope="col">Area</th>
                <th scope="col">Est. hours</th>
              </tr>
            </thead>
            <tbody>
              {PRICING.map((row) => (
                <tr key={row.area}>
                  <td>{row.area}</td>
                  <td>{row.hours}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>40–60 hrs</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="ad-invest-note">
          $7,500 = 50 hrs × $150/hr — midpoint of the 40–60 hr estimate. Billed on actual hours.
        </p>
      </section>

      <section className="ad-section ad-future" aria-labelledby="ad-future">
        <div className="ad-section-head">
          <h2 id="ad-future" className="ad-section-title">Later stages</h2>
        </div>
        <ul className="ad-future-list">
          {FUTURE_STAGES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
