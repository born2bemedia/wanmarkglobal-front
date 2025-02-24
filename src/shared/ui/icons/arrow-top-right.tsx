'use client';

export function ArrowTopRight({
  color = 'blue',
}: {
  color?: 'blue' | 'white' | 'black';
}) {
  const strokeColor =
    color === 'black' ? 'black' : color === 'blue' ? '#0D2056' : 'white';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <g clipPath="url(#clip0_4001_1613)">
        <path
          d="M5.5 16.5L16.5 5.5"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5625 5.5H16.5V14.4375"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4001_1613">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
