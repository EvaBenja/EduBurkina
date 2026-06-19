import type { ReactElement } from "react";

interface IconProps {
  size?: number;
  color?: string;
}

export function MathsIcon({ size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="40" height="40" rx="12" fill={color} opacity="0.14" />
      <path d="M14 17h12M20 11v12" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M14 31h12" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M30 13l8 8M38 13l-8 8" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="34" cy="32" r="2.6" fill={color} />
      <circle cx="34" cy="38" r="2.6" fill={color} />
    </svg>
  );
}

export function FrancaisIcon({ size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="40" height="40" rx="12" fill={color} opacity="0.14" />
      <path d="M14 13h16a4 4 0 0 1 4 4v17l-6-4H14a4 4 0 0 1-4-4V17a4 4 0 0 1 4-4Z" stroke={color} strokeWidth="3" strokeLinejoin="round" />
      <path d="M15 21h14M15 27h9" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function SciencesIcon({ size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="40" height="40" rx="12" fill={color} opacity="0.14" />
      <path d="M19 9h10M21 9v11l-8 14a4 4 0 0 0 3.4 6h15.2a4 4 0 0 0 3.4-6l-8-14V9" stroke={color} strokeWidth="3" strokeLinejoin="round" />
      <path d="M17 30h14" stroke={color} strokeWidth="2.6" />
      <circle cx="22" cy="24" r="1.6" fill={color} />
      <circle cx="27" cy="26" r="1.6" fill={color} />
    </svg>
  );
}

export function PhysiqueIcon({ size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="40" height="40" rx="12" fill={color} opacity="0.14" />
      <circle cx="24" cy="24" r="3.4" fill={color} />
      <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke={color} strokeWidth="2.6" />
      <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke={color} strokeWidth="2.6" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke={color} strokeWidth="2.6" transform="rotate(120 24 24)" />
    </svg>
  );
}

export function HistoireIcon({ size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="40" height="40" rx="12" fill={color} opacity="0.14" />
      <path d="M24 12c-6 0-11 4.7-11 11s5 13 11 13 11-6 11-13" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M24 12v6M13 23h6M35 23h-2" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="23" r="2" fill={color} />
    </svg>
  );
}

export function AnglaisIcon({ size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="40" height="40" rx="12" fill={color} opacity="0.14" />
      <ellipse cx="24" cy="24" rx="13" ry="13" stroke={color} strokeWidth="3" />
      <path d="M11 24h26M24 11c4 4 4 18 0 26M24 11c-4 4-4 18 0 26" stroke={color} strokeWidth="2.4" />
    </svg>
  );
}

const subjectMap: Record<string, (p: IconProps) => ReactElement> = {
  maths: MathsIcon,
  francais: FrancaisIcon,
  sciences: SciencesIcon,
  physique: PhysiqueIcon,
  histoire: HistoireIcon,
  anglais: AnglaisIcon,
};

export function SubjectIcon({ matiereId, size, color }: { matiereId: string } & IconProps) {
  const Cmp = subjectMap[matiereId] ?? MathsIcon;
  return <Cmp size={size} color={color} />;
}

export function FlammeIcon({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2c1 3-3 4-3 8a3 3 0 1 0 6 0c0-1 0-2-.6-3 1.6.7 3.6 2.9 3.6 6a6 6 0 1 1-12 0c0-5 3.5-7.5 6-11Z" fill={color} />
    </svg>
  );
}

export function EtoileIcon({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2.5l2.9 6 6.6.7-4.9 4.5 1.3 6.5L12 16.9l-5.9 3.3 1.3-6.5-4.9-4.5 6.6-.7L12 2.5Z" fill={color} />
    </svg>
  );
}

export function LivreIcon({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 5c2-1.3 5-1.3 8 0 3-1.3 6-1.3 8 0v14c-2-1.3-5-1.3-8 0-3-1.3-6-1.3-8 0V5Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 5v14" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

export function BoussoleIcon({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
      <path d="M15.5 8.5l-2.2 5-5 2.2 2.2-5 5-2.2Z" fill={color} />
    </svg>
  );
}

const badgeMap: Record<string, (p: IconProps) => ReactElement> = {
  flamme: FlammeIcon,
  etoile: EtoileIcon,
  livre: LivreIcon,
  boussole: BoussoleIcon,
};

export function BadgeGlyph({ icone, size, color }: { icone: string } & IconProps) {
  const Cmp = badgeMap[icone] ?? EtoileIcon;
  return <Cmp size={size} color={color} />;
}
