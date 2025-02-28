'use client';

export function Home({
  color = '#FFC3A0',
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
        d="M7.57422 24.8462L34.9999 7L62.4255 24.8462V63H7.57422V24.8462Z"
        fill={color}
      />
    </svg>
  );
}
