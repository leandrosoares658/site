// Ilustrações em SVG para cada frente de serviço, na mesma linguagem visual do ProjectVisual.jsx.

function WebApps() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Ilustração de um app web com navegação, cartões de conteúdo e um formulário">
      <rect x="28" y="28" width="344" height="244" rx="18" fill="#1e1846" stroke="rgba(205,190,255,.14)" />
      <rect x="28" y="28" width="344" height="40" rx="18" fill="rgba(205,190,255,.06)" />
      <circle cx="50" cy="48" r="4" fill="#e46a6a" />
      <circle cx="64" cy="48" r="4" fill="#e7c66b" />
      <circle cx="78" cy="48" r="4" fill="#6bd48f" />
      <rect x="280" y="40" width="70" height="16" rx="8" fill="#7c5cff" />
      <rect x="52" y="84" width="150" height="14" rx="4" fill="rgba(236,233,248,.85)" />
      <rect x="52" y="106" width="200" height="9" rx="4" fill="rgba(163,158,195,.55)" />
      <rect x="52" y="122" width="170" height="9" rx="4" fill="rgba(163,158,195,.4)" />
      {[0, 1].map((i) => (
        <g key={i} transform={`translate(${52 + i * 165} 150)`}>
          <rect width="150" height="98" rx="12" fill="rgba(205,190,255,.07)" />
          <rect x="16" y="18" width="60" height="8" rx="4" fill="rgba(236,233,248,.7)" />
          <rect x="16" y="34" width="100" height="6" rx="3" fill="rgba(163,158,195,.45)" />
          <rect x="16" y="46" width="80" height="6" rx="3" fill="rgba(163,158,195,.35)" />
          <rect x="16" y="70" width="52" height="18" rx="9" fill={i === 0 ? '#7c5cff' : 'rgba(205,190,255,.14)'} />
        </g>
      ))}
    </svg>
  );
}

function AiData() {
  const nodes = [
    [70, 150], [130, 100], [130, 200], [210, 70], [210, 150], [210, 230],
  ];
  const edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5]];
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Ilustração de um grafo de dados alimentando uma resposta explicada">
      <rect x="28" y="28" width="344" height="244" rx="18" fill="#1e1846" stroke="rgba(205,190,255,.14)" />
      <text x="52" y="64" fill="#ece9f8" fontSize="15" fontWeight="600">Extração de documentos</text>
      <text x="52" y="84" fill="#a39ec3" fontSize="11">Modelo + regras de negócio</text>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="rgba(205,190,255,.28)"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 4 ? 7 : 5} fill={i === 4 ? '#9a84ff' : '#4a4178'} />
      ))}
      <rect x="250" y="118" width="108" height="64" rx="12" fill="rgba(231,198,107,.12)" />
      <text x="264" y="140" fill="#e7c66b" fontSize="10" fontWeight="600">Resposta</text>
      <text x="264" y="156" fill="#ece9f8" fontSize="10">92% de confiança</text>
      <text x="264" y="170" fill="#a39ec3" fontSize="9">3 fontes citadas</text>
    </svg>
  );
}

function Industry() {
  const angle = -120 + 210 * 0.78;
  const rad = (angle * Math.PI) / 180;
  const cx = 130, cy = 165, r = 62;
  const nx = cx + Math.cos(rad) * r;
  const ny = cy + Math.sin(rad) * r;
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Ilustração de um painel de indicadores de produção com OEE e status de linha">
      <rect x="28" y="28" width="344" height="244" rx="18" fill="#1e1846" stroke="rgba(205,190,255,.14)" />
      <text x="52" y="64" fill="#ece9f8" fontSize="15" fontWeight="600">Linha 3</text>
      <text x="52" y="84" fill="#a39ec3" fontSize="11">OEE em tempo real</text>
      <path d="M78 165 A52 52 0 1 1 182 165" fill="none" stroke="rgba(205,190,255,.16)" strokeWidth="10" strokeLinecap="round" />
      <path
        d="M78 165 A52 52 0 1 1 182 165"
        fill="none"
        stroke="#7c5cff"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="205"
        strokeDashoffset={205 - 205 * 0.78}
      />
      <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#e7c66b" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="4" fill="#e7c66b" />
      <text x={cx} y={cy + 34} fill="#ece9f8" fontSize="20" fontWeight="700" textAnchor="middle">93%</text>
      <rect x="222" y="112" width="128" height="30" rx="8" fill="rgba(107,212,143,.14)" />
      <text x="236" y="132" fill="#6bd48f" fontSize="11" fontWeight="600">CLP conectado</text>
      <rect x="222" y="150" width="128" height="30" rx="8" fill="rgba(205,190,255,.08)" />
      <text x="236" y="170" fill="#cdbeff" fontSize="11" fontWeight="600">SCADA sincronizado</text>
      <rect x="222" y="188" width="128" height="30" rx="8" fill="rgba(231,198,107,.12)" />
      <text x="236" y="208" fill="#e7c66b" fontSize="11" fontWeight="600">Validação GAMP 5</text>
    </svg>
  );
}

const visuals = { web: WebApps, ai: AiData, industry: Industry };

export default function ServiceVisual({ type }) {
  const Visual = visuals[type];
  return Visual ? <Visual /> : null;
}
