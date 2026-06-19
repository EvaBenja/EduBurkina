export function HeroIllustration() {
  return (
    <svg viewBox="0 0 560 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* ciel / fond transparent, le parent fournit le fond indigo */}

      {/* étoiles discrètes dans le ciel */}
      <g fill="var(--cotton)" opacity="0.5">
        <circle cx="40" cy="48" r="2.2" />
        <circle cx="250" cy="34" r="1.6" />
        <circle cx="300" cy="190" r="1.8" />
        <circle cx="500" cy="150" r="1.6" />
      </g>

      {/* soleil */}
      <circle cx="436" cy="84" r="42" fill="var(--gold)" />
      <g stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" opacity="0.85">
        <line x1="436" y1="20" x2="436" y2="4" />
        <line x1="484" y1="36" x2="496" y2="24" />
        <line x1="500" y1="84" x2="518" y2="84" />
        <line x1="484" y1="132" x2="496" y2="144" />
        <line x1="388" y1="36" x2="376" y2="24" />
      </g>

      {/* sol — bande tissée façon Faso Dan Fani */}
      <rect x="0" y="392" width="560" height="14" fill="var(--terracotta)" />
      <rect x="0" y="406" width="560" height="10" fill="var(--gold)" />
      <rect x="0" y="416" width="560" height="44" fill="var(--indigo-deep)" />

      {/* baobab — tronc renflé, typique de l'arbre */}
      <path
        d="M122 394 Q108 320 132 220 L172 220 Q196 320 182 394 Z"
        fill="var(--indigo-soft)"
      />
      {/* petites branches */}
      <path d="M134 224 Q108 208 92 178" stroke="var(--indigo-soft)" strokeWidth="15" strokeLinecap="round" fill="none" />
      <path d="M170 224 Q198 208 216 182" stroke="var(--indigo-soft)" strokeWidth="15" strokeLinecap="round" fill="none" />

      {/* houppier du baobab — formes rondes superposées */}
      <circle cx="152" cy="168" r="64" fill="var(--green)" />
      <circle cx="92" cy="190" r="42" fill="var(--green)" />
      <circle cx="214" cy="192" r="42" fill="var(--green)" />
      <circle cx="152" cy="128" r="38" fill="var(--green)" />
      <circle cx="118" cy="205" r="26" fill="var(--green-deep)" opacity="0.5" />
      <circle cx="190" cy="208" r="24" fill="var(--green-deep)" opacity="0.5" />

      {/* tapis au sol */}
      <ellipse cx="392" cy="396" rx="96" ry="13" fill="var(--terracotta-deep)" opacity="0.4" />

      {/* enfant assis en tailleur, lisant un livre */}
      <g>
        {/* corps / robe — silhouette simple en dôme */}
        <path d="M330 392 C330 322 354 286 392 286 C430 286 454 322 454 392 Z" fill="var(--terracotta)" />
        {/* liseré décoratif façon tissu */}
        <path d="M334 366 Q392 378 450 366" stroke="var(--gold)" strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* bras tenant le livre */}
        <path d="M344 320 Q352 354 384 362" stroke="#7A4A2B" strokeWidth="15" fill="none" strokeLinecap="round" />
        <path d="M440 320 Q432 354 400 362" stroke="#7A4A2B" strokeWidth="15" fill="none" strokeLinecap="round" />

        {/* tête */}
        <circle cx="392" cy="266" r="28" fill="#7A4A2B" />
        {/* coiffe / foulard */}
        <path d="M364 264 Q364 230 392 230 Q420 230 420 264 Q392 248 364 264 Z" fill="var(--indigo-deep)" />
        {/* visage — regard baissé sur le livre */}
        <path d="M378 268 q4 4 8 0" stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M398 268 q4 4 8 0" stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M380 280 q12 7 24 0" stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* livre ouvert */}
        <path d="M392 350 C378 340 360 342 348 350 L348 366 C360 358 378 358 392 366 Z" fill="var(--cotton)" stroke="var(--indigo)" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M392 350 C406 340 424 342 436 350 L436 366 C424 358 406 358 392 366 Z" fill="var(--cotton)" stroke="var(--indigo)" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M356 351 L384 358 M404 358 L428 351" stroke="var(--indigo-soft)" strokeWidth="1.3" />
      </g>
    </svg>
  );
}

export function MortarboardIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 4 2 9l10 5 10-5-10-5Z" fill={color} />
      <path d="M6 12.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" stroke={color} strokeWidth="1.6" fill="none" />
      <path d="M22 9v6" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function UsersIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3.2" stroke={color} strokeWidth="1.6" />
      <path d="M3 19c0-4 3-6.5 6-6.5s6 2.5 6 6.5" stroke={color} strokeWidth="1.6" />
      <circle cx="17" cy="9" r="2.6" stroke={color} strokeWidth="1.6" />
      <path d="M15.5 13c2.7 0 5 2 5.4 5.4" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

export function BookStackIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="16" width="18" height="3.2" rx="1" fill={color} />
      <rect x="4" y="11.5" width="16" height="3.2" rx="1" fill={color} opacity="0.75" />
      <rect x="5.5" y="7" width="13" height="3.2" rx="1" fill={color} opacity="0.5" />
    </svg>
  );
}
