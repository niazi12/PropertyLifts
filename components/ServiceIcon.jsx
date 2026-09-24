import {
  Accessibility,
  Building2,
  ClipboardCheck,
  PencilRuler,
  RefreshCw,
  Siren,
  Trash2,
  Wrench,
} from "lucide-react";

const icons = {
  Accessibility,
  Building2,
  ClipboardCheck,
  PencilRuler,
  RefreshCw,
  Siren,
  Trash2,
  Wrench,
};

export default function ServiceIcon({ name, className }) {
  const Icon = icons[name] ?? Wrench;
  return <Icon className={className} aria-hidden="true" />;
}
