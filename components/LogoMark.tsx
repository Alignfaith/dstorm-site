interface LogoMarkProps {
  variant?: 'dark' | 'light'
  size?: number
}

export default function LogoMark({ variant = 'dark', size = 32 }: LogoMarkProps) {
  const spine = variant === 'light' ? '#FFFFFF' : '#0B1F3A'
  const outer = variant === 'light' ? '#FFFFFF' : '#0B1F3A'
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <line x1="9" y1="7" x2="9" y2="33" stroke={spine} strokeWidth="3" strokeLinecap="round" />
      <path
        d="M 9 7 C 31 7 35 13 35 20 C 35 27 31 33 9 33"
        stroke={outer}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 9 13 C 24 13 28 16 28 20 C 28 24 24 27 9 27"
        stroke="#0F9B8E"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="9" cy="20" r="2.5" fill="#0F9B8E" />
    </svg>
  )
}
