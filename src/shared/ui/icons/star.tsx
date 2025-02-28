'use client';

export function Star({
  height = '70',
  width = '70',
  color = '#FFDE7D',
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
      <g id="decor-element">
        <path
          id="Portal"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35 66.5C34.937 49.1244 20.8582 35.0584 3.5 35.0584C20.897 35.0584 35 20.929 35 3.5C35.0627 20.8756 49.1418 34.9416 66.5 34.9416C49.1028 34.9416 35 49.071 35 66.5Z"
          fill={color}
        />
      </g>
    </svg>
  );
}
