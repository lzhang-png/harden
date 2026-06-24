import './Presentation.css';

const LOGOMARK_PATH =
  'M108.021 81.8526H250.979V6.75C250.979 3.02208 253.998 0 257.722 0H348.799C353.857 0 357.185 5.37691 355.031 9.95776C347.199 26.6148 332.668 60.4086 332.668 81.8526C332.668 107.911 354.126 278.523 358.945 316.511C359.457 320.547 356.3 324 352.236 324H250.979V235.326C250.979 195.771 218.977 163.705 179.5 163.705C140.023 163.705 108.021 195.771 108.021 235.326V324H6.7643C2.69967 324 -0.45743 320.547 0.0545597 316.511C4.8737 278.523 26.3315 107.911 26.3315 81.8526C26.3315 60.4086 11.8006 26.6148 3.96855 9.95775C1.81467 5.3769 5.14309 0 10.2013 0H101.278C105.002 0 108.021 3.02208 108.021 6.75V81.8526Z';

function SlideMark({ variant = 'light' }) {
  const fill = variant === 'light' ? '#872921' : '#F4F2EA';
  return (
    <div className="slide-mark" aria-hidden="true">
      <svg viewBox="0 0 359 324" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={LOGOMARK_PATH} fill={fill} />
      </svg>
    </div>
  );
}

