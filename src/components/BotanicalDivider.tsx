export default function BotanicalDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`flex justify-center py-8 ${flip ? 'scale-x-[-1]' : ''}`} aria-hidden="true">
      <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 50 Q30 20 60 30 Q90 40 110 10" stroke="var(--c-blush)" strokeWidth="1" strokeOpacity="0.35" fill="none" strokeLinecap="round" />
        <path d="M60 30 Q55 15 45 10" stroke="var(--c-blush)" strokeWidth="1" strokeOpacity="0.3" fill="none" strokeLinecap="round" />
        <path d="M60 30 Q65 42 75 44" stroke="var(--c-blush)" strokeWidth="1" strokeOpacity="0.3" fill="none" strokeLinecap="round" />
        <path d="M35 38 Q30 28 22 26" stroke="var(--c-blush)" strokeWidth="0.8" strokeOpacity="0.25" fill="none" strokeLinecap="round" />
        <path d="M85 22 Q88 14 96 15" stroke="var(--c-blush)" strokeWidth="0.8" strokeOpacity="0.25" fill="none" strokeLinecap="round" />
        <circle cx="45" cy="10" r="1.5" fill="var(--c-blush)" fillOpacity="0.3" />
        <circle cx="75" cy="44" r="1.5" fill="var(--c-blush)" fillOpacity="0.3" />
        <circle cx="22" cy="26" r="1" fill="var(--c-blush)" fillOpacity="0.25" />
        <circle cx="96" cy="15" r="1" fill="var(--c-blush)" fillOpacity="0.25" />
      </svg>
    </div>
  );
}
