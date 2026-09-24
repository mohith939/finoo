import { ArrowRight, Building2, BriefcaseBusiness, BadgeCheck, CheckCircle2, Factory, FileText, FileSpreadsheet, LayoutGrid, Leaf, MonitorSmartphone, PackageCheck, Scale, ShieldCheck, ShipWheel, Sparkles, Truck, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../data/services'

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  sparkles: Sparkles,
  fileMoney: FileSpreadsheet,
  briefcase: BriefcaseBusiness,
  clipboard: FileText,
  monitor: MonitorSmartphone,
  ledger: LayoutGrid,
  badge: BadgeCheck,
  users: BriefcaseBusiness,
  award: BadgeCheck,
  factory: Factory,
  trademark: PackageCheck,
  shield: ShieldCheck,
  checkCircle: CheckCircle2,
  shieldCheck: ShieldCheck,
  leaf: Leaf,
  pepper: Truck,
  scale: Scale,
  ship: ShipWheel,
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Building2

  return (
    <Link
      to={`/services/${service.slug}`}
      className="service-card"
      aria-label={`View ${service.name}`}
      style={{
        ['--service-accent' as string]: service.accent,
        ['--service-soft' as string]: `${service.accent}22`,
      }}
    >
      <div className="service-card-inner">
        <div className="service-icon-wrap">
          <Icon className="service-icon" />
        </div>

        <div className="service-card-title-wrap">
          <h3>{service.name}</h3>
        </div>

        <div className="service-card-arrow" aria-hidden="true">
          <ArrowRight size={18} />
        </div>
      </div>
    </Link>
  )
}
