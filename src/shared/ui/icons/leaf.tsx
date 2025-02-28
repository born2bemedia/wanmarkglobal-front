'use client';

export function Leaf({
  color = '#FFC1F9',
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
        d="M62.9961 7.00415C62.9961 7.00415 63.6598 32.7364 48.1981 48.1982C32.7364 63.6599 7.00415 62.9958 7.00415 62.9958C7.00415 62.9958 6.34027 37.2638 21.802 21.802C37.2637 6.34027 62.9961 7.00415 62.9961 7.00415Z"
        fill={color}
      />
    </svg>
  );
}
