import './WebsiteImprovement.css';

import { assetUrl } from '../utils/assetUrl.js';

const IMG_SRC = assetUrl('/imagery/website-improvement.png');

export default function WebsiteImprovement() {
  return (
    <div className="page-container website-improvement-page">
      <header className="page-header website-improvement-header">
        <h1 className="page-title">Website Improvement</h1>
        <p>
          Imagery on this site moves from abstract to concrete. Up top, painterly illustrations (the
          fortress wall, the fleet at sea) act as brand metaphors for hardening and governance; they use
          soft, feathered edges so they read as part of the canvas, not clipped stock art. Further down,
          literal product UI screenshots ground the story in the real workflow.
        </p>
        <p>
          Supporting visuals stay disciplined: monochrome partner marks for social proof,
          small red-line icons for scanability in feature grids, and high-contrast captures where the
          product needs to be the hero. Together that keeps the “old world” palette and typography
          feeling premium while the page still converts curiosity into understanding.
        </p>
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
