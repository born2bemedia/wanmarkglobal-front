'use client';

export function Circle({
  color = '#C1D5FF',
  width = '70',
  height = '70',
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
      viewBox="0 0 70 70"
      fill="none"
    >
      <circle cx="35" cy="35" r="31.5" fill={color} />
    </svg>
  );
}