/** Full horizontal lockup (H + harden) — brand guidelines on-light */
function SlideLogoFull({ className = '' }) {
  return (
    <div
      className={['slide-logo-full', className].filter(Boolean).join(' ')}
      role="img"
      aria-label="Harden logo, full horizontal lockup"
    >
      <svg viewBox="0 0 701 144" fill="none" xmlns="http://www.w3.org/2000/svg" className="slide-logo-full-svg">
        <path d="M666.378 43.5972C675.962 43.5972 683.591 46.7171 689.263 52.9567C695.033 59.0989 697.918 67.5809 697.918 78.4028V117.44L700.228 126.078H671.825L672.98 117.44V81.7664C672.98 76.3067 671.562 72.0657 668.725 69.0433C665.889 66.021 662.075 64.5098 657.283 64.5098C652.491 64.5098 648.677 66.021 645.841 69.0433C643.005 72.0657 641.587 76.3067 641.587 81.7664V117.44L642.741 126.078H614.192L616.502 117.44V55.2966L615.347 44.4747H641.587V55.2966C644.129 51.6893 647.552 48.8619 651.855 46.8145C656.158 44.6697 660.999 43.5972 666.378 43.5972Z" fill="currentColor"/>
        <path d="M609.926 83.5223C609.926 85.8611 609.778 88.2973 609.484 90.8309H552.484C552.876 95.8982 554.497 99.7961 557.344 102.525C560.29 105.156 563.874 106.471 568.096 106.471C574.38 106.471 578.75 103.84 581.205 98.578H608.011C606.636 103.938 604.132 108.761 600.499 113.049C596.964 117.337 592.497 120.699 587.096 123.135C581.696 125.571 575.657 126.789 568.98 126.789C560.928 126.789 553.76 125.084 547.476 121.673C541.192 118.262 536.282 113.39 532.747 107.056C529.212 100.722 527.445 93.3158 527.445 84.8379C527.445 76.3599 529.163 68.9539 532.6 62.6198C536.135 56.2856 541.044 51.4133 547.329 48.0026C553.613 44.5919 560.83 42.8866 568.98 42.8866C576.933 42.8866 584.003 44.5432 590.189 47.8564C596.375 51.1696 601.186 55.8959 604.623 62.0351C608.158 68.1743 609.926 75.3367 609.926 83.5223ZM584.15 76.9446C584.15 72.6569 582.677 69.2462 579.732 66.7126C576.786 64.1789 573.104 62.9121 568.685 62.9121C564.463 62.9121 560.879 64.1302 557.933 66.5664C555.086 69.0026 553.318 72.462 552.631 76.9446H584.15Z" fill="currentColor"/>
        <path d="M435.01 85.3396C435.01 76.9465 436.577 69.5782 439.713 63.2346C442.946 56.891 447.306 52.0114 452.793 48.5956C458.28 45.1798 464.404 43.4719 471.165 43.4719C476.554 43.4719 481.453 44.5942 485.862 46.8389C490.369 49.0836 493.896 52.109 496.444 55.9151V27.2192L495.287 18H522.733L521.576 27.2192V117.683L523.89 126.329H495.287L496.444 117.683V114.618C494.092 118.521 490.712 121.644 486.303 123.987C481.992 126.329 476.946 127.5 471.165 127.5C464.404 127.5 458.28 125.792 452.793 122.376C447.306 118.863 442.946 113.935 439.713 107.591C436.577 101.15 435.01 93.7326 435.01 85.3396ZM496.444 85.486C496.444 79.24 494.68 74.3115 491.153 70.7005C487.723 67.0896 483.51 65.2841 478.513 65.2841C473.516 65.2841 469.254 67.0896 465.727 70.7005C462.297 74.2139 460.583 79.0936 460.583 85.3396C460.583 91.5856 462.297 96.5628 465.727 100.271C469.254 103.882 473.516 105.688 478.513 105.688C483.51 105.688 487.723 103.882 491.153 100.271C494.68 96.6604 496.444 91.7319 496.444 85.486Z" fill="currentColor"/>
        <path d="M407.919 58.0752C410.852 53.5904 414.519 50.0806 418.92 47.5458C423.32 44.9134 428.209 43.5972 433.588 43.5972V70.067H426.694C420.435 70.067 415.742 71.432 412.613 74.1618C409.483 76.7942 407.919 81.4739 407.919 88.2011V117.44L410.228 126.078H381.682L382.837 117.44V54.1223L381.682 44.4747H409.073L407.919 54.1223V58.0752Z" fill="currentColor"/>
        <path d="M285.692 85.4024C285.692 77.0218 287.247 69.6645 290.357 63.3304C293.565 56.9963 297.89 52.1239 303.333 48.7132C308.776 45.3026 314.851 43.5972 321.558 43.5972C327.292 43.5972 332.298 44.7666 336.574 47.1053C340.948 49.4441 344.302 52.5137 346.634 56.3142V54.4092L345.487 44.7666H372.713L371.565 54.4092V117.697L373.861 126.33H345.487L346.634 117.697V114.783C344.204 118.583 340.802 121.653 336.429 123.992C332.152 126.33 327.146 127.5 321.412 127.5C314.802 127.5 308.776 125.795 303.333 122.384C297.89 118.876 293.565 113.955 290.357 107.62C287.247 101.189 285.692 93.7829 285.692 85.4024ZM346.634 85.5485C346.634 79.3119 344.885 74.3908 341.386 70.7852C337.984 67.1796 333.804 65.3768 328.847 65.3768C323.89 65.3768 319.662 67.1796 316.163 70.7852C312.761 74.2933 311.06 79.1657 311.06 85.4024C311.06 91.639 312.761 96.6089 316.163 100.312C319.662 103.917 323.89 105.72 328.847 105.72C333.804 105.72 337.984 103.917 341.386 100.312C344.885 96.7063 346.634 91.7852 346.634 85.5485Z" fill="currentColor"/>
        <path d="M247.681 43.705C257.089 43.705 264.635 46.8208 270.319 53.0523C276.004 59.1865 278.846 67.6574 278.846 78.4652V117.452L280.003 126.078H252.698L253.855 117.452V81.8244C253.855 76.3718 252.434 72.1363 249.592 69.1179C246.75 66.0995 242.927 64.5903 238.125 64.5903C233.323 64.5903 229.501 66.0995 226.659 69.1179C223.817 72.1363 222.396 76.3718 222.396 81.8244V117.452L223.553 126.078H196.1L197.258 117.452V26.9104L196.1 18H223.553L222.396 26.9104V55.5352C224.944 51.9326 228.423 49.0602 232.833 46.9181C237.243 44.7761 242.192 43.705 247.681 43.705Z" fill="currentColor"/>
        <path d="M48.0532 36.3789H111.647V3C111.647 1.34315 112.991 0 114.647 0H155.163C157.413 0 158.893 2.38974 157.935 4.42567C154.451 11.8288 147.987 26.8483 147.987 36.3789C147.987 47.9606 157.533 123.788 159.676 140.672C159.904 142.465 158.5 144 156.692 144H111.647V104.589C111.647 87.0094 97.4114 72.7579 79.8503 72.7579C62.2892 72.7579 48.0532 87.0094 48.0532 104.589V144H3.00909C1.20094 144 -0.203487 142.465 0.0242708 140.672C2.16806 123.788 11.7135 47.9606 11.7135 36.3789C11.7135 26.8483 5.24947 11.8288 1.7654 4.42567C0.807253 2.38973 2.2879 0 4.53802 0H45.0532C46.71 0 48.0532 1.34315 48.0532 3V36.3789Z" fill="#872921"/>
      </svg>
    </div>
  );
}

