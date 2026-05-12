// Inline SVG diagrams for each service section.
// All diagrams: viewBox 480×300, navy strokes, teal accents, no shadows or gradients.

const N  = '#0B1F3A'               // navy
const T  = '#0F9B8E'               // teal
const TL = 'rgba(15,155,142,0.10)' // teal fill, subtle
const NL = 'rgba(11,31,58,0.05)'   // navy fill, subtle
const M  = '#6B7280'               // muted label text
const B  = '#E5E7EB'               // border

const BASE_SVG = {
  viewBox: '0 0 480 300',
  fill: 'none' as const,
  xmlns: 'http://www.w3.org/2000/svg',
  width: '100%',
  'aria-hidden': 'true' as const,
}

// ─── helpers ─────────────────────────────────────────────────────────────────

function Box({
  cx, cy, w = 110, h = 44, rx = 8,
  stroke = N, sw = 1.5, fillC = NL,
}: {
  cx: number; cy: number; w?: number; h?: number; rx?: number
  stroke?: string; sw?: number; fillC?: string
}) {
  return (
    <rect
      x={cx - w / 2} y={cy - h / 2}
      width={w} height={h} rx={rx}
      stroke={stroke} strokeWidth={sw} fill={fillC}
    />
  )
}

function Lbl({
  x, y, children, size = 10, weight = '600', fill = N, anchor = 'middle',
}: {
  x: number; y: number; children: string
  size?: number; weight?: string; fill?: string; anchor?: string
}) {
  return (
    <text
      x={x} y={y}
      textAnchor={anchor as 'middle' | 'start' | 'end'}
      fontSize={size} fontWeight={weight} fill={fill}
      fontFamily="system-ui, sans-serif"
    >
      {children}
    </text>
  )
}

// ─── 1. VoIP ──────────────────────────────────────────────────────────────────

export function VoipDiagram() {
  // Cloud PBX at center; four endpoint nodes at corners
  const cx = 240, cy = 138
  const cloud = { w: 160, h: 68 }
  const endpoints = [
    { x: 72,  y: 58,  label: 'Desk phone'    },
    { x: 408, y: 58,  label: 'Laptop'         },
    { x: 72,  y: 240, label: 'Mobile'          },
    { x: 408, y: 240, label: 'Remote worker'   },
  ]
  // Lines from cloud box corners to each endpoint
  const origins = [
    { x: cx - cloud.w / 2 + 10, y: cy - cloud.h / 2 + 8  },
    { x: cx + cloud.w / 2 - 10, y: cy - cloud.h / 2 + 8  },
    { x: cx - cloud.w / 2 + 10, y: cy + cloud.h / 2 - 8  },
    { x: cx + cloud.w / 2 - 10, y: cy + cloud.h / 2 - 8  },
  ]

  return (
    <svg {...BASE_SVG}>
      {/* Connection lines */}
      {endpoints.map((ep, i) => (
        <line
          key={ep.label}
          x1={origins[i].x} y1={origins[i].y}
          x2={ep.x}         y2={ep.y}
          stroke={N} strokeWidth="1.5"
        />
      ))}

      {/* Cloud PBX box */}
      <rect
        x={cx - cloud.w / 2} y={cy - cloud.h / 2}
        width={cloud.w} height={cloud.h} rx={22}
        stroke={T} strokeWidth="2" fill={TL}
      />
      <Lbl x={cx} y={cy - 6} fill={T} size={11}>Cloud PBX</Lbl>
      <Lbl x={cx} y={cy + 12} fill={M} size={9} weight="400">Hosted voice platform</Lbl>

      {/* Origin dots */}
      {origins.map((o, i) => (
        <circle key={i} cx={o.x} cy={o.y} r={3} fill={T} />
      ))}

      {/* Endpoint nodes */}
      {endpoints.map((ep) => (
        <g key={ep.label}>
          <Box cx={ep.x} cy={ep.y} w={96} h={36} rx={6} />
          <Lbl x={ep.x} y={ep.y + 4} size={9} weight="500">{ep.label}</Lbl>
        </g>
      ))}
    </svg>
  )
}

