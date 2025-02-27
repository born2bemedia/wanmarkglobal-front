'use client';

export function ArrowTopRightCircle({
  color = 'blue',
}: {
  color?: 'blue' | 'black';
}) {
  return color === 'blue' ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <rect width="26" height="26" rx="13" fill="#0D2056" />
      <g clipPath="url(#clip0_4130_161)">
        <path
          d="M9 17L17 9"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 9H17V15.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4130_161">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(5 5)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <rect width="26" height="26" rx="13" fill="white" />
      <g clipPath="url(#clip0_4130_39)">
        <path
          d="M9 17L17 9"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 9H17V15.5"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4130_39">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(5 5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
