function hashSeed(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

const SKIN_TONES = ["#7A4A2B", "#8C5A35", "#6B3D22", "#9C6B40", "#5C3119"];
const WRAP_COLORS = ["var(--terracotta)", "var(--indigo)", "var(--green)", "var(--gold)", "var(--terracotta-deep)"];

interface AvatarProps {
  seed: string;
  size?: number;
}

export function Avatar({ seed, size = 56 }: AvatarProps) {
  const h = hashSeed(seed);
  const skin = SKIN_TONES[h % SKIN_TONES.length];
  const wrap = WRAP_COLORS[(h >> 2) % WRAP_COLORS.length];
  const smile = (h >> 4) % 2 === 0;

  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="32" fill="var(--cotton-deep)" />
      {/* tête */}
      <circle cx="32" cy="36" r="15" fill={skin} />
      {/* foulard / coiffe inspirée des tissus locaux */}
      <path d="M14 30c0-11 8-19 18-19s18 8 18 19c-4-3-9-4.6-18-4.6S18 27 14 30Z" fill={wrap} />
      <path d="M16 26c5-2.4 11-3.4 16-3.4s11 1 16 3.4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" fill="none" />
      {/* yeux */}
      <circle cx="26" cy="36" r="1.8" fill="var(--ink)" />
      <circle cx="38" cy="36" r="1.8" fill="var(--ink)" />
      {/* sourire */}
      {smile ? (
        <path d="M25 42c3 3 11 3 14 0" stroke="var(--ink)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      ) : (
        <path d="M25 43h14" stroke="var(--ink)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      )}
      {/* col du vêtement */}
      <path d="M14 64a18 18 0 0 1 36 0Z" fill={wrap} />
    </svg>
  );
}