// ─── 2. Dedicated Internet ────────────────────────────────────────────────────

export function DedicatedInternetDiagram() {
  const buildingX = 55, buildingY = 70, bW = 100, bH = 160
  const cloudX = 350, cloudY = 150, cW = 120, cH = 70

  return (
    <svg {...BASE_SVG}>
      {/* Building */}
      <rect x={buildingX} y={buildingY} width={bW} height={bH} rx={4} stroke={N} strokeWidth="1.5" fill={NL} />
      {/* Windows grid */}
      {[0, 1, 2].map(row =>
        [0, 1].map(col => (
          <rect
            key={`${row}-${col}`}
            x={buildingX + 16 + col * 36} y={buildingY + 18 + row * 38}
            width={22} height={18} rx={2}
            stroke={N} strokeWidth="1" fill="rgba(15,155,142,0.12)"
          />
        ))
      )}
      {/* Door */}
      <rect x={buildingX + 36} y={buildingY + bH - 36} width={28} height={36} rx={2} stroke={N} strokeWidth="1.5" fill={NL} />
      <Lbl x={buildingX + bW / 2} y={buildingY + bH + 16} fill={M} size={9} weight="400">Your business</Lbl>

      {/* Dedicated fiber line */}
      <line
        x1={buildingX + bW} y1={150}
        x2={cloudX - cW / 2} y2={150}
        stroke={T} strokeWidth="3" strokeLinecap="round"
      />

      {/* 100% capacity gauge above the line */}
      <rect x={195} y={118} width={90} height={18} rx={4} stroke={B} strokeWidth="1" fill="white" />
      <rect x={196} y={119} width={88} height={16} rx={3} stroke="none" fill="rgba(15,155,142,0.15)" />
      <rect x={196} y={119} width={88} height={16} rx={3} stroke="none" fill={TL} />
      {/* Full fill bar */}
      <rect x={197} y={120} width={86} height={14} rx={2} stroke="none" fill="rgba(15,155,142,0.35)" />
      <Lbl x={240} y={129} fill={T} size={8.5}>100% dedicated capacity</Lbl>
      {/* Label below line */}
      <Lbl x={240} y={168} fill={M} size={9} weight="400">Dedicated circuit</Lbl>

      {/* Internet cloud */}
      <rect
        x={cloudX - cW / 2} y={cloudY - cH / 2}
        width={cW} height={cH} rx={24}
        stroke={N} strokeWidth="1.5" fill={NL}
      />
      <Lbl x={cloudX} y={cloudY - 5} size={10}>Internet</Lbl>
      <Lbl x={cloudX} y={cloudY + 12} fill={M} size={8.5} weight="400">Cloud / WAN</Lbl>

      {/* SLA badge */}
      <rect x={buildingX + bW + 10} y={200} width={80} height={26} rx={4} stroke={T} strokeWidth="1" fill={TL} />
      <Lbl x={buildingX + bW + 50} y={211} fill={T} size={8.5}>SLA-backed</Lbl>
      <Lbl x={buildingX + bW + 50} y={221} fill={T} size={7.5} weight="400">uptime guarantee</Lbl>
    </svg>
  )
}

// ─── 3. Shared Internet ───────────────────────────────────────────────────────

