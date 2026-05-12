export default function HeroPulse() {
  return (
    <div
      className="relative w-full max-w-sm mx-auto"
      style={{ aspectRatio: '1 / 1' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Concentric pulse rings — outermost first */}
        <circle cx="100" cy="100" r="88" stroke="#0F9B8E" strokeWidth="1" className="pulse-ring" style={{ animationDelay: '0s' }} />
        <circle cx="100" cy="100" r="70" stroke="#0F9B8E" strokeWidth="1" className="pulse-ring" style={{ animationDelay: '0.4s' }} />
        <circle cx="100" cy="100" r="52" stroke="#0F9B8E" strokeWidth="1.2" className="pulse-ring" style={{ animationDelay: '0.8s' }} />
        <circle cx="100" cy="100" r="34" stroke="#0F9B8E" strokeWidth="1.5" className="pulse-ring" style={{ animationDelay: '1.2s' }} />

        {/* Spoke lines to satellite nodes */}
        <line x1="100" y1="100" x2="148" y2="62" stroke="#0F9B8E" strokeWidth="1" opacity="0.35" />
        <line x1="100" y1="100" x2="52" y2="62" stroke="#0F9B8E" strokeWidth="1" opacity="0.35" />
        <line x1="100" y1="100" x2="152" y2="138" stroke="#0F9B8E" strokeWidth="1" opacity="0.35" />
        <line x1="100" y1="100" x2="52" y2="140" stroke="#0F9B8E" strokeWidth="1" opacity="0.35" />
        <line x1="100" y1="100" x2="100" y2="32" stroke="#0F9B8E" strokeWidth="1" opacity="0.25" />

        {/* Satellite nodes */}
        <circle cx="148" cy="62" r="5" fill="#0F9B8E" opacity="0.6" />
        <circle cx="52" cy="62" r="4" fill="#0F9B8E" opacity="0.5" />
        <circle cx="152" cy="138" r="5" fill="#0F9B8E" opacity="0.6" />
        <circle cx="52" cy="140" r="3.5" fill="#0F9B8E" opacity="0.45" />
        <circle cx="100" cy="32" r="3" fill="#0F9B8E" opacity="0.4" />

        {/* Center node */}
        <circle cx="100" cy="100" r="9" fill="#0F9B8E" opacity="0.95" />
        <circle cx="100" cy="100" r="5" fill="#FFFFFF" opacity="0.9" />
      </svg>
    </div>
  )
}
