'use client';

export function Magnet({
  height = '30',
  width = '29',
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 29 30"
      fill="none"
    >
      <path
        d="M13.7094 0H0V10.3575H13.7094C16.3254 10.3575 18.4479 12.4451 18.4479 15C18.4479 17.5544 16.3254 19.6425 13.7094 19.6425H0V30H13.7094C22.1372 30 29 23.2763 29 15C29 6.72366 22.1372 0 13.7094 0Z"
        fill="#AD9FFF"
      />
    </svg>
  );
}