export function SharedInternetDiagram() {
  const buildingX = 30, buildingY = 100, bW = 85, bH = 100
  const ispCx = 240, ispCy = 150
  const cloudCx = 390, cloudCy = 150

  const otherUsers = [
    { x: ispCx, y: 48,  label: 'Other user 1' },
    { x: ispCx, y: 252, label: 'Other user 2' },
  ]

  return (
    <svg {...BASE_SVG}>
      {/* Building */}
      <rect x={buildingX} y={buildingY} width={bW} height={bH} rx={4} stroke={N} strokeWidth="1.5" fill={NL} />
      {[0, 1].map(row =>
        [0, 1].map(col => (
          <rect
            key={`${row}-${col}`}
            x={buildingX + 10 + col * 28} y={buildingY + 14 + row * 30}
            width={18} height={14} rx={2}
            stroke={N} strokeWidth="1" fill="rgba(15,155,142,0.12)"
          />
        ))
      )}
      <Lbl x={buildingX + bW / 2} y={buildingY + bH + 16} fill={M} size={9} weight="400">Your business</Lbl>

      {/* Business → ISP line (thick shared pipe) */}
      <line x1={buildingX + bW} y1={ispCy} x2={ispCx - 22} y2={ispCy} stroke={N} strokeWidth="2.5" />
      <Lbl x={160} y={139} fill={M} size={8.5} weight="400">Shared pipe</Lbl>

      {/* ISP node */}
      <circle cx={ispCx} cy={ispCy} r={22} stroke={N} strokeWidth="1.5" fill={NL} />
      <Lbl x={ispCx} y={ispCy - 3} size={9}>ISP</Lbl>
      <Lbl x={ispCx} y={ispCy + 10} fill={M} size={7.5} weight="400">shared node</Lbl>

      {/* ISP → Internet line */}
      <line x1={ispCx + 22} y1={ispCy} x2={cloudCx - 50} y2={ispCy} stroke={T} strokeWidth="2" />
      <Lbl x={315} y={140} fill={M} size={8.5} weight="400">Upstream</Lbl>

      {/* Other users connected to ISP */}
      {otherUsers.map((u) => (
        <g key={u.label}>
          <line x1={ispCx} y1={u.y > ispCy ? ispCy + 22 : ispCy - 22} x2={u.x} y2={u.y + (u.y > ispCy ? -16 : 16)} stroke={N} strokeWidth="1.5" strokeDasharray="4 3" />
          <Box cx={u.x} cy={u.y} w={90} h={30} rx={5} />
          <Lbl x={u.x} y={u.y + 4} size={8.5} weight="400">{u.label}</Lbl>
        </g>
      ))}

      {/* Contention label */}
      <rect x={168} y={158} width={144} height={20} rx={4} stroke="none" fill="rgba(239,68,68,0.07)" />
      <Lbl x={240} y={171} fill="#DC2626" size={8.5} weight="500">Contended bandwidth</Lbl>

      {/* Internet cloud */}
      <rect x={cloudCx - 50} y={cloudCy - 35} width={100} height={70} rx={22} stroke={N} strokeWidth="1.5" fill={NL} />
      <Lbl x={cloudCx} y={cloudCy + 4} size={10}>Internet</Lbl>
    </svg>
  )
}

// ─── 4. SD-WAN ────────────────────────────────────────────────────────────────

export function SdWanDiagram() {
  const cx = 240, cy = 150, bW = 120, bH = 58

  const branches = [
    { x: 240, y: 40,  label: 'HQ'       },
    { x: 68,  y: 150, label: 'Branch 1'  },
    { x: 412, y: 150, label: 'Branch 2'  },
    { x: 240, y: 260, label: 'Branch 3'  },
  ]

  // Backup path pairs (between non-adjacent branches, bypassing orchestrator)
  const backups = [
    [0, 1], // HQ ↔ Branch 1
    [2, 3], // Branch 2 ↔ Branch 3
  ]

  // Primary line endpoints (from orchestrator box edge to branch box edge)
  function edgePt(branch: { x: number; y: number }) {
    const dx = branch.x - cx, dy = branch.y - cy
    const ang = Math.atan2(dy, dx)
    return {
      x: cx + Math.cos(ang) * (bW / 2 + 2),
      y: cy + Math.sin(ang) * (bH / 2 + 2),
    }
  }

  return (
    <svg {...BASE_SVG}>
      {/* Backup dashed paths (drawn first so primary lines render on top) */}
      {backups.map(([a, b], i) => (
        <line
          key={i}
          x1={branches[a].x} y1={branches[a].y}
          x2={branches[b].x} y2={branches[b].y}
          stroke={N} strokeWidth="1.25" strokeDasharray="5 4" opacity="0.4"
        />
      ))}

      {/* Primary connections */}
      {branches.map((br) => {
        const ep = edgePt(br)
        return (
          <line
            key={br.label}
            x1={ep.x} y1={ep.y}
            x2={br.x} y2={br.y}
            stroke={N} strokeWidth="2"
          />
        )
      })}

      {/* Central SD-WAN orchestrator */}
      <rect
        x={cx - bW / 2} y={cy - bH / 2}
        width={bW} height={bH} rx={8}
        stroke={T} strokeWidth="2" fill={TL}
      />
      <Lbl x={cx} y={cy - 6} fill={T} size={11}>SD-WAN</Lbl>
      <Lbl x={cx} y={cy + 11} fill={M} size={8.5} weight="400">Orchestrator</Lbl>

      {/* Branch nodes */}
      {branches.map((br) => (
        <g key={br.label}>
          <Box cx={br.x} cy={br.y} w={90} h={36} rx={6} />
          <Lbl x={br.x} y={br.y + 4} size={9} weight="500">{br.label}</Lbl>
        </g>
      ))}

      {/* Legend */}
      <line x1={28} y1={278} x2={52} y2={278} stroke={N} strokeWidth="2" />
      <Lbl x={86} y={282} fill={M} size={8.5} weight="400" anchor="start">Primary path</Lbl>
      <line x1={160} y1={278} x2={184} y2={278} stroke={N} strokeWidth="1.25" strokeDasharray="5 4" opacity="0.5" />
      <Lbl x={218} y={282} fill={M} size={8.5} weight="400" anchor="start">Backup path</Lbl>
    </svg>
  )
}

