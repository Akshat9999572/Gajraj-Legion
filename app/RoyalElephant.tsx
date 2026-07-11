export function RoyalElephant() {
  return (
    <div className="royal-elephant royal-elephant-walking" aria-label="Animated royal elephant mascot">
      <svg viewBox="0 0 280 190" role="img" aria-labelledby="elephant-title elephant-description">
        <title id="elephant-title">Gajraj royal elephant</title>
        <desc id="elephant-description">A small colourful crowned elephant walking with a gently moving trunk.</desc>
        <defs>
          <linearGradient id="elephantBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f7fdff"/><stop offset=".32" stopColor="#8dd7f4"/><stop offset=".66" stopColor="#4c7ff0"/><stop offset="1" stopColor="#7b4df3"/></linearGradient>
          <radialGradient id="elephantCheek" cx=".25" cy=".25" r=".85"><stop offset="0" stopColor="#fff8c9"/><stop offset=".45" stopColor="#ff84bd"/><stop offset="1" stopColor="#3979df"/></radialGradient>
          <linearGradient id="elephantGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffe59b"/><stop offset="1" stopColor="#d9a630"/></linearGradient>
          <linearGradient id="elephantSaddle" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff4a36"/><stop offset=".48" stopColor="#f7c948"/><stop offset="1" stopColor="#1f57d3"/></linearGradient>
          <filter id="elephantShadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="9" stdDeviation="7" floodColor="#111318" floodOpacity=".27"/></filter>
        </defs>
        <ellipse className="elephant-ground" cx="140" cy="169" rx="89" ry="12" fill="#111318" opacity=".16"/>
        <g className="elephant-body elephant-walk-body" filter="url(#elephantShadow)">
          <path d="M70 87c10-35 42-52 85-46 34 5 55 25 58 59l3 49h-35l-4-38-74 1-2 37H66l4-62Z" fill="url(#elephantBody)" stroke="#111318" strokeWidth="4" strokeLinejoin="round"/>
          <path className="elephant-leg elephant-leg-one" d="M80 111h25l-5 40H72l8-40Z" fill="#6aaef2" stroke="#111318" strokeWidth="4" strokeLinejoin="round"/>
          <path className="elephant-leg elephant-leg-two" d="M121 112h27l4 40h-29l-2-40Z" fill="#8dd7f4" stroke="#111318" strokeWidth="4" strokeLinejoin="round"/>
          <path className="elephant-leg elephant-leg-three" d="M160 111h27l8 40h-30l-5-40Z" fill="#5f77e9" stroke="#111318" strokeWidth="4" strokeLinejoin="round"/>
          <path d="M103 108h74" stroke="#fff8c9" strokeWidth="5" opacity=".58"/>
          <path d="M83 80c-24-14-40-4-39 18 1 17 14 27 31 23M189 75c23-17 43-6 41 17-2 18-15 27-34 23" fill="#8dd7f4" stroke="#111318" strokeWidth="4"/>
          <path className="elephant-saddle" d="M92 52h78l18 50H76l16-50Z" fill="url(#elephantSaddle)" stroke="#111318" strokeWidth="4" strokeLinejoin="round"/>
          <path d="M95 62h72M86 88h96" stroke="#ffe59b" strokeWidth="5"/>
          <circle cx="109" cy="76" r="5" fill="#ffe59b"/><circle cx="137" cy="76" r="5" fill="#fff8c9"/><circle cx="165" cy="76" r="5" fill="#ff84bd"/>
        </g>
        <g className="elephant-head elephant-walk-head">
          <path d="M92 64c0-32 21-52 49-52s50 20 50 52v49c0 31-20 48-49 48-30 0-50-18-50-48V64Z" fill="url(#elephantBody)" stroke="#111318" strokeWidth="4"/>
          <path d="M101 67C74 53 61 72 68 94c5 17 18 27 37 23M181 67c27-14 40 5 33 27-5 17-18 27-37 23" fill="url(#elephantCheek)" stroke="#111318" strokeWidth="4"/>
          <path d="M112 88c7 9 19 9 26 0M165 88c-7 9-19 9-26 0" fill="none" stroke="#111318" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="121" cy="76" r="4" fill="#111318"/><circle cx="162" cy="76" r="4" fill="#111318"/>
          <path className="elephant-trunk" d="M141 91c1 25 2 50-11 62-10 9-25 5-27-7 12 4 19-3 20-17l2-38" fill="url(#elephantBody)" stroke="#111318" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M110 109c-7 8-10 16-10 24M174 109c7 8 10 16 10 24" fill="none" stroke="#f4f0e7" strokeWidth="5" strokeLinecap="round"/>
          <g className="elephant-crown"><path d="M106 30 115 3l20 20L145 0l13 24 21-20 1 31h-74Z" fill="url(#elephantGold)" stroke="#111318" strokeWidth="4" strokeLinejoin="round"/><path d="M108 35h70v12h-70Z" fill="#d9a630" stroke="#111318" strokeWidth="4"/><circle cx="115" cy="4" r="4" fill="#ff4a36"/><circle cx="145" cy="2" r="4" fill="#ff4a36"/><circle cx="179" cy="4" r="4" fill="#ff4a36"/></g>
        </g>
        <path className="elephant-spark elephant-spark-one" d="m242 40 4 9 10 3-10 4-4 10-4-10-10-4 10-3 4-9Z" fill="#d9a630"/>
        <path className="elephant-spark elephant-spark-two" d="m44 30 3 7 8 3-8 3-3 8-3-8-8-3 8-3 3-7Z" fill="#ff4a36"/>
      </svg>
      <span>THE ROYAL GUARDIAN</span>
    </div>
  );
}
