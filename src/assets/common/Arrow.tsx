import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  color?: string;
}

export const Arrow = ({color = '#000', ...rest}: Props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
    <Path fill={color} d="m7.1 12 4.6-6h3.8l-4.6 6 4.6 6h-3.8l-4.6-6Z" />
  </Svg>
);
