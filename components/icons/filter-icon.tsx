export default function FilterIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 6h18"></path>
      <path d="M7 12h10"></path>
      <path d="M10 18h4"></path>
    </svg>
  );
}

// <svg
//   fill="none"
//   shapeRendering="geometricPrecision"
//   stroke="currentColor"
//   strokeLinecap="round"
//   strokeLinejoin="round"
//   strokeWidth="1.5"
//   viewBox="0 0 24 24"
//   width="14"
//   height="14"
//   className={className}
// >
//   <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
// </svg>
