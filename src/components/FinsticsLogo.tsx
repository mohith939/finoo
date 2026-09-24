type FinsticsLogoProps = {
  className?: string
}

export function FinsticsLogo({ className = '' }: FinsticsLogoProps) {
  return (
    <img
      src="/finstics logo.png"
      alt="Finstics"
      className={`brand-logo ${className}`.trim()}
      loading="eager"
    />
  )
}
