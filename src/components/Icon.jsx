export default function Icon({ name = "arrow", size = 20, ...props }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    external: <path d="M6 18 18 6M6 6h12v12" />,
    download: <path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4" />,
    github: (
      <path d="M9 19c-4.3 1.3-4.3-2-6-2.5M15 22v-3.4c0-1 .1-1.4-.5-2 3.3-.4 6.7-1.6 6.7-7A5.5 5.5 0 0 0 19.7 6c.2-.4.7-1.8-.2-3.7 0 0-1.3-.4-4 1.4a13.5 13.5 0 0 0-7 0c-2.7-1.8-4-1.4-4-1.4C3.6 4.2 4.1 5.6 4.3 6a5.5 5.5 0 0 0-1.5 3.6c0 5.4 3.4 6.6 6.7 7-.6.6-.6 1.2-.5 2V22" />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v7m4 0v-7m0 3c0-4 6-4 6 0v4M7 7h.01" />
      </>
    ),
    layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
    code: <path d="m7 7-5 5 5 5m10-10 5 5-5 5M14 4l-4 16" />,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
