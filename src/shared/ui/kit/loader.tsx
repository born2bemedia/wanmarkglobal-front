'use client';

import { Oval } from 'react-loader-spinner';

export function Loader({
  width = 26,
  height = 26,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Oval
      visible={true}
      height={height}
      width={width}
      color="#3D4D7C"
      secondaryColor="#FFFFF"
    />
  );
}
