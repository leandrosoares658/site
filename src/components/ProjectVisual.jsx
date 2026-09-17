// Ilustrações em SVG para cada projeto. São provisórias: troque por prints ou GIFs reais.

function Clinical() {
  const rows = [
    ['Sinais vitais estáveis', 118],
    ['Exames laboratoriais', 86],
    ['Evolução nas anotações', 64],
    ['Uso de oxigênio', -52],
    ['Tempo de internação', -30],
  ];
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Ilustração de fatores que explicam uma indicação de alta">
      <rect x="28" y="28" width="344" height="244" rx="18" fill="#1e1846" stroke="rgba(205,190,255,.14)" />
      <text x="52" y="64" fill="#ece9f8" fontSize="15" fontWeight="600">Leito 12</text>
      <text x="52" y="84" fill="#a39ec3" fontSize="11">O que pesa na indicação</text>
      <rect x="262" y="50" width="90" height="26" rx="13" fill="rgba(231,198,107,.16)" />
      <text x="307" y="67" fill="#e7c66b" fontSize="11" textAnchor="middle" fontWeight="600">Avaliar alta</text>
      <line x1="240" y1="102" x2="240" y2="252" stroke="rgba(205,190,255,.25)" />
      {rows.map(([label, v], i) => {
        const y = 110 + i * 29;
        const w = Math.abs(v) * 0.9;
        return (
          <g key={label}>
            <text x="52" y={y + 13} fill="#a39ec3" fontSize="11">{label}</text>
            <rect x={v > 0 ? 240 : 240 - w} y={y} width={w} height="16" rx="4" fill={v > 0 ? '#7c5cff' : '#4a4178'} />
          </g>
        );
      })}
    </svg>
  );
}

function Marketplace() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Ilustração de um app de contratação de faxina com pagamento PIX">
      <rect x="138" y="18" width="124" height="264" rx="22" fill="#1e1846" stroke="rgba(205,190,255,.22)" />
      <rect x="178" y="28" width="44" height="6" rx="3" fill="rgba(205,190,255,.2)" />
      <path d="M156 56 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4z" fill="#e7c66b" />
      <text x="180" y="66" fill="#ece9f8" fontSize="12" fontWeight="600">Perto de você</text>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(150 ${88 + i * 52})`}>
          <rect width="100" height="42" rx="10" fill={i === 0 ? 'rgba(124,92,255,.28)' : 'rgba(205,190,255,.07)'} />
          <circle cx="20" cy="21" r="11" fill={i === 0 ? '#9a84ff' : '#4a4178'} />
          <rect x="38" y="13" width="48" height="6" rx="3" fill="rgba(236,233,248,.6)" />
          <rect x="38" y="25" width="30" height="5" rx="2.5" fill="rgba(163,158,195,.5)" />
        </g>
      ))}
      <rect x="150" y="246" width="100" height="24" rx="12" fill="#7c5cff" />
      <text x="200" y="262" fill="#fff" fontSize="11" textAnchor="middle" fontWeight="600">Pagar com PIX</text>
      <rect x="40" y="110" width="80" height="54" rx="12" fill="#1e1846" stroke="rgba(205,190,255,.14)" />
      <text x="54" y="132" fill="#a39ec3" fontSize="10">Cliente</text>
      <text x="54" y="150" fill="#ece9f8" fontSize="12" fontWeight="600">Contrata</text>
      <rect x="280" y="150" width="84" height="54" rx="12" fill="#1e1846" stroke="rgba(205,190,255,.14)" />
      <text x="294" y="172" fill="#a39ec3" fontSize="10">Profissional</text>
      <text x="294" y="190" fill="#ece9f8" fontSize="12" fontWeight="600">Atende</text>
    </svg>
  );
}

function Vibration() {
  let d = '';
  for (let x = 0; x <= 320; x += 2) {
    const spike = x > 214 && x < 246 ? Math.sin((x - 214) * 0.9) * 42 : 0;
    const y = 150 + Math.sin(x * 0.19) * 14 + Math.sin(x * 0.53) * 7 + spike;
    d += `${x === 0 ? 'M' : 'L'}${40 + x} ${y.toFixed(1)} `;
  }
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Ilustração de sinal de vibração com alerta de falha em rolamento">
      <rect x="28" y="28" width="344" height="244" rx="18" fill="#1e1846" stroke="rgba(205,190,255,.14)" />
      <text x="52" y="64" fill="#ece9f8" fontSize="15" fontWeight="600">Motor M-04</text>
      <text x="52" y="84" fill="#a39ec3" fontSize="11">Aceleração da vibração</text>
      <line x1="40" y1="104" x2="360" y2="104" stroke="#e7c66b" strokeDasharray="4 5" opacity=".7" />
      <text x="356" y="98" fill="#e7c66b" fontSize="10" textAnchor="end">Limite</text>
      <path d={d} fill="none" stroke="#9a84ff" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="238" cy="108" r="14" fill="none" stroke="#e7c66b" strokeWidth="1.5" />
      <rect x="192" y="214" width="144" height="34" rx="10" fill="rgba(231,198,107,.14)" />
      <text x="264" y="236" fill="#e7c66b" fontSize="11" textAnchor="middle" fontWeight="600">Alerta: rolamento</text>
    </svg>
  );
}

function Finance() {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
  const inc = [120, 128, 124, 134, 138, 142];
  const out = [96, 110, 92, 104, 88, 94];
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Ilustração de gráfico de entradas e saídas por mês">
      <rect x="28" y="28" width="344" height="244" rx="18" fill="#1e1846" stroke="rgba(205,190,255,.14)" />
      <text x="52" y="64" fill="#ece9f8" fontSize="15" fontWeight="600">Visão do semestre</text>
      <circle cx="56" cy="82" r="4" fill="#7c5cff" />
      <text x="66" y="86" fill="#a39ec3" fontSize="11">Entradas</text>
      <circle cx="130" cy="82" r="4" fill="#4a4178" />
      <text x="140" y="86" fill="#a39ec3" fontSize="11">Saídas</text>
      {months.map((m, i) => {
        const x = 62 + i * 50;
        return (
          <g key={m}>
            <rect x={x} y={236 - inc[i]} width="16" height={inc[i]} rx="4" fill="#7c5cff" />
            <rect x={x + 19} y={236 - out[i]} width="16" height={out[i]} rx="4" fill="#4a4178" />
            <text x={x + 17} y="256" fill="#a39ec3" fontSize="10" textAnchor="middle">{m}</text>
          </g>
        );
      })}
    </svg>
  );
}

const visuals = { clinical: Clinical, marketplace: Marketplace, vibration: Vibration, finance: Finance };

export default function ProjectVisual({ type }) {
  const Visual = visuals[type];
  return Visual ? <Visual /> : null;
}
