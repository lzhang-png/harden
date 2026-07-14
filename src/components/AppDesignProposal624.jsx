import { PRACTICES, PracticeVisual } from './AppDesignPractices';

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

export default function AppDesignProposal624() {
  return (
    <div className="app-design-content">
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
