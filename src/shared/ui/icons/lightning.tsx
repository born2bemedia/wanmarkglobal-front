'use client';

export function Lightning({
  width = '70',
  height = '70',
  color = '#C1D5FF',
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
        d="M44.0407 11.4073C44.409 9.35595 41.7863 8.17945 40.4991 9.81869L20.2361 35.6245C19.2056 36.9369 20.1405 38.8597 21.8091 38.8597H28.1121C29.3581 38.8597 30.3008 39.9868 30.0806 41.2132L26.9596 58.5927C26.5913 60.644 29.214 61.8206 30.5012 60.1813L50.7642 34.3755C51.7947 33.0631 50.8598 31.1403 49.1912 31.1403H42.8882C41.6422 31.1403 40.6995 30.0132 40.9197 28.7868L44.0407 11.4073Z"
        fill={color}
      />
    </svg>
  );
}