// ─── 5. Network Security ──────────────────────────────────────────────────────

export function SecurityDiagram() {
  const cx = 210, cy = 152

  const layers = [
    { r: 42,  label: 'Identity',  angle: -35 },
    { r: 72,  label: 'Endpoint',  angle: -35 },
    { r: 102, label: 'Network',   angle: -35 },
    { r: 132, label: 'Perimeter', angle: -35 },
  ]

  // Label positions at upper-right of each ring, fanning outward
  const labelPositions = [
    { lx: 292, ly: 108 },
    { lx: 322, ly:  88 },
    { lx: 352, ly:  68 },
    { lx: 381, ly:  48 },
  ]

  return (
    <svg {...BASE_SVG}>
      {/* Defense rings — outermost first so inner layers draw over */}
      {[...layers].reverse().map((layer, ri) => {
        const i = layers.length - 1 - ri
        return (
          <circle
            key={layer.label}
            cx={cx} cy={cy} r={layer.r}
            stroke={N} strokeWidth={1.25 + i * 0.15}
            fill={i === 0 ? 'rgba(11,31,58,0.03)' : 'none'}
            strokeDasharray={i === layers.length - 1 ? '0' : '0'}
            opacity={0.55 + i * 0.12}
          />
        )
      })}

      {/* Tick marks and labels */}
      {layers.map((layer, i) => {
        const rad = -35 * (Math.PI / 180)
        const tx = cx + layer.r * Math.cos(rad)
        const ty = cy + layer.r * Math.sin(rad)
        const { lx, ly } = labelPositions[i]
        return (
          <g key={layer.label}>
            <line x1={tx} y1={ty} x2={lx - 4} y2={ly} stroke={N} strokeWidth="1" opacity="0.4" />
            <circle cx={tx} cy={ty} r={2.5} fill={N} opacity="0.5" />
            <Lbl x={lx + 2} y={ly + 4} size={9} weight="500" anchor="start">{layer.label}</Lbl>
          </g>
        )
      })}

      {/* Center data node */}
      <circle cx={cx} cy={cy} r={26} fill={TL} stroke={T} strokeWidth="2" />
      <Lbl x={cx} y={cy - 3} fill={T} size={10}>Data</Lbl>
      <Lbl x={cx} y={cy + 12} fill={M} size={8} weight="400">assets</Lbl>

      {/* Side label block */}
      <rect x={335} y={152} width={132} height={108} rx={6} stroke={B} strokeWidth="1" fill="white" opacity="0.9" />
      <Lbl x={401} y={170} fill={M} size={8.5} weight="600">Defense in depth</Lbl>
      {['Zero-trust access', 'Endpoint detection', 'Firewall / IDS', 'SASE perimeter'].map((item, i) => (
        <g key={item}>
          <circle cx={348} cy={185 + i * 19} r={3} fill={T} />
          <Lbl x={356} y={189 + i * 19} fill={N} size={8.5} weight="400" anchor="start">{item}</Lbl>
        </g>
      ))}
    </svg>
  )
}

