type SocialIconProps = {
  kind: "facebook" | "instagram" | "x";
  className?: string;
};

export function SocialIcon({ kind, className = "h-4 w-4" }: SocialIconProps) {
  if (kind === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
      >
        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3.1h2.8v8h2.7Z" />
      </svg>
    );
  }

  if (kind === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
        className={className}
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.9 3H21l-4.6 5.2L22 21h-4.7l-3.7-4.9L9.2 21H3l4.9-5.6L2 3h4.8l3.3 4.5L13.9 3h5Z" />
    </svg>
  );
}
