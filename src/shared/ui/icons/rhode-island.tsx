'use client';

export function RhodeIsland({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.5002 7H16.9502V25.6667V44.3333H35.5002V63H54.0502V44.3333V25.6667H35.5002V7Z"
        fill={color}
      />
    </svg>
  );
}
