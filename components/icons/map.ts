import {
  Send,
  Package,
  PackagePlus,
  PackageCheck,
  Route,
  MapPin,
  Store,
  Bike,
  Truck,
  Wallet,
  Clock,
  SlidersHorizontal,
  Heart,
  Users,
  Building2,
  Warehouse,
  ShoppingCart,
  Zap,
  Recycle,
  Globe,
  Home,
  User,
  ShieldCheck,
  Gift,
  type LucideIcon,
} from "lucide-react";

/**
 * All icon keys used across constants/content.ts resolve through this map.
 * Content stays plain data (icon key strings) so it can be shared by server
 * and client components alike; only the rendering layer touches lucide-react.
 * Add new keys here (never inline emoji or a second icon library) when a
 * section needs one that isn't listed yet.
 */
export const ICON_MAP = {
  send: Send,
  package: Package,
  packagePlus: PackagePlus,
  packageCheck: PackageCheck,
  route: Route,
  mapPin: MapPin,
  store: Store,
  bike: Bike,
  truck: Truck,
  wallet: Wallet,
  clock: Clock,
  slidersHorizontal: SlidersHorizontal,
  heart: Heart,
  users: Users,
  building2: Building2,
  warehouse: Warehouse,
  shoppingCart: ShoppingCart,
  zap: Zap,
  recycle: Recycle,
  globe: Globe,
  home: Home,
  user: User,
  shieldCheck: ShieldCheck,
  gift: Gift,
} as const satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof ICON_MAP;

export function getIcon(key: IconKey): LucideIcon {
  return ICON_MAP[key];
}
