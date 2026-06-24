import './AppDesign.css';

import { assetUrl } from '../utils/assetUrl.js';

const IMG_SRC = assetUrl('/imagery/app-design.png');

export default function AppDesign() {
  return (
    <div className="page-container app-design-page">
      <header className="page-header app-design-header">
        <h1 className="page-title">App Design</h1>
        <p>Reference mock for product UI, flows, and in-app patterns.</p>
      </header>
      <figure className="app-design-figure">
        <img
          src={IMG_SRC}
          alt="App design overview"
          className="app-design-image"
          loading="eager"
          decoding="async"
        />
      </figure>
    </div>
  );
}
