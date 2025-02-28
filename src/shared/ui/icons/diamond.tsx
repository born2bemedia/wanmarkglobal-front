'use client';

export function Diamond({
  color = '#AD9FFF',
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
        d="M2.15674 25.2L35 59.5L67.8432 25.2L52.2975 10.5H17.7025L2.15674 25.2Z"
        fill={color}
      />
    </svg>
  );
}
