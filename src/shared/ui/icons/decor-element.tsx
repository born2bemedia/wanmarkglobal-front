'use client';

export function DecorElement({
  color = '#FFC1F9',
  height = '70',
  width = '70',
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
      <g clipPath="url(#clip0_4107_3017)">
        <path
          d="M54.1493 40.6074C50.0296 42.3273 46.5027 46.6062 45.5991 50.9777C44.9751 53.9974 43.6458 56.9142 41.583 59.4765C34.595 68.1566 21.8364 69.4823 13.0861 62.4378C4.33562 55.393 2.9071 42.6458 9.89507 33.9658C12.063 31.2729 14.7863 29.2878 17.7731 28.0409C21.8928 26.3211 25.4196 22.0421 26.3229 17.6707C26.9472 14.6508 28.2766 11.7341 30.3393 9.17185C37.3274 0.491706 50.0859 -0.834031 58.8362 6.21051C67.5867 13.2552 69.0152 26.0024 62.0272 34.6826C59.8593 37.3754 57.1361 39.3605 54.1493 40.6074Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_4107_3017">
          <rect width="70" height="70" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