// ─── 6. Carrier and Vendor Management ────────────────────────────────────────

export function CarrierManagementDiagram() {
  const cx = 240, cy = 150, r = 105

  const carriers = [
    { label: 'AT&T',             angle:   0 },
    { label: 'Verizon',          angle:  45 },
    { label: 'Lumen',            angle:  90 },
    { label: 'Comcast Business', angle: 135 },
    { label: 'Spectrum Business',angle: 180 },
    { label: 'RingCentral',      angle: 225 },
    { label: 'Cisco Meraki',     angle: 270 },
    { label: 'Fortinet',         angle: 315 },
  ]

  return (
    <svg {...BASE_SVG}>
      {/* Spokes */}
      {carriers.map(({ label, angle }) => {
        const rad = (angle - 90) * (Math.PI / 180)
        const nx = cx + r * Math.cos(rad)
        const ny = cy + r * Math.sin(rad)
        return (
          <line
            key={label}
            x1={cx} y1={cy}
            x2={nx} y2={ny}
            stroke={N} strokeWidth="1.5" opacity="0.5"
          />
        )
      })}

      {/* Carrier nodes */}
      {carriers.map(({ label, angle }) => {
        const rad = (angle - 90) * (Math.PI / 180)
        const nx = cx + r * Math.cos(rad)
        const ny = cy + r * Math.sin(rad)
        // Text offset so label doesn't overlap node
        const lx = cx + (r + 22) * Math.cos(rad)
        const ly = cy + (r + 22) * Math.sin(rad)
        const anchor =
          lx < cx - 10 ? 'end' :
          lx > cx + 10 ? 'start' : 'middle'
        return (
          <g key={label}>
            <circle cx={nx} cy={ny} r={5} fill={N} />
            <text
              x={lx} y={ly + 4}
              textAnchor={anchor}
              fontSize={8.5} fontWeight="500" fill={N}
              fontFamily="system-ui, sans-serif"
            >
              {label}
            </text>
          </g>
        )
      })}

      {/* Center hub */}
      <circle cx={cx} cy={cy} r={38} fill={TL} stroke={T} strokeWidth="2" />
      <Lbl x={cx} y={cy - 5} fill={T} size={11}>DStorm</Lbl>
      <Lbl x={cx} y={cy + 12} fill={M} size={8.5} weight="400">Your single partner</Lbl>
    </svg>
  )
}

// ─── 7. Telecom Expense Management ────────────────────────────────────────────

