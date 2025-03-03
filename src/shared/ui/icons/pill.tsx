'use client';

export function Pill({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.9826 12.4945C43.7234 6.75369 53.0307 6.75369 58.7715 12.4945C64.5123 18.2353 64.5123 27.5426 58.7715 33.2834L32.6834 59.3715C26.9427 65.1122 17.6353 65.1123 11.8945 59.3715C6.15366 53.6307 6.15377 44.3233 11.8945 38.5826L37.9826 12.4945ZM29.0148 29.6148L42.0588 16.5708C45.5483 13.0813 51.2057 13.0813 54.6952 16.5708C58.1847 20.0602 58.1847 25.7177 54.6952 29.2072L41.6512 42.2512L29.0148 29.6148Z"
        fill={color}
      />
    </svg>
  );
}
