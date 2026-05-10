import './WebsiteImprovement.css';

const IMG_SRC = '/imagery/website-improvement.png';

export default function WebsiteImprovement() {
  return (
    <div className="website-improvement-page">
      <header className="website-improvement-header">
        <h1>Website Improvement</h1>
        <p>Reference mock or notes for site updates.</p>
      </header>
      <figure className="website-improvement-figure">
        <img
          src={IMG_SRC}
          alt="Website improvement overview"
          className="website-improvement-image"
          width={1578}
          height={3989}
          loading="eager"
          decoding="async"
        />
      </figure>
    </div>
  );
}
