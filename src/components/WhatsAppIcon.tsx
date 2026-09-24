import { FaWhatsapp } from 'react-icons/fa'

type WhatsAppIconProps = {
  size?: number
  className?: string
  style?: React.CSSProperties
}

export function WhatsAppIcon({ size = 20, className, style }: WhatsAppIconProps) {
  return <FaWhatsapp size={size} className={className} style={style} aria-hidden="true" />
}