function ImageSlot({ label, className = '' }) {
  return (
    <div
      className={['slide-img-slot', className].filter(Boolean).join(' ')}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      <span className="slide-img-slot-label slide-font-ui">{label}</span>
    </div>
  );
}

export default function Presentation() {
  return (
    <div className="page-container presentation-page">
      <header className="page-header presentation-header">
        <h1 className="page-title">Presentation</h1>
        <p>
          Customer-facing slide templates at <strong>16:9</strong>. Typography follows brand guidelines:
          <strong> Newsreader</strong> for headlines and <strong>Poppins</strong> for supporting copy. Colors:
          brand red <code>#872921</code> and canvas <code>#F4F2EA</code>. Slides with dashed frames are
          <strong> image placeholders</strong>—drop screenshots, diagrams, or photography. Export to your deck
          or rebuild in Keynote / Google Slides.
        </p>
        <p className="presentation-header-slides">
          <a
            className="presentation-header-slides-link"
            href="https://docs.google.com/presentation/d/18NKTiFN1Tz9tNlaBreFOsa2eb2l4mDhBxBq1rhkiQgk/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Google Slides deck
          </a>
        </p>
      </header>

      <div className="presentation-deck" role="list">
        <article className="slide slide--title slide--on-cream" role="listitem">
          <SlideLogoFull />
          <div className="slide-body slide-body--title">
            <p className="slide-kicker slide-font-ui">Enterprise security for AI-built software</p>
            <h2 className="slide-font-display">Harden your deployment pipeline</h2>
            <p className="slide-subtitle slide-font-ui">An introduction for security &amp; platform leaders</p>
          </div>
        </article>

        <article className="slide slide--section slide--on-dark" role="listitem">
          <SlideMark variant="dark" />
          <div className="slide-body slide-body--section">
            <span className="slide-section-index slide-font-ui">Section 01</span>
            <h2 className="slide-font-display slide-font-display--light">The challenge</h2>
            <p className="slide-section-lead slide-font-ui slide-font-ui--muted">
              Framing the problem before the solution story
            </p>
          </div>
        </article>

        <article className="slide slide--split slide--on-cream" role="listitem">
          <SlideMark variant="light" />
          <div className="slide-body slide-body--split">
            <div className="slide-split-main">
              <h2 className="slide-font-display">Why teams choose Harden</h2>
              <p className="slide-split-deck slide-font-ui">
                Ground the conversation in outcomes your buyer cares about—governance, speed, and control.
              </p>
            </div>
            <ul className="slide-split-list slide-font-ui">
              <li>Scan and patch AI-generated code before merge</li>
              <li>SSO, SCIM, and policy without slowing delivery</li>
              <li>Deploy inside your VPC; credentials stay in your perimeter</li>
              <li>Evidence and audit trails leadership can trust</li>
            </ul>
          </div>
        </article>

        <article className="slide slide--metrics slide--on-cream" role="listitem">
          <SlideMark variant="light" />
          <div className="slide-body slide-body--metrics">
            <h2 className="slide-metrics-heading slide-font-display">Impact at a glance</h2>
            <p className="slide-metrics-intro slide-font-ui">
              Use real figures when available; placeholders show layout only.
            </p>
            <div className="slide-metric-grid">
              <div className="slide-metric">
                <span className="slide-metric-value slide-font-display">24×</span>
                <span className="slide-metric-label slide-font-ui">Faster policy rollout vs. manual review</span>
              </div>
              <div className="slide-metric">
                <span className="slide-metric-value slide-font-display">100%</span>
                <span className="slide-metric-label slide-font-ui">PRs covered with automated security signals</span>
              </div>
              <div className="slide-metric">
                <span className="slide-metric-value slide-font-display">0</span>
                <span className="slide-metric-label slide-font-ui">Customer data leaves your cloud boundary</span>
              </div>
            </div>
          </div>
        </article>

        <article className="slide slide--quote slide--on-cream" role="listitem">
          <SlideMark variant="light" />
          <div className="slide-body slide-body--quote">
            <blockquote className="slide-quote-text slide-font-display">
              &ldquo;We finally have enterprise guardrails without telling developers to stop shipping.&rdquo;
            </blockquote>
            <footer className="slide-quote-attrib slide-font-ui">
              <strong>Name, title</strong>
              <span>Organization</span>
            </footer>
          </div>
        </article>

        <article className="slide slide--agenda slide--on-accent" role="listitem">
          <SlideMark variant="light" />
          <div className="slide-body slide-body--agenda">
            <h2 className="slide-font-display slide-font-display--on-accent">Today&apos;s agenda</h2>
            <ol className="slide-agenda-list slide-font-ui">
              <li>
                <span className="slide-agenda-title">Context &amp; goals</span>
                <span className="slide-agenda-time">5 min</span>
              </li>
              <li>
                <span className="slide-agenda-title">How Harden works</span>
                <span className="slide-agenda-time">10 min</span>
              </li>
              <li>
                <span className="slide-agenda-title">Live walkthrough</span>
                <span className="slide-agenda-time">15 min</span>
              </li>
              <li>
                <span className="slide-agenda-title">Security &amp; deployment model</span>
                <span className="slide-agenda-time">10 min</span>
              </li>
              <li>
                <span className="slide-agenda-title">Next steps</span>
                <span className="slide-agenda-time">5 min</span>
              </li>
            </ol>
          </div>
        </article>

        <article className="slide slide--radar slide--on-cream" role="listitem">
          <SlideMark variant="light" />
          <div className="slide-body slide-body--radar">
            <div className="slide-radar-copy">
              <p className="slide-kicker slide-font-ui">Where risk accumulates</p>
              <h2 className="slide-font-display">AI code moves faster than review surfaces</h2>
              <p className="slide-radar-lede slide-font-ui">
                Use this slide to frame the hidden exposure across prompt, repository, dependency, and deployment
                layers before introducing Harden as the control plane.
              </p>
            </div>
            <div className="slide-radar-map" aria-label="Risk radar diagram">
              <span className="slide-radar-ring slide-radar-ring--outer" />
              <span className="slide-radar-ring slide-radar-ring--middle" />
              <span className="slide-radar-ring slide-radar-ring--inner" />
              <span className="slide-radar-center slide-font-ui">Harden</span>
              <span className="slide-radar-point slide-radar-point--prompt slide-font-ui">Prompt drift</span>
              <span className="slide-radar-point slide-radar-point--repo slide-font-ui">Repo sprawl</span>
              <span className="slide-radar-point slide-radar-point--deps slide-font-ui">Dependency risk</span>
              <span className="slide-radar-point slide-radar-point--deploy slide-font-ui">Deploy gates</span>
            </div>
          </div>
        </article>

        <article className="slide slide--path slide--on-dark" role="listitem">
          <SlideMark variant="dark" />
          <div className="slide-body slide-body--path">
            <div className="slide-path-heading">
              <p className="slide-section-index slide-font-ui">Operating model</p>
              <h2 className="slide-font-display slide-font-display--light">From AI suggestion to governed release</h2>
            </div>
            <div className="slide-path-track">
              <div className="slide-path-step">
                <span className="slide-path-number slide-font-ui">01</span>
                <h3 className="slide-font-display slide-font-display--light">Generate</h3>
                <p className="slide-font-ui slide-font-ui--muted">AI-written changes enter the workflow with context.</p>
              </div>
              <div className="slide-path-step">
                <span className="slide-path-number slide-font-ui">02</span>
                <h3 className="slide-font-display slide-font-display--light">Harden</h3>
                <p className="slide-font-ui slide-font-ui--muted">Policies, scans, and identity checks run before merge.</p>
              </div>
              <div className="slide-path-step">
                <span className="slide-path-number slide-font-ui">03</span>
                <h3 className="slide-font-display slide-font-display--light">Prove</h3>
                <p className="slide-font-ui slide-font-ui--muted">Evidence is captured for security, platform, and audit teams.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="slide slide--bento slide--on-cream" role="listitem">
          <SlideMark variant="light" />
          <div className="slide-body slide-body--bento">
            <div className="slide-bento-tile slide-bento-tile--lede">
              <p className="slide-kicker slide-font-ui">What you ship with Harden</p>
              <h2 className="slide-font-display">A control plane, not another tool</h2>
              <p className="slide-bento-lede slide-font-ui">
                Mix the proof points your buyer cares about — outcomes, signals, and tone — without forcing them
                into one rigid layout.
              </p>
            </div>
            <div className="slide-bento-tile slide-bento-tile--stat">
              <span className="slide-bento-stat-value slide-font-display">4.2x</span>
              <span className="slide-bento-stat-label slide-font-ui">faster security signoff</span>
            </div>
            <div className="slide-bento-tile slide-bento-tile--quote">
              <p className="slide-bento-quote slide-font-display">
                &ldquo;It finally feels like one team shipping, not two teams arguing.&rdquo;
              </p>
              <p className="slide-bento-quote-attrib slide-font-ui">VP Engineering, fintech platform</p>
            </div>
            <div className="slide-bento-tile slide-bento-tile--list">
              <p className="slide-bento-tile-title slide-font-ui">Built into the workflow</p>
              <ul className="slide-bento-list slide-font-ui">
                <li>Inline policy checks on every PR</li>
                <li>SSO, SCIM, audit trails included</li>
                <li>Runs inside your VPC, your keys</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="slide slide--roadmap slide--on-dark" role="listitem">
          <SlideMark variant="dark" />
          <div className="slide-body slide-body--roadmap">
            <div className="slide-roadmap-heading">
              <p className="slide-section-index slide-font-ui">90-day rollout</p>
              <h2 className="slide-font-display slide-font-display--light">From kickoff to fleet-wide coverage</h2>
            </div>
            <ol className="slide-roadmap-track" aria-label="Rollout timeline">
              <li className="slide-roadmap-stop">
                <span className="slide-roadmap-time slide-font-ui">Week 0–2</span>
                <span className="slide-roadmap-dot" aria-hidden="true" />
                <span className="slide-roadmap-label slide-font-display slide-font-display--light">Connect</span>
                <span className="slide-roadmap-detail slide-font-ui slide-font-ui--muted">
                  Repos, identity, and policy intake.
                </span>
              </li>
              <li className="slide-roadmap-stop">
                <span className="slide-roadmap-time slide-font-ui">Week 3–5</span>
                <span className="slide-roadmap-dot" aria-hidden="true" />
                <span className="slide-roadmap-label slide-font-display slide-font-display--light">Pilot</span>
                <span className="slide-roadmap-detail slide-font-ui slide-font-ui--muted">
                  Two squads run with Harden in CI.
                </span>
              </li>
              <li className="slide-roadmap-stop">
                <span className="slide-roadmap-time slide-font-ui">Week 6–9</span>
                <span className="slide-roadmap-dot slide-roadmap-dot--accent" aria-hidden="true" />
                <span className="slide-roadmap-label slide-font-display slide-font-display--light">Expand</span>
                <span className="slide-roadmap-detail slide-font-ui slide-font-ui--muted">
                  Roll out across business-critical services.
                </span>
              </li>
              <li className="slide-roadmap-stop">
                <span className="slide-roadmap-time slide-font-ui">Week 10–12</span>
                <span className="slide-roadmap-dot" aria-hidden="true" />
                <span className="slide-roadmap-label slide-font-display slide-font-display--light">Govern</span>
                <span className="slide-roadmap-detail slide-font-ui slide-font-ui--muted">
                  Evidence packs ready for audit.
                </span>
              </li>
            </ol>
          </div>
        </article>

        <article className="slide slide--barchart slide--on-cream" role="listitem">
          <SlideMark variant="light" />
          <div className="slide-body slide-body--barchart">
            <div className="slide-barchart-heading">
              <h2 className="slide-font-display">Legacy review vs. Harden in CI</h2>
            </div>
            <div className="slide-barchart-legend slide-font-ui">
              <span className="slide-barchart-legend-item slide-barchart-legend-item--legacy">Legacy review</span>
              <span className="slide-barchart-legend-item slide-barchart-legend-item--harden">With Harden</span>
            </div>
            <div className="slide-barchart-rows">
              <div className="slide-barchart-row">
                <span className="slide-barchart-label slide-font-ui">PR coverage</span>
                <div className="slide-barchart-bars">
                  <div className="slide-barchart-bar slide-barchart-bar--legacy">
                    <div className="slide-barchart-track">
                      <span className="slide-barchart-fill" style={{ '--pct': '32%' }} />
                    </div>
                    <span className="slide-barchart-value slide-font-ui">32%</span>
                  </div>
                  <div className="slide-barchart-bar slide-barchart-bar--harden">
                    <div className="slide-barchart-track">
                      <span className="slide-barchart-fill" style={{ '--pct': '100%' }} />
                    </div>
                    <span className="slide-barchart-value slide-font-ui">100%</span>
                  </div>
                </div>
              </div>
              <div className="slide-barchart-row">
                <span className="slide-barchart-label slide-font-ui">Time to remediation</span>
                <div className="slide-barchart-bars">
                  <div className="slide-barchart-bar slide-barchart-bar--legacy">
                    <div className="slide-barchart-track">
                      <span className="slide-barchart-fill" style={{ '--pct': '90%' }} />
                    </div>
                    <span className="slide-barchart-value slide-font-ui">18 hrs</span>
                  </div>
                  <div className="slide-barchart-bar slide-barchart-bar--harden">
                    <div className="slide-barchart-track">
                      <span className="slide-barchart-fill" style={{ '--pct': '12%' }} />
                    </div>
                    <span className="slide-barchart-value slide-font-ui">2 hrs</span>
                  </div>
                </div>
              </div>
              <div className="slide-barchart-row">
                <span className="slide-barchart-label slide-font-ui">Audit-ready evidence</span>
                <div className="slide-barchart-bars">
                  <div className="slide-barchart-bar slide-barchart-bar--legacy">
                    <div className="slide-barchart-track">
                      <span className="slide-barchart-fill" style={{ '--pct': '20%' }} />
                    </div>
                    <span className="slide-barchart-value slide-font-ui">20%</span>
                  </div>
                  <div className="slide-barchart-bar slide-barchart-bar--harden">
                    <div className="slide-barchart-track">
                      <span className="slide-barchart-fill" style={{ '--pct': '95%' }} />
                    </div>
                    <span className="slide-barchart-value slide-font-ui">95%</span>
                  </div>
                </div>
              </div>
              <div className="slide-barchart-row">
                <span className="slide-barchart-label slide-font-ui">Developer toil</span>
                <div className="slide-barchart-bars">
                  <div className="slide-barchart-bar slide-barchart-bar--legacy">
                    <div className="slide-barchart-track">
                      <span className="slide-barchart-fill" style={{ '--pct': '78%' }} />
                    </div>
                    <span className="slide-barchart-value slide-font-ui">High</span>
                  </div>
                  <div className="slide-barchart-bar slide-barchart-bar--harden">
                    <div className="slide-barchart-track">
                      <span className="slide-barchart-fill" style={{ '--pct': '22%' }} />
                    </div>
                    <span className="slide-barchart-value slide-font-ui">Low</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="slide slide--gauges slide--on-cream" role="listitem">
          <SlideMark variant="light" />
          <div className="slide-body slide-body--gauges">
            <div className="slide-gauges-heading">
              <h2 className="slide-font-display">Three signals security teams watch</h2>
            </div>
            <div className="slide-gauges-grid">
              <figure className="slide-gauge-cell">
                <div className="slide-gauge" style={{ '--pct': 100 }} aria-label="100 percent">
                  <span className="slide-gauge-value slide-font-display">
                    100<span className="slide-gauge-unit">%</span>
                  </span>
                </div>
                <figcaption className="slide-gauge-caption">
                  <p className="slide-gauge-label slide-font-ui">PRs scanned</p>
                  <p className="slide-gauge-detail slide-font-ui">Every merge runs through Harden&apos;s policy engine.</p>
                </figcaption>
              </figure>
              <figure className="slide-gauge-cell">
                <div className="slide-gauge" style={{ '--pct': 87 }} aria-label="87 percent">
                  <span className="slide-gauge-value slide-font-display">
                    87<span className="slide-gauge-unit">%</span>
                  </span>
                </div>
                <figcaption className="slide-gauge-caption">
                  <p className="slide-gauge-label slide-font-ui">Policies enforced</p>
                  <p className="slide-gauge-detail slide-font-ui">SSO, SCIM, and policy-as-code applied across all repos.</p>
                </figcaption>
              </figure>
              <figure className="slide-gauge-cell">
                <div className="slide-gauge" style={{ '--pct': 64 }} aria-label="64 percent">
                  <span className="slide-gauge-value slide-font-display">
                    64<span className="slide-gauge-unit">%</span>
                  </span>
                </div>
                <figcaption className="slide-gauge-caption">
                  <p className="slide-gauge-label slide-font-ui">Fewer high-risk findings</p>
                  <p className="slide-gauge-detail slide-font-ui">Compared to the prior quarter&apos;s manual review baseline.</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </article>

        <article className="slide slide--hero-media slide--on-cream" role="listitem">
          <SlideMark variant="light" />
          <div className="slide-body slide-body--hero-media">
            <ImageSlot label="Replace Image" />
            <div className="slide-hero-text">
              <h2 className="slide-font-display">Set the visual tone up front</h2>
              <p className="slide-hero-lede slide-font-ui">
                Pair a strong photograph or UI capture with a single supporting line—ideal for chapter opens or
                case-study pivots.
              </p>
            </div>
          </div>
        </article>

        <article className="slide slide--split-media slide--media-right slide--on-cream" role="listitem">
          <SlideMark variant="light" />
          <div className="slide-body slide-body--split-media">
            <div className="slide-split-media-copy">
              <h2 className="slide-font-display">Product story with visual proof</h2>
              <p className="slide-split-media-deck slide-font-ui">
                Use this layout for a dashboard capture, architecture diagram, or workflow graphic. Keep body
                copy tight; let the image carry detail.
              </p>
            </div>
            <ImageSlot label="Replace Image" />
          </div>
        </article>

        <article className="slide slide--split-media slide--media-left slide--on-cream" role="listitem">
          <SlideMark variant="light" />
          <div className="slide-body slide-body--split-media slide-body--split-media-reverse">
            <ImageSlot label="Replace Image" />
            <div className="slide-split-media-copy">
              <h2 className="slide-font-display">Narrative before the bullet list</h2>
              <p className="slide-split-media-deck slide-font-ui">
                Image on the left suits before/after flows, team moments, or brand-forward campaigns. Right column
                holds the message hierarchy.
              </p>
            </div>
          </div>
        </article>

        <article className="slide slide--duo-media slide--on-cream" role="listitem">
          <SlideMark variant="light" />
          <div className="slide-body slide-body--duo-wrap">
            <h2 className="slide-duo-heading slide-font-display">Side-by-side comparison</h2>
            <p className="slide-duo-intro slide-font-ui">
              Before and after, legacy vs. Harden, or two integration examples—equal weight for each frame.
            </p>
            <div className="slide-duo-grid">
              <ImageSlot label="Replace Image" className="slide-duo-img slide-duo-img--a" />
              <ImageSlot label="Replace Image" className="slide-duo-img slide-duo-img--b" />
              <div className="slide-duo-copy slide-duo-copy--a">
                <p className="slide-duo-column-title slide-font-ui">Before — manual review</p>
                <p className="slide-duo-text slide-font-ui">
                  Policies live in docs; coverage depends on who is free. Note bottlenecks, audit gaps, or shadow
                  merges your buyer names—then contrast with the right column.
                </p>
              </div>
              <div className="slide-duo-copy slide-duo-copy--b">
                <p className="slide-duo-column-title slide-font-ui">After — Harden in CI</p>
                <p className="slide-duo-text slide-font-ui">
                  Every pull request gets guardrails, scans, and evidence automated into the tool stack developers
                  already use. Use UI captures or diagrams that make that shift obvious at a glance.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="slide slide--trio-media slide--on-cream" role="listitem">
          <SlideMark variant="light" />
          <div className="slide-body slide-body--trio-wrap">
            <h2 className="slide-trio-heading slide-font-display">Three pillars or proof points</h2>
            <p className="slide-trio-intro slide-font-ui">
              Logos, partners, workflow steps, or security layers—keep visuals consistent in tone and crop.
            </p>
            <div className="slide-trio-grid">
              <ImageSlot label="Replace Image" className="slide-trio-img slide-trio-img--a" />
              <div className="slide-trio-copy slide-trio-copy--a">
                <p className="slide-trio-column-title slide-font-ui">Integrate</p>
                <p className="slide-trio-text slide-font-ui">
                  Wire SSO, SCIM, and CI so identity signals follow every PR. Drop partner logos or stack
                  diagrams in the frame above.
                </p>
              </div>
              <ImageSlot label="Replace Image" className="slide-trio-img slide-trio-img--b" />
              <div className="slide-trio-copy slide-trio-copy--b">
                <p className="slide-trio-column-title slide-font-ui">Govern</p>
                <p className="slide-trio-text slide-font-ui">
                  Encode policy as checks and evidence: who approved, what ran, what changed. Use this block for
                  controls or dashboard grabs.
                </p>
              </div>
              <ImageSlot label="Replace Image" className="slide-trio-img slide-trio-img--c" />
              <div className="slide-trio-copy slide-trio-copy--c">
                <p className="slide-trio-column-title slide-font-ui">Deploy</p>
                <p className="slide-trio-text slide-font-ui">
                  Ship inside your VPC with secrets and data in your boundary. Reserve this space for topology
                  maps or deployment screenshots.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="slide slide--closing slide--on-cream" role="listitem">
          <div className="slide-body slide-body--closing">
            <SlideLogoFull />
            <h2 className="slide-font-display">Let&apos;s fortify your next release</h2>
            <p className="slide-closing-contact slide-font-ui">
              <span className="slide-closing-strong">harden.run</span>
              <span>Your contact name · team@harden.run</span>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
