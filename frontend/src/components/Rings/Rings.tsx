import { Canvas, Fill, vec } from '@shopify/react-native-skia';
import React from 'react';
import { Dimensions } from 'react-native';

import { Ring } from './Ring';

const { width, height } = Dimensions.get('window');
const center = vec(100, 85);

export const { PI } = Math;
export const TAU = 2 * PI;
export const SIZE = 150;
export const strokeWidth = 20;

export const Rings = () => {
  const color = (r: number, g: number, b: number) =>
    `rgb(${r * 255}, ${g * 255}, ${b * 255})`;

  const [rings, setRings] = React.useState([
    {
      totalProgress: 0.9,
      colors: [color(0.592, 0.722, 0.243), color(0.592, 0.722, 0.243)],
      background: color(0.133, 0.2, 0),
      size: SIZE - strokeWidth * 4,
    },
    {
      totalProgress: 1.3,
      colors: [color(0.875, 0.302, 0.447), color(0.875, 0.302, 0.447)],
      background: color(0.196, 0.012, 0.063),
      size: SIZE,
    },
    {
      totalProgress: 0.6,
      colors: [color(0.878, 0.675, 0.188), color(0.878, 0.675, 0.188)],
      background: color(0.016, 0.227, 0.212),
      size: SIZE - strokeWidth * 2,
    },
  ]);

  return (
    <Canvas style={{ flex: 1 }}>
      {rings.map((ring, index) => {
        return (
          <Ring
            key={index}
            ring={ring}
            center={center}
            strokeWidth={strokeWidth}
          />
        );
      })}
    </Canvas>
  );
};
