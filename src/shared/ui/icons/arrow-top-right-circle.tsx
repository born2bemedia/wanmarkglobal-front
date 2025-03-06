'use client';

type ColorVariant =
  | 'blue'
  | 'black'
  | 'darkPurple'
  | 'umber'
  | 'coral'
  | 'green'
  | 'white';

const COLORS: Record<ColorVariant, string> = {
  blue: '#0D2056',
  black: 'white',
  darkPurple: '#560D46',
  umber: '#242102',
  coral: '#480808',
  green: '#0a4a19',
  white: '#fff',
};

export function ArrowTopRightCircle({
  color = 'blue',
}: {
  color?: ColorVariant;
}) {
  const fillColor = COLORS[color] ?? COLORS.black;
  const strokeColor = color === 'black' ? 'black' : 'white';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <rect width="26" height="26" rx="13" fill={fillColor} />
      <g clipPath="url(#clip0)">
        <path
          d="M9 17L17 9"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 9H17V15.5"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
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
