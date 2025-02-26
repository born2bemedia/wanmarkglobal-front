'use client';

export function Stairs({
  color = '#C1D5FF',
  width = '30',
  height = '30',
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
      viewBox="0 0 30 30"
      fill="none"
    >
      <path d="M7.5 0H0V30H30V22.5H22.5V15H15V7.5H7.5V0Z" fill={color} />
    </svg>
  );
}
