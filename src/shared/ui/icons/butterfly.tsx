'use client';

export function Butterfly({
  color = '#FFC1C2',
  height = '30',
  width = '29',
}: {
  color?: string;
  width?: string;
  height?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 29 30"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6551 15.7781C14.2573 23.6431 7.86303 29.9085 0 30V0C7.86303 0.0915699 14.2573 6.35689 14.6551 14.2219C15.0476 6.46058 21.2796 0.257038 29 0.00686193V29.9933C21.2796 29.7431 15.0476 23.5395 14.6551 15.7781Z"
        fill={color}
      />
    </svg>
  );
}