export function TemDiagram() {
  const iW = 152, iH = 232, iRx = 6
  // Before invoice: left-centered
  const bX = 30, bY = 34
  // After invoice: right-centered
  const aX = 298, aY = 34

  const beforeItems = [
    { y: 90,  w: 100, label: 'Voice lines'     },
    { y: 112, w:  88, label: 'Data circuits'    },
    { y: 134, w:  76, label: 'Unused lines'     },
    { y: 156, w:  64, label: 'Legacy services'  },
    { y: 178, w:  92, label: 'Mobile fleet'     },
    { y: 200, w:  70, label: 'Misc charges'     },
  ]

  const afterItems = [
    { y: 90,  w: 100, label: 'Voice lines'    },
    { y: 112, w:  72, label: 'Data circuits'   },
    { y: 134, w:  60, label: 'Mobile fleet'    },
  ]

  const eliminated = [156, 178, 200] // y positions of crossed-out items

  return (
    <svg {...BASE_SVG}>
      {/* ── Before invoice ── */}
      <rect x={bX} y={bY} width={iW} height={iH} rx={iRx} stroke={N} strokeWidth="1.5" fill="white" />
      {/* Header band */}
      <rect x={bX} y={bY} width={iW} height={30} rx={iRx} stroke="none" fill={NL} />
      <rect x={bX} y={bY + 20} width={iW} height={10} stroke="none" fill={NL} />
      <Lbl x={bX + iW / 2} y={bY + 19} fill={N} size={9}>INVOICE — BEFORE</Lbl>
      {/* Line items */}
      {beforeItems.map(({ y, w, label }) => (
        <g key={label}>
          <line x1={bX + 12} y1={y} x2={bX + 12 + w} y2={y} stroke={N} strokeWidth="1.25" opacity="0.35" />
          <Lbl x={bX + 14} y={y - 3} fill={M} size={7.5} weight="400" anchor="start">{label}</Lbl>
        </g>
      ))}
      {/* Total */}
      <line x1={bX + 10} y1={218} x2={bX + iW - 10} y2={218} stroke={N} strokeWidth="1" opacity="0.3" />
      <Lbl x={bX + 14}       y={232} fill={N} size={9} weight="600" anchor="start">Total</Lbl>
      <Lbl x={bX + iW - 14}  y={232} fill={N} size={9} weight="600" anchor="end">$8,420 /mo</Lbl>

      {/* ── Audit middle ── */}
      {/* Magnifier */}
      <circle cx={240} cy={88} r={16} stroke={N} strokeWidth="1.5" fill="none" />
      <line x1={251} y1={99} x2={261} y2={110} stroke={N} strokeWidth="2" strokeLinecap="round" />
      {/* Search cross inside */}
      <line x1={234} y1={88} x2={246} y2={88} stroke={T} strokeWidth="1.25" />
      <line x1={240} y1={82} x2={240} y2={94} stroke={T} strokeWidth="1.25" />

      {/* Down arrow (savings) */}
      <line x1={240} y1={128} x2={240} y2={168} stroke={T} strokeWidth="2" strokeLinecap="round" />
      <polyline points="232,160 240,172 248,160" stroke={T} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
      <Lbl x={240} y={190} fill={T} size={8.5}>Savings</Lbl>
      <Lbl x={240} y={203} fill={T} size={10} weight="700">27%</Lbl>

      {/* Checkmark */}
      <circle cx={240} cy={234} r={14} stroke={T} strokeWidth="1.5" fill={TL} />
      <polyline points="233,234 238,240 248,227" stroke={T} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="none" />

      {/* ── After invoice ── */}
      <rect x={aX} y={aY} width={iW} height={iH} rx={iRx} stroke={T} strokeWidth="1.75" fill="white" />
      {/* Header band */}
      <rect x={aX} y={aY} width={iW} height={30} rx={iRx} stroke="none" fill={TL} />
      <rect x={aX} y={aY + 20} width={iW} height={10} stroke="none" fill={TL} />
      <Lbl x={aX + iW / 2} y={aY + 19} fill={T} size={9}>INVOICE — AFTER</Lbl>
      {/* Remaining line items */}
      {afterItems.map(({ y, w, label }) => (
        <g key={label}>
          <line x1={aX + 12} y1={y} x2={aX + 12 + w} y2={y} stroke={N} strokeWidth="1.25" opacity="0.35" />
          <Lbl x={aX + 14} y={y - 3} fill={M} size={7.5} weight="400" anchor="start">{label}</Lbl>
        </g>
      ))}
      {/* Eliminated items (strikethrough) */}
      {eliminated.map((y) => (
        <g key={y}>
          <line x1={aX + 12} y1={y} x2={aX + 100} y2={y} stroke={M} strokeWidth="1.25" opacity="0.2" />
          <line x1={aX + 12} y1={y} x2={aX + 100} y2={y} stroke="#DC2626" strokeWidth="1" opacity="0.5" strokeDasharray="3 2" />
        </g>
      ))}
      {/* Total */}
      <line x1={aX + 10} y1={218} x2={aX + iW - 10} y2={218} stroke={T} strokeWidth="1" opacity="0.4" />
      <Lbl x={aX + 14}       y={232} fill={T} size={9} weight="600" anchor="start">Total</Lbl>
      <Lbl x={aX + iW - 14}  y={232} fill={T} size={9} weight="600" anchor="end">$6,140 /mo</Lbl>
    </svg>
  )
}
