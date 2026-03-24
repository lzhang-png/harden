import { roadmapPhases } from '../data/roadmap';
import './Roadmap.css';

function PhaseCard({ category, purpose, items }) {
  return (
    <div className="card">
      <div className="card-top">
        <span className="card-category">{category}</span>
        <span className="card-purpose">{purpose}</span>
      </div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Phase({ id, title, cards }) {
  return (
    <section className={`phase phase--${id}`}>
      <div className="phase-header">
        <span className="phase-badge">Phase {id}</span>
        <span className="phase-title">{title}</span>
      </div>
      <div className="cards">
        {cards.map((card, i) => (
          <PhaseCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
}

export default function Roadmap() {
  return (
    <div className="container">
      <header>
        <h1>Design Roadmap</h1>
        <p>
          A phased plan of brand &amp; marketing deliverables engineered to
          build enterprise credibility and accelerate growth.
        </p>
      </header>

      {roadmapPhases.map((phase) => (
        <Phase key={phase.id} {...phase} />
      ))}

      <footer>Prepared for client review &middot; Design Roadmap</footer>
    </div>
  );
}
