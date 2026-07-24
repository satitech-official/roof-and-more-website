const iconPaths = {
  calendar: (
    <>
      <path d="M7 3v4" />
      <path d="M17 3v4" />
      <path d="M4 9h16" />
      <rect x="4" y="5" width="16" height="16" rx="2" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8" />
      <path d="M8 11h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 15h.01" />
      <path d="M12 15h.01" />
      <path d="M16 15h.01" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M16.8 7.2h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M21 16.8v2.4a1.8 1.8 0 0 1-2 1.8 17.7 17.7 0 0 1-7.7-2.7 17.3 17.3 0 0 1-5.4-5.4A17.7 17.7 0 0 1 3.2 5a1.8 1.8 0 0 1 1.8-2h2.4a1.8 1.8 0 0 1 1.8 1.5c.1.9.3 1.7.6 2.5a1.8 1.8 0 0 1-.4 1.9l-1 1a14.4 14.4 0 0 0 5.8 5.8l1-1a1.8 1.8 0 0 1 1.9-.4c.8.3 1.6.5 2.5.6a1.8 1.8 0 0 1 1.4 1.9Z" />
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.2-4A8 8 0 1 1 8 18.8L4 20Z" />
      <path d="M9 8.8c.2 3.3 2.2 5.1 6.1 6.2.8-.8 1-1.5.7-2.2l-1.8-.8-1 1c-1.2-.5-2.1-1.4-2.6-2.6l1-1L10.6 8c-.7-.3-1.2-.1-1.6.8Z" />
    </>
  ),
};

export default function Icon({ name, className = "action-icon" }) {
  const paths = iconPaths[name];
  if (!paths) return null;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {paths}
    </svg>
  );
}
