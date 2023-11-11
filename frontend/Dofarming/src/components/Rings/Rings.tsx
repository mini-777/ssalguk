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

const color = (r: number, g: number, b: number) =>
  `rgb(${r * 255}, ${g * 255}, ${b * 255})`;

const rings = [
  {
    totalProgress: 1.3,
    colors: [color(1.632, 204.0, 134.436), color(0.0, 172.788, 204.0)],
    background: color(0.016, 0.227, 0.212),
    size: SIZE - strokeWidth * 4,
  },
  {
    totalProgress: 0.6,
    colors: [color(0.678, 0.8, 0.0), color(0.678, 0.8, 0.0)],
    background: color(0.133, 0.2, 0),
    size: SIZE - strokeWidth * 2,
  },
  {
    totalProgress: 0.7,
    colors: [color(0.561, 0.416, 0.38), color(0.561, 0.416, 0.38)],
    background: color(0.196, 0.012, 0.063),
    size: SIZE,
  },
];

export const Rings = () => {
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
