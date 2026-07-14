import { useState } from 'react';
import { jsPDF } from 'jspdf';
import './Invoice713.css';

const LINE_ITEMS = [
  { description: 'Design System', amount: 1000 },
  { description: 'App Dashboard Design', amount: 2000 },
];

const TOTAL = LINE_ITEMS.reduce((sum, item) => sum + item.amount, 0);
const DUE_NOW = 1500;
const FILENAME = 'Luyao-Zhang-Invoice-07142026.pdf';

const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="4" fill="url(#g)"/>
  <path d="M4.5 13.1135C10.8559 13.1135 16.6433 4.5 13.8939 4.5C10.062 4.5 8.22877 21.0668 5.35649 16.7966C2.18391 12.0799 13.0517 20.3489 20 15.8699" stroke="white" stroke-linecap="round"/>
  <defs>
    <linearGradient id="g" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
      <stop stop-color="#535353"/>
      <stop offset="1"/>
    </linearGradient>
  </defs>
</svg>`;

function formatUsd(n) {
  return `$${n.toLocaleString('en-US')}`;
}

function loadLogoDataUrl() {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 96;
      canvas.height = 96;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 96, 96);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = reject;
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(LOGO_SVG)}`;
  });
}

async function buildInvoicePdf() {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'in',
    format: 'letter',
    compress: true,
  });

  const left = 0.85;
  const right = 8.5 - 0.85;
  let y = 0.85;

  const logo = await loadLogoDataUrl();
  pdf.addImage(logo, 'PNG', left, y, 0.32, 0.32);

  pdf.setTextColor(17, 17, 17);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(12);
  pdf.text('Luyao Zhang', left + 0.42, y + 0.22);

  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  pdf.setTextColor(34, 34, 34);
  pdf.text('3114 Freestone Pl', left, y + 0.55);
  pdf.text('Hayward, CA 94541', left, y + 0.72);
  pdf.text('(415) 404-5623', left, y + 0.89);

  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(24);
  pdf.setTextColor(17, 17, 17);
  pdf.text('INVOICE', right, y + 0.22, { align: 'right' });

  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  pdf.setTextColor(34, 34, 34);
  pdf.text('Invoice#: 07142026', right, y + 0.55, { align: 'right' });
  pdf.text('Invoice Date: 7/14/2026', right, y + 0.72, { align: 'right' });
  pdf.text('Due Date: 7/19/2026', right, y + 0.89, { align: 'right' });

  y = 2.35;
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(9);
  pdf.setTextColor(17, 17, 17);
  pdf.text('BILL TO', left, y);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  pdf.setTextColor(34, 34, 34);
  pdf.text('vizops.ai', left, y + 0.22);

  y = 3.15;
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(9);
  pdf.setTextColor(17, 17, 17);
  pdf.text('DESCRIPTION', left, y);
  pdf.text('AMOUNT', right, y, { align: 'right' });
  pdf.setDrawColor(221, 221, 221);
  pdf.setLineWidth(0.01);
  pdf.line(left, y + 0.1, right, y + 0.1);

  y += 0.35;
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  pdf.setTextColor(34, 34, 34);
  LINE_ITEMS.forEach((item) => {
    pdf.text(item.description, left, y);
    pdf.text(formatUsd(item.amount), right, y, { align: 'right' });
    pdf.setDrawColor(238, 238, 238);
    pdf.line(left, y + 0.12, right, y + 0.12);
    y += 0.4;
  });

  y += 0.15;
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(10);
  pdf.setTextColor(17, 17, 17);
  pdf.text('TOTAL', right - 1.35, y);
  pdf.text(formatUsd(TOTAL), right, y, { align: 'right' });
  y += 0.28;
  pdf.text('DUE NOW', right - 1.35, y);
  pdf.text(`${formatUsd(DUE_NOW)}*`, right, y, { align: 'right' });

  y += 0.85;
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(9);
  pdf.text('BANK INFORMATION', left, y);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  pdf.setTextColor(34, 34, 34);
  [
    'Bank Name: Bank of America',
    'Account Name: Luyao Zhang',
    'Account Number: 000279031205',
    'Routing Number: 121000358',
    'Currency: USD',
  ].forEach((line, i) => {
    pdf.text(line, left, y + 0.25 + i * 0.2);
  });

  y += 1.5;
  pdf.setFontSize(9);
  pdf.setTextColor(68, 68, 68);
  pdf.text(
    `*${formatUsd(DUE_NOW)} upfront, ${formatUsd(TOTAL - DUE_NOW)} upon final approval and handoff of all files`,
    left,
    y,
    { maxWidth: 6.5 }
  );

  return pdf;
}

export default function Invoice713() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      const pdf = await buildInvoicePdf();
      pdf.save(FILENAME);
    } catch (err) {
      console.error('Failed to generate invoice PDF', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="invoice-page">
      <div className="invoice-toolbar no-print">
        <button
          type="button"
          className="invoice-download-btn"
          onClick={handleDownload}
          disabled={isDownloading}
        >
          {isDownloading ? 'Preparing PDF…' : 'Download PDF'}
        </button>
      </div>

      <article className="invoice-sheet" aria-label="Invoice 07142026">
        <header className="invoice-header">
          <div className="invoice-from">
            <div className="invoice-brand">
              <svg
                className="invoice-mark"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="24" height="24" rx="4" fill="url(#invoice-luyao-grad)" />
                <path
                  d="M4.5 13.1135C10.8559 13.1135 16.6433 4.5 13.8939 4.5C10.062 4.5 8.22877 21.0668 5.35649 16.7966C2.18391 12.0799 13.0517 20.3489 20 15.8699"
                  stroke="white"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="invoice-luyao-grad"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#535353" />
                    <stop offset="1" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="invoice-name">Luyao Zhang</span>
            </div>
            <p className="invoice-address">
              3114 Freestone Pl
              <br />
              Hayward, CA 94541
              <br />
              (415) 404-5623
            </p>
          </div>

          <div className="invoice-meta">
            <h1 className="invoice-title">INVOICE</h1>
            <p>
              Invoice#: 07142026
              <br />
              Invoice Date: 7/14/2026
              <br />
              Due Date: 7/19/2026
            </p>
          </div>
        </header>

        <section className="invoice-bill-to">
          <h2>BILL TO</h2>
          <p>vizops.ai</p>
        </section>

        <table className="invoice-table">
          <thead>
            <tr>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {LINE_ITEMS.map((item) => (
              <tr key={item.description}>
                <td>{item.description}</td>
                <td>{formatUsd(item.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="invoice-totals">
          <div className="invoice-total-row">
            <span>TOTAL</span>
            <span>{formatUsd(TOTAL)}</span>
          </div>
          <div className="invoice-total-row">
            <span>DUE NOW</span>
            <span>{formatUsd(DUE_NOW)}*</span>
          </div>
        </div>

        <section className="invoice-bank">
          <h2>BANK INFORMATION</h2>
          <p>
            Bank Name: Bank of America
            <br />
            Account Name: Luyao Zhang
            <br />
            Account Number: 000279031205
            <br />
            Routing Number: 121000358
            <br />
            Currency: USD
          </p>
        </section>

        <p className="invoice-note">
          *{formatUsd(DUE_NOW)} upfront, {formatUsd(TOTAL - DUE_NOW)} upon final approval and handoff
          of all files
        </p>
      </article>
    </div>
  );
}
