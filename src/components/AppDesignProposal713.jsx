import { Link } from 'react-router-dom';

const WORKSTREAMS = [
  {
    id: '01',
    name: 'Design System',
    summary: 'Tokens, components, and patterns grounded in Harden’s brand guidelines.',
    screens: [
      'Color, type & spacing tokens',
      'Core UI components (buttons, inputs, tables, nav)',
      'Shared states — empty, loading, error',
    ],
  },
  {
    id: '02',
    name: 'App Dashboard',
    summary: 'The core loop from browsing apps through scan to reading results.',
    screens: [
      'Apps list',
      'App detail',
      'App scanning',
      'Scan results',
    ],
  },
];

const TIMELINE = [
  {
    week: 'Week 1',
    phase: 'Design system',
    detail: 'Establish tokens and reusable components so the dashboard builds on a consistent system.',
  },
  {
    week: 'Week 2',
    phase: 'App dashboard',
    detail: 'Design and build Apps list, App detail, Scanning, and Scan results in the prototype.',
  },
];

const PRICING = [
  { area: 'Design system', hours: '6–8' },
  { area: 'App dashboard', hours: '12–14' },
];

const DELIVERABLES = [
  {
    title: 'Coded front-end prototype',
    desc: 'Working dashboard screens — Apps list, App detail, Scanning, and Scan results — built in the prototype.',
  },
  {
    title: 'Design system',
    desc: 'A reusable component and token set grounded in Harden’s brand guidelines.',
  },
  {
    title: 'Motion & interaction patterns',
    desc: 'Scan and results transitions that show what the AI is doing as work progresses.',
  },
];

export default function AppDesignProposal713() {
  return (
    <div className="app-design-content">
      <header className="page-header app-design-header">
        <h1 className="page-title">Design System & Dashboard</h1>
        <p className="ad-lead">
          A focused two-week build — establish the design system, then ship the core
          app dashboard from list through scan results.
        </p>
      </header>

      <section className="ad-section" aria-labelledby="ad713-scope">
        <div className="ad-section-head">
          <h2 id="ad713-scope" className="ad-section-title">Scope — two workstreams</h2>
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

      <section className="ad-section" aria-labelledby="ad713-timeline">
        <div className="ad-section-head">
          <h2 id="ad713-timeline" className="ad-section-title">Timeline — 2 weeks</h2>
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

      <section className="ad-section" aria-labelledby="ad713-deliverables">
        <div className="ad-section-head">
          <h2 id="ad713-deliverables" className="ad-section-title">What you receive</h2>
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

      <section className="ad-section" aria-labelledby="ad713-investment">
        <div className="ad-section-head">
          <h2 id="ad713-investment" className="ad-section-title">Investment</h2>
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
              <dd>2 weeks</dd>
            </div>
            <div className="ad-invest-total">
              <dt>Total</dt>
              <dd>$3,000</dd>
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
                <td>18–22 hrs</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="ad-invest-note">
          $3,000 = 20 hrs × $150/hr — midpoint of the 18–22 hr estimate. Billed on actual hours.
        </p>
        <p className="ad-invest-actions">
          <Link className="ad-invoice-link" to="/invoice/proposal-7-13">
            Download invoice (PDF)
          </Link>
        </p>
      </section>
    </div>
  );
}
