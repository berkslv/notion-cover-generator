const renderError = (message, secondaryMessage = "") => {
  return `
      <svg width="576.5" height="120" viewBox="0 0  576.5 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
      .text { font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2F80ED }
      .small { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #252525 }
      .gray { fill: #858585 }
      </style>
      <rect x="0.5" y="0.5" width="576.5" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
      <text x="25" y="45" class="text">Something went wrong! please submit an issue at:</text>
      <text x="25" y="65" class="text">https://github.com/berkslv/notion-cover-generator</text>
      <text data-testid="message" x="25" y="75" class="text small">
        <tspan x="25" dy="18">${message}</tspan>
        <tspan x="25" dy="18" class="gray">${secondaryMessage}</tspan>
      </text>
      </svg>
    `;
};

module.exports = renderError;
