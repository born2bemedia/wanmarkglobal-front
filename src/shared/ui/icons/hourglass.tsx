'use client';

export function Hourglass({
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
        d="M8.61817 7H62.3822C63.935 19.4546 48.9414 22.4494 48.9414 35C48.9414 47.5506 63.935 50.5453 62.3822 63H8.61817C7.0653 50.5453 22.0591 47.5506 22.0591 35C22.0591 22.4494 7.0653 19.4546 8.61817 7Z"
        fill={color}
      />
    </svg>
  );
}
