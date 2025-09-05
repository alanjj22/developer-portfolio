/**
 * Custom University Icon Component
 * SVG icon representing a university building with graduation cap
 */
const UniversityIcon = ({ className = 'w-6 h-6', ...props }) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Main building structure */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2L2 8h20L12 2z"
        fill="currentColor"
        fillOpacity="0.2"
      />

      {/* Building columns */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8v12h16V8" />

      {/* Individual columns */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 20v-8M10 20v-8M14 20v-8M18 20v-8"
      />

      {/* Central door */}
      <rect
        x="11"
        y="15"
        width="2"
        height="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />

      {/* Flag pole */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v6" />

      {/* Flag */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2h4v3h-4z"
        fill="currentColor"
        fillOpacity="0.3"
      />

      {/* Base */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 20h20" />
    </svg>
  );
};

export default UniversityIcon;
