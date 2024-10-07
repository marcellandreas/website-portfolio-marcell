export function PointNine() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="170"
      height="186"
      viewBox="0 0 170 186"
      fill="none"
    >
      {[...Array(4)].map((_, index) => (
        <ellipse
          key={index}
          cx={index * 51.6364 + 51.6364}
          cy="68.4819"
          rx="15.2182"
          ry="14.3727"
          fill="white"
          fillOpacity={0.09 + index * 0.02}
        />
      ))}
      {[...Array(4)].map((_, index) => (
        <circle
          key={index}
          cx={index * 51.6364 + 51.6364}
          cy="120.055"
          r="15.2182"
          fill="white"
          fillOpacity={0.07 + index * 0.02}
        />
      ))}
      {[...Array(4)].map((_, index) => (
        <circle
          key={index}
          cx={index * 51.6364 + 51.6364}
          cy="15.2182"
          r="15.2182"
          fill="white"
          fillOpacity={0.1 + index * 0.02}
        />
      ))}
      {[...Array(4)].map((_, index) => (
        <circle
          key={index}
          cx={index * 51.6364 + 51.6364}
          cy="170.782"
          r="15.2182"
          fill="white"
          fillOpacity={0.05 + index * 0.02}
        />
      ))}
    </svg>
  );
}
