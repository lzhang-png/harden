import { useState, useCallback, useRef, useEffect } from 'react';
import './BrandGuidelines.css';

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

function HardenLogoStacked({ className, markColor = '#872921' }) {
  return (
    <svg className={className} viewBox="0 0 673 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M627.037 288.13C639.816 288.13 649.987 292.289 657.55 300.609C665.243 308.799 669.09 320.108 669.09 334.537V386.587L672.169 398.104H634.299L635.839 386.587V339.022C635.839 331.742 633.948 326.088 630.167 322.058C626.385 318.028 621.3 316.013 614.91 316.013C608.521 316.013 603.435 318.028 599.654 322.058C595.872 326.088 593.981 331.742 593.981 339.022V386.587L595.521 398.104H557.455L560.535 386.587V303.729L558.995 289.3H593.981V303.729C597.372 298.919 601.936 295.149 607.673 292.419C613.411 289.56 619.865 288.13 627.037 288.13Z" fill="currentColor"/>
      <path d="M551.767 341.363C551.767 344.481 551.57 347.73 551.178 351.108H475.178C475.701 357.864 477.862 363.061 481.658 366.7C485.586 370.208 490.365 371.962 495.994 371.962C504.373 371.962 510.199 368.454 513.472 361.437H549.214C547.381 368.584 544.042 375.015 539.198 380.732C534.485 386.449 528.528 390.932 521.328 394.18C514.127 397.428 506.075 399.052 497.172 399.052C486.437 399.052 476.88 396.778 468.501 392.231C460.122 387.683 453.576 381.187 448.862 372.741C444.149 364.296 441.793 354.421 441.793 343.117C441.793 331.813 444.084 321.938 448.666 313.493C453.379 305.048 459.925 298.551 468.304 294.003C476.683 289.456 486.306 287.182 497.172 287.182C507.777 287.182 517.203 289.391 525.451 293.809C533.7 298.226 540.115 304.528 544.697 312.713C549.41 320.899 551.767 330.449 551.767 341.363ZM517.4 332.593C517.4 326.876 515.436 322.328 511.508 318.95C507.581 315.572 502.671 313.883 496.78 313.883C491.15 313.883 486.371 315.507 482.444 318.755C478.647 322.003 476.29 326.616 475.374 332.593H517.4Z" fill="currentColor"/>
      <path d="M318.546 343.786C318.546 332.595 320.636 322.771 324.816 314.313C329.128 305.855 334.941 299.348 342.257 294.794C349.573 290.24 357.738 287.963 366.752 287.963C373.938 287.963 380.47 289.459 386.348 292.452C392.358 295.445 397.061 299.479 400.458 304.553V266.292L398.915 254H435.51L433.967 266.292V386.91L437.052 398.439H398.915L400.458 386.91V382.824C397.322 388.029 392.815 392.193 386.936 395.316C381.188 398.439 374.46 400 366.752 400C357.738 400 349.573 397.723 342.257 393.168C334.941 388.484 329.128 381.913 324.816 373.455C320.636 364.866 318.546 354.977 318.546 343.786ZM400.458 343.981C400.458 335.653 398.106 329.082 393.403 324.267C388.831 319.453 383.213 317.045 376.55 317.045C369.888 317.045 364.205 319.453 359.502 324.267C354.929 328.952 352.643 335.458 352.643 343.786C352.643 352.114 354.929 358.75 359.502 363.695C364.205 368.51 369.888 370.917 376.55 370.917C383.213 370.917 388.831 368.51 393.403 363.695C398.106 358.881 400.458 352.309 400.458 343.981Z" fill="currentColor"/>
      <path d="M282.424 307.434C286.336 301.454 291.225 296.774 297.092 293.394C302.96 289.885 309.479 288.13 316.65 288.13V323.423H307.458C299.113 323.423 292.855 325.243 288.683 328.882C284.511 332.392 282.424 338.632 282.424 347.601V386.587L285.504 398.104H247.442L248.981 386.587V302.163L247.442 289.3H283.964L282.424 302.163V307.434Z" fill="currentColor"/>
      <path d="M119.455 343.87C119.455 332.696 121.529 322.886 125.676 314.441C129.952 305.995 135.719 299.499 142.977 294.951C150.234 290.403 158.334 288.13 167.276 288.13C174.922 288.13 181.596 289.689 187.299 292.807C193.13 295.925 197.601 300.018 200.712 305.086V302.546L199.181 289.689H235.483L233.953 302.546V386.929L237.014 398.441H199.181L200.712 386.929V383.044C197.472 388.111 192.936 392.204 187.104 395.322C181.402 398.441 174.728 400 167.082 400C158.269 400 150.234 397.726 142.977 393.178C135.719 388.501 129.952 381.939 125.676 373.494C121.529 364.919 119.455 355.044 119.455 343.87ZM200.712 344.065C200.712 335.749 198.379 329.188 193.714 324.38C189.178 319.573 183.605 317.169 176.996 317.169C170.386 317.169 164.749 319.573 160.083 324.38C155.548 329.058 153.28 335.554 153.28 343.87C153.28 352.185 155.548 358.812 160.083 363.749C164.749 368.557 170.386 370.96 176.996 370.96C183.605 370.96 189.178 368.557 193.714 363.749C198.379 358.942 200.712 352.38 200.712 344.065Z" fill="currentColor"/>
      <path d="M68.7736 288.273C81.318 288.273 91.3798 292.428 98.9587 300.736C106.538 308.915 110.327 320.21 110.327 334.62V386.603L111.87 398.104H75.4629L77.0059 386.603V339.099C77.0059 331.829 75.1111 326.182 71.3217 322.157C67.5322 318.133 62.436 316.12 56.0331 316.12C49.6302 316.12 44.534 318.133 40.7445 322.157C36.955 326.182 35.0603 331.829 35.0603 339.099V386.603L36.6033 398.104H0L1.54299 386.603V265.881L0 254H36.6033L35.0603 265.881V304.047C38.4577 299.243 43.0966 295.414 48.9768 292.558C54.857 289.701 61.456 288.273 68.7736 288.273Z" fill="currentColor"/>
      <path d="M294.071 48.5053H378.863V4C378.863 1.79086 380.654 0 382.863 0H436.884C439.884 0 441.858 3.18632 440.58 5.90089C435.935 15.7717 427.316 35.7977 427.316 48.5053C427.316 63.9474 440.044 165.051 442.902 187.562C443.206 189.954 441.333 192 438.922 192H378.863V139.453C378.863 116.013 359.882 97.0105 336.467 97.0105C313.052 97.0105 294.071 116.013 294.071 139.453V192H234.012C231.601 192 229.729 189.954 230.032 187.562C232.891 165.051 245.618 63.9474 245.618 48.5053C245.618 35.7977 236.999 15.7717 232.354 5.90089C231.076 3.18631 233.051 0 236.051 0H290.071C292.28 0 294.071 1.79086 294.071 4V48.5053Z" fill={markColor}/>
    </svg>
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

function HardenLogomark({ className, color = '#872921' }) {
  return (
    <svg className={className} viewBox="0 0 359 324" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M108.021 81.8526H250.979V6.75C250.979 3.02208 253.998 0 257.722 0H348.799C353.857 0 357.185 5.37691 355.031 9.95776C347.199 26.6148 332.668 60.4086 332.668 81.8526C332.668 107.911 354.126 278.523 358.945 316.511C359.457 320.547 356.3 324 352.236 324H250.979V235.326C250.979 195.771 218.977 163.705 179.5 163.705C140.023 163.705 108.021 195.771 108.021 235.326V324H6.7643C2.69967 324 -0.45743 320.547 0.0545597 316.511C4.8737 278.523 26.3315 107.911 26.3315 81.8526C26.3315 60.4086 11.8006 26.6148 3.96855 9.95775C1.81467 5.3769 5.14309 0 10.2013 0H101.278C105.002 0 108.021 3.02208 108.021 6.75V81.8526Z" fill={color}/>
    </svg>
  );
}

function HardenLogo({ className, markColor = '#872921' }) {
  return (
    <svg className={className} viewBox="0 0 701 144" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M666.378 43.5972C675.962 43.5972 683.591 46.7171 689.263 52.9567C695.033 59.0989 697.918 67.5809 697.918 78.4028V117.44L700.228 126.078H671.825L672.98 117.44V81.7664C672.98 76.3067 671.562 72.0657 668.725 69.0433C665.889 66.021 662.075 64.5098 657.283 64.5098C652.491 64.5098 648.677 66.021 645.841 69.0433C643.005 72.0657 641.587 76.3067 641.587 81.7664V117.44L642.741 126.078H614.192L616.502 117.44V55.2966L615.347 44.4747H641.587V55.2966C644.129 51.6893 647.552 48.8619 651.855 46.8145C656.158 44.6697 660.999 43.5972 666.378 43.5972Z" fill="currentColor"/>
      <path d="M609.926 83.5223C609.926 85.8611 609.778 88.2973 609.484 90.8309H552.484C552.876 95.8982 554.497 99.7961 557.344 102.525C560.29 105.156 563.874 106.471 568.096 106.471C574.38 106.471 578.75 103.84 581.205 98.578H608.011C606.636 103.938 604.132 108.761 600.499 113.049C596.964 117.337 592.497 120.699 587.096 123.135C581.696 125.571 575.657 126.789 568.98 126.789C560.928 126.789 553.76 125.084 547.476 121.673C541.192 118.262 536.282 113.39 532.747 107.056C529.212 100.722 527.445 93.3158 527.445 84.8379C527.445 76.3599 529.163 68.9539 532.6 62.6198C536.135 56.2856 541.044 51.4133 547.329 48.0026C553.613 44.5919 560.83 42.8866 568.98 42.8866C576.933 42.8866 584.003 44.5432 590.189 47.8564C596.375 51.1696 601.186 55.8959 604.623 62.0351C608.158 68.1743 609.926 75.3367 609.926 83.5223ZM584.15 76.9446C584.15 72.6569 582.677 69.2462 579.732 66.7126C576.786 64.1789 573.104 62.9121 568.685 62.9121C564.463 62.9121 560.879 64.1302 557.933 66.5664C555.086 69.0026 553.318 72.462 552.631 76.9446H584.15Z" fill="currentColor"/>
      <path d="M435.01 85.3396C435.01 76.9465 436.577 69.5782 439.713 63.2346C442.946 56.891 447.306 52.0114 452.793 48.5956C458.28 45.1798 464.404 43.4719 471.165 43.4719C476.554 43.4719 481.453 44.5942 485.862 46.8389C490.369 49.0836 493.896 52.109 496.444 55.9151V27.2192L495.287 18H522.733L521.576 27.2192V117.683L523.89 126.329H495.287L496.444 117.683V114.618C494.092 118.521 490.712 121.644 486.303 123.987C481.992 126.329 476.946 127.5 471.165 127.5C464.404 127.5 458.28 125.792 452.793 122.376C447.306 118.863 442.946 113.935 439.713 107.591C436.577 101.15 435.01 93.7326 435.01 85.3396ZM496.444 85.486C496.444 79.24 494.68 74.3115 491.153 70.7005C487.723 67.0896 483.51 65.2841 478.513 65.2841C473.516 65.2841 469.254 67.0896 465.727 70.7005C462.297 74.2139 460.583 79.0936 460.583 85.3396C460.583 91.5856 462.297 96.5628 465.727 100.271C469.254 103.882 473.516 105.688 478.513 105.688C483.51 105.688 487.723 103.882 491.153 100.271C494.68 96.6604 496.444 91.7319 496.444 85.486Z" fill="currentColor"/>
      <path d="M407.919 58.0752C410.852 53.5904 414.519 50.0806 418.92 47.5458C423.32 44.9134 428.209 43.5972 433.588 43.5972V70.067H426.694C420.435 70.067 415.742 71.432 412.613 74.1618C409.483 76.7942 407.919 81.4739 407.919 88.2011V117.44L410.228 126.078H381.682L382.837 117.44V54.1223L381.682 44.4747H409.073L407.919 54.1223V58.0752Z" fill="currentColor"/>
      <path d="M285.692 85.4024C285.692 77.0218 287.247 69.6645 290.357 63.3304C293.565 56.9963 297.89 52.1239 303.333 48.7132C308.776 45.3026 314.851 43.5972 321.558 43.5972C327.292 43.5972 332.298 44.7666 336.574 47.1053C340.948 49.4441 344.302 52.5137 346.634 56.3142V54.4092L345.487 44.7666H372.713L371.565 54.4092V117.697L373.861 126.33H345.487L346.634 117.697V114.783C344.204 118.583 340.802 121.653 336.429 123.992C332.152 126.33 327.146 127.5 321.412 127.5C314.802 127.5 308.776 125.795 303.333 122.384C297.89 118.876 293.565 113.955 290.357 107.62C287.247 101.189 285.692 93.7829 285.692 85.4024ZM346.634 85.5485C346.634 79.3119 344.885 74.3908 341.386 70.7852C337.984 67.1796 333.804 65.3768 328.847 65.3768C323.89 65.3768 319.662 67.1796 316.163 70.7852C312.761 74.2933 311.06 79.1657 311.06 85.4024C311.06 91.639 312.761 96.6089 316.163 100.312C319.662 103.917 323.89 105.72 328.847 105.72C333.804 105.72 337.984 103.917 341.386 100.312C344.885 96.7063 346.634 91.7852 346.634 85.5485Z" fill="currentColor"/>
      <path d="M247.681 43.705C257.089 43.705 264.635 46.8208 270.319 53.0523C276.004 59.1865 278.846 67.6574 278.846 78.4652V117.452L280.003 126.078H252.698L253.855 117.452V81.8244C253.855 76.3718 252.434 72.1363 249.592 69.1179C246.75 66.0995 242.927 64.5903 238.125 64.5903C233.323 64.5903 229.501 66.0995 226.659 69.1179C223.817 72.1363 222.396 76.3718 222.396 81.8244V117.452L223.553 126.078H196.1L197.258 117.452V26.9104L196.1 18H223.553L222.396 26.9104V55.5352C224.944 51.9326 228.423 49.0602 232.833 46.9181C237.243 44.7761 242.192 43.705 247.681 43.705Z" fill="currentColor"/>
      <path d="M48.0532 36.3789H111.647V3C111.647 1.34315 112.991 0 114.647 0H155.163C157.413 0 158.893 2.38974 157.935 4.42567C154.451 11.8288 147.987 26.8483 147.987 36.3789C147.987 47.9606 157.533 123.788 159.676 140.672C159.904 142.465 158.5 144 156.692 144H111.647V104.589C111.647 87.0094 97.4114 72.7579 79.8503 72.7579C62.2892 72.7579 48.0532 87.0094 48.0532 104.589V144H3.00909C1.20094 144 -0.203487 142.465 0.0242708 140.672C2.16806 123.788 11.7135 47.9606 11.7135 36.3789C11.7135 26.8483 5.24947 11.8288 1.7654 4.42567C0.807253 2.38973 2.2879 0 4.53802 0H45.0532C46.71 0 48.0532 1.34315 48.0532 3V36.3789Z" fill={markColor}/>
    </svg>
  );
}

const sections = [
  {
    id: 'logo',
    title: 'Logo',
    showLogo: true,
    items: [
      'Primary logo (horizontal lockup)',
      'Stacked / vertical lockup',
      'Logomark (standalone symbol)',
      'Wordmark (logotype only)',
    ],
    guide: [
      'Place each logo variant on its own row with a light background so the shape reads clearly.',
      'Export every variant in SVG (scalable) and PNG at 1\u00d7, 2\u00d7, and 3\u00d7 for retina screens.',
      'Show the logo on both light and dark backgrounds side by side so viewers can see how each version behaves.',
      'Label each variant with its name (e.g. "Horizontal lockup") and a one-line description of when to use it: website header, app icon, social avatar, etc.',
      'If the logo has a color version and a mono version, show both and note which is the default.',
    ],
  },
  {
    id: 'clear-space',
    title: 'Clear space & minimum size',
    showClearSpace: true,
    items: [
      'Minimum clear-space rules around the logo',
      'Minimum reproduction size (print & digital)',
    ],
    guide: [
      'Define clear space using a unit derived from the logo itself (e.g. "the height of the letter H in the wordmark"). This keeps it proportional at any scale.',
      'A common rule of thumb: use 0.5\u00d7 to 1\u00d7 the height of the logomark (or one cap-height of the wordmark) as the minimum clear space on all four sides. Most brands land at 0.5\u00d7 for compact uses and 1\u00d7 as the ideal.',
      'For example, if the mark renders at 40 px tall, nothing else should come within 20 px of any edge. Err generous \u2014 too much space never hurts recognition; too little makes the logo feel cramped.',
      'Draw a diagram showing the logo centered inside its clear-space boundary with dimension lines.',
      'Sanity-check at the smallest allowed size: squint at it \u2014 can you clearly distinguish it from surrounding elements? On mobile, does it still have breathing room? Print it and hold at arm\u2019s length \u2014 if the boundary feels tight, increase the space.',
      'Set a minimum width for digital (e.g. 80 px) and a minimum width for print (e.g. 20 mm). Below these sizes the logo becomes illegible.',
      'If you have a simplified "small use" version (e.g. logomark only), note the threshold where you switch to it.',
    ],
  },
  {
    id: 'logo-misuse',
    title: 'Logo misuse',
    showMisuse: true,
    items: [
      'Do not stretch, rotate, or distort',
      'Do not change the logo colors',
      'Do not place on busy or low-contrast backgrounds',
      'Do not add effects (drop shadows, outlines, gradients)',
      'Do not rearrange or modify internal elements',
    ],
    guide: [
      'Create a grid of "don\u2019t" examples \u2014 each one showing a single violation with a red \u00d7 or strikethrough.',
      'Use the actual logo file so the mistakes look realistic, not hypothetical.',
      'Keep the list to 5\u20138 violations; too many dilutes the message.',
      'Pair each violation with a short reason (e.g. "Stretching distorts proportions and weakens recognition").',
    ],
  },
  {
    id: 'color-palette',
    title: 'Color palette',
    items: [
      'Primary brand colors (hex, RGB, HSL)',
      'Secondary / accent colors',
      'Neutral & background tones',
      'Color contrast & accessibility ratios',
      'Dark-mode palette (if applicable)',
    ],
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
    guide: [
      'Show each color as a large swatch (at least 80 \u00d7 80 px) with its name, hex, RGB, and HSL values underneath.',
      'Group colors into tiers: primary (1\u20132 colors), secondary/accent (1\u20133), neutrals (3\u20135 from white to dark).',
      'For every text-on-background combination, list the WCAG contrast ratio and whether it passes AA or AAA.',
      'If you support dark mode, show the mapped equivalents: which light-mode color becomes which dark-mode color.',
      'Include a "color in context" example \u2014 a small UI snippet or marketing card rendered with the palette so it feels tangible.',
    ],
  },
  {
    id: 'typography',
    title: 'Typography',
    showTypography: true,
    items: [
      'Primary typeface: Newsreader Light — used for headlines and display text',
      'Body typeface: Poppins Regular — used for body copy, UI labels, and captions',
      'Fallback stacks for web and email',
    ],
    guide: [
      'Name every typeface and list the specific weights you license (e.g. Inter 400, 500, 600, 700).',
      'Show a specimen: the full alphabet, numerals, and a few special glyphs in each weight.',
      'Present the type scale as a visual stack — each level (H1 down to caption) rendered at its actual size with font-size, line-height, and letter-spacing noted beside it.',
      'If you use a monospace face for code blocks or terminals, show it in context (a small code snippet).',
      'Add a note on fallback font stacks for web and email.',
    ],
  },
  {
    id: 'iconography',
    title: 'Iconography',
    items: [
      'Icon style (outline, filled, duotone)',
      'Icon grid & sizing',
      'Stroke weight & corner radius',
      'Usage context (UI, marketing, product)',
    ],
    guide: [
      'Pick or reference an icon library (e.g. Phosphor, Lucide) and state the chosen style variant (outline, filled, duotone).',
      'Show the icon grid \u2014 the bounding box, safe area, and key-shape templates (circle, square, landscape, portrait).',
      'Specify stroke weight (e.g. 1.5 px) and corner radius (e.g. 2 px) so custom icons stay consistent.',
      'Provide a sample sheet of 12\u201316 commonly used icons rendered on the grid.',
      'Note sizing rules: default size in UI (e.g. 20 px), touch-target padding, and when to scale up for marketing.',
    ],
  },
  {
    id: 'imagery',
    title: 'Imagery & photography',
    items: [
      'Photography style & art direction',
      'Illustration style',
      'Image treatment (overlays, crops, filters)',
      "Do\u2019s and don\u2019ts for stock imagery",
    ],
    guide: [
      'Describe the photographic mood in 3\u20135 adjectives (e.g. "bright, candid, documentary, warm, human").',
      'Provide 4\u20136 reference photos that embody the style so contributors can match the feel.',
      'If you use illustrations, describe the technique (flat vector, isometric, hand-drawn) and show 2\u20133 examples.',
      'Document any standard treatments: brand-color overlays, duotone filters, rounded-corner masks, etc.',
      'List stock-photo rules: no staged handshakes, no overly glossy offices, prefer real-world diversity.',
    ],
  },
  {
    id: 'voice-tone',
    title: 'Voice & tone',
    items: [
      'Brand personality attributes',
      'Writing principles (concise, direct, human)',
      'Tone by context (marketing, product UI, support)',
      'Terminology & word list',
    ],
    guide: [
      'Define 3\u20134 personality traits (e.g. "Expert but approachable, concise, no jargon for jargon\u2019s sake").',
      'Write a "this, not that" table: preferred phrasing on the left, avoided phrasing on the right.',
      'Show how tone shifts by context: a marketing headline vs. an error message vs. a support reply \u2014 same voice, different warmth.',
      'Maintain a living word list: approved terms ("sign in" not "log in"), banned buzzwords, and product-specific vocabulary.',
    ],
  },
  {
    id: 'layout',
    title: 'Layout & spacing',
    items: [
      'Grid system (columns, gutters, margins)',
      'Spacing scale (4 px / 8 px base unit)',
      'Section composition rules',
      'Responsive breakpoints',
    ],
    guide: [
      'Document your column grid: number of columns (e.g. 12), gutter width, and outer margins at each breakpoint.',
      'Define a spacing scale based on a base unit (4 px or 8 px) and list named tokens (xs, sm, md, lg, xl, 2xl).',
      'Show 2\u20133 example compositions \u2014 a hero section, a feature grid, a form \u2014 with spacing values annotated.',
      'List responsive breakpoints with their pixel values and what layout changes at each (e.g. 640 px: single column, 1024 px: sidebar appears).',
    ],
  },
  {
    id: 'motion',
    title: 'Motion & animation',
    items: [
      'Easing curves & duration tokens',
      'Entry / exit transitions',
      'Micro-interactions (hover, focus, active)',
      'Loading & skeleton states',
    ],
    guide: [
      'Define 2\u20133 easing curves with their cubic-bezier values and when to use each (e.g. "ease-out for entrances, ease-in for exits").',
      'Set duration tokens: fast (150 ms), normal (250 ms), slow (400 ms). Explain which UI actions map to which.',
      'Show micro-interaction specs: button hover scale, focus ring animation, toggle slide distance.',
      'Document loading patterns: skeleton shimmer speed, spinner size, and when to use each.',
      'If possible, embed or link to a short video/GIF demonstrating the motion language.',
    ],
  },
  {
    id: 'co-branding',
    title: 'Co-branding & partnerships',
    items: [
      'Partner logo placement rules',
      'Lock-up spacing with third-party marks',
      'Minimum size when paired',
      'Approved & prohibited pairings',
    ],
    guide: [
      'Show a diagram of the co-branded lock-up: your logo on the left, a vertical divider, the partner logo on the right, with spacing values labeled.',
      'Define a minimum clear space between the two marks (e.g. 1.5\u00d7 the logo\u2019s unit).',
      'State whether the partner logo should match your logo\u2019s height or optical weight.',
      'List any prohibited pairings (e.g. competitor logos, politically sensitive organizations).',
      'Provide a downloadable template (AI/Figma) with placeholders so partners can drop in their own mark.',
    ],
  },
  {
    id: 'assets',
    title: 'Asset downloads',
    items: [
      'Logo files (SVG, PNG, EPS)',
      'Color swatches (ASE, CLR)',
      'Font files or license links',
      'Social media templates',
      'Presentation & document templates',
    ],
    guide: [
      'Organize files into folders: /logos, /colors, /fonts, /templates.',
      'For logos, include: SVG (web), PNG at 1\u00d7/2\u00d7/3\u00d7 (screens), EPS or PDF (print), and a favicon .ico/.png set.',
      'Export color swatches as .ase (Adobe), .clr (macOS), and a JSON/CSS-variables file for developers.',
      'Link to the font source (Google Fonts URL, foundry license page, or self-hosted files).',
      'Provide ready-to-use templates: social cover images (LinkedIn, X, Open Graph), slide deck (Google Slides / Keynote), and a letterhead or one-pager.',
      'Add a version number and last-updated date so people know they have the latest kit.',
    ],
  },
];

function ClearSpaceDiagram({ label, children }) {
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

  return (
    <div className="clearspace-diagram">
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
        Nothing — text, images, borders, or other logos — should enter this zone.
      </p>
      <div className="clearspace-grid">
        <ClearSpaceDiagram label="Horizontal lockup">
          <HardenLogo className="clearspace-logo-svg" />
        </ClearSpaceDiagram>
        <ClearSpaceDiagram label="Stacked lockup">
          <HardenLogoStacked className="clearspace-logo-svg clearspace-logo-stacked" />
        </ClearSpaceDiagram>
        <ClearSpaceDiagram label="Logomark">
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
        <span className="brand-guide-logo-variant-label">Horizontal lockup — mono</span>
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
        <span className="brand-guide-logo-variant-label">Stacked lockup — mono</span>
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
        <span className="brand-guide-logo-variant-label">Logomark — mono</span>
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
        <p className="brand-guide-favicon-intro">
          The favicon uses a dedicated 180×180 icon with extra internal padding for
          legibility at small sizes. The minimum size is <strong>16×16 px</strong>.
          Provide <strong>32×32</strong> for taskbars, <strong>180×180</strong> for
          Apple touch icons, and <strong>512×512</strong> or larger for Google
          search results.
        </p>

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
          Everything needed to represent Harden consistently — from the logo and
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

              {s.showLogo && <LogoShowcase />}

              {s.showClearSpace && <ClearSpaceShowcase />}

              {s.showMisuse && <LogoMisuseShowcase />}

              {s.showTypography && <TypographyShowcase />}

              {s.palette && (
                <div className="palette-groups">
                  {s.palette.map((group) => (
                    <PaletteTable key={group.name} group={group} />
                  ))}
                </div>
              )}

              <ul>
                {s.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <details className="brand-guide-accordion">
                <summary>How to populate this section</summary>
                <ol className="brand-guide-steps">
                  {s.guide.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </details>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
