'use client';

export function Pedestal({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.875 16.1H45.125V35.35H64.375V54.6H45.125H25.875H6.625V35.35H25.875V16.1Z"
        fill={color}
      />
    </svg>
  );
}
