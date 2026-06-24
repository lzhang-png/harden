import { directions, pricing } from '../data/proposal';
import './Proposal.css';

function DirectionRow({ num, fontFamily, fontWeight, fontStyle, letterSpacing, marks, mockups }) {
  const wordmarkStyle = {
    fontFamily,
    fontWeight,
    fontStyle,
    letterSpacing,
  };

  return (
    <section className="dir-row">
      <div className="dir-col dir-col-h">
        <span className="dir-num">{num}.</span>
        <div className="dir-lockup-h">
          <img
            src={marks.h.src}
            width={marks.h.w}
            height={marks.h.h}
            alt={`Direction ${num} mark`}
            className="dir-mark-img dir-mark-h"
            style={{
              ...(marks.h.scale && { transform: `scale(${marks.h.scale})` }),
              ...(marks.h.marginRight && { marginRight: marks.h.marginRight }),
            }}
          />
          <span className="dir-wordmark" style={wordmarkStyle}>
            harden.run
          </span>
        </div>
      </div>

      <div className="dir-col dir-col-v">
        <div className="dir-lockup-v">
          <img
            src={marks.v.src}
            width={marks.v.w}
            height={marks.v.h}
            alt={`Direction ${num} mark`}
            className="dir-mark-img dir-mark-v"
          />
          <span className="dir-wordmark" style={wordmarkStyle}>
            harden.run
          </span>
        </div>
      </div>

      <div className="dir-col dir-col-mark">
        <img
          src={marks.solo.src}
          width={marks.solo.w}
          height={marks.solo.h}
          alt={`Direction ${num} standalone mark`}
          className="dir-mark-img dir-mark-solo"
        />
      </div>

      <div className="dir-col dir-col-gallery">
        <div className="gallery">
          {mockups.map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="pricing-section">
      <span className="pricing-label">PRICING</span>
      <div className="pricing-grid">
        {pricing.deliverables.map((item, i) => (
          <div className="pricing-item" key={i}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
        <div className="pricing-item pricing-total">
          <h3>{pricing.total}</h3>
          <p>{pricing.terms}</p>
        </div>
      </div>
    </section>
  );
}

export default function Proposal() {
  return (
    <div className="page-container proposal">
      {directions.map((dir) => (
        <DirectionRow key={dir.num} {...dir} />
      ))}
      <PricingSection />
    </div>
  );
}
