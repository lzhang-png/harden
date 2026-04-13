export const directions = [
  {
    num: 1,
    fontFamily: "'Lexend', sans-serif",
    fontWeight: 500,
    fontStyle: 'normal',
    letterSpacing: '-0.02em',
    marks: {
      h: { src: '/assets/marks/d1-h.svg', w: 77, h: 90 },
      v: { src: '/assets/marks/d1-v.svg', w: 110, h: 129 },
      solo: { src: '/assets/marks/d1-solo.svg', w: 180, h: 210 },
    },
    mockups: [
      '/assets/mockups/d1-1.png',
      '/assets/mockups/d1-2.png',
      '/assets/mockups/d1-3.png',
      '/assets/mockups/d1-4.png',
      '/assets/mockups/d1-5.png',
    ],
  },
  {
    num: 2,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontStyle: 'normal',
    letterSpacing: '-0.03em',
    marks: {
      h: { src: '/assets/marks/d2-h.svg', w: 124, h: 104 },
      v: { src: '/assets/marks/d2-v.svg', w: 162, h: 136 },
      solo: { src: '/assets/marks/d2-solo.svg', w: 264, h: 222 },
    },
    mockups: [
      '/assets/mockups/d2-1.png',
      '/assets/mockups/d2-2.png',
      '/assets/mockups/d2-3.png',
      '/assets/mockups/d2-4.png',
      '/assets/mockups/d2-5.png',
      '/assets/mockups/d2-6.png',
    ],
  },
  {
    num: 3,
    fontFamily: "'Source Serif 4', serif",
    fontWeight: 900,
    fontStyle: 'normal',
    letterSpacing: '-0.02em',
    marks: {
      h: { src: '/assets/marks/d3-h.svg', w: 86, h: 78, scale: 0.7, marginRight: '-0.5rem' },
      v: { src: '/assets/marks/d3-v.svg', w: 132, h: 118 },
      solo: { src: '/assets/marks/d3-solo.svg', w: 230, h: 206 },
    },
    mockups: [
      '/assets/mockups/d3-1.png',
      '/assets/mockups/d3-2.png',
      '/assets/mockups/d3-3.png',
      '/assets/mockups/d3-4.png',
      '/assets/mockups/d3-5.png',
      '/assets/mockups/d3-6.png',
    ],
  },
  {
    num: 4,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontStyle: 'normal',
    letterSpacing: '-0.03em',
    marks: {
      h: { src: '/assets/marks/d4-hv.svg', w: 141, h: 110, scale: 0.7, marginRight: '-0.5rem' },
      v: { src: '/assets/marks/d4-hv.svg', w: 141, h: 110 },
      solo: { src: '/assets/marks/d4-solo.svg', w: 237, h: 186 },
    },
    mockups: [
      '/assets/mockups/d4-1.png',
      '/assets/mockups/d4-2.png',
      '/assets/mockups/d4-3.png',
      '/assets/mockups/d4-4.png',
      '/assets/mockups/d4-5.png',
      '/assets/mockups/d4-6.png',
    ],
  },
  {
    num: 5,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontStyle: 'italic',
    letterSpacing: '-0.02em',
    marks: {
      h: { src: '/assets/marks/d5-hv.svg', w: 184, h: 117, scale: 0.7, marginRight: '-0.5rem' },
      v: { src: '/assets/marks/d5-hv.svg', w: 184, h: 117 },
      solo: { src: '/assets/marks/d5-solo.svg', w: 287, h: 183 },
    },
    mockups: [
      '/assets/mockups/d5-1.png',
      '/assets/mockups/d5-2.png',
      '/assets/mockups/d5-3.png',
      '/assets/mockups/d5-4.png',
      '/assets/mockups/d5-5.png',
      '/assets/mockups/d5-6.png',
    ],
  },
];

export const pricing = {
  deliverables: [
    {
      title: 'Refined Logo',
      description:
        '2\u20133 initial concepts narrowed to 1 final refined logo. Complete logo package: Vector (AI, EPS, SVG), high-res raster (PNG, JPG), transparent versions',
    },
    {
      title: 'Brand Guidelines',
      description:
        "4\u20138 page Brand Guidelines PDF (logo usage, colors, fonts, clear space, basic do\u2019s & don\u2019ts)",
    },
    {
      title: 'Ad Campaign',
      description:
        '3\u20135 variations of social media campaign images + motion graphics',
    },
  ],
  total: '$4,500',
  terms:
    '$2,000 upfront, $2,500 upon final approval and handoff of all files',
};
