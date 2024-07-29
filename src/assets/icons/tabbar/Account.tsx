import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {COLORS} from '../../../constants';

interface Props extends SvgProps {
  color?: COLORS | string;
}

export const Account = ({color = COLORS.BLACK, ...rest}: Props) => (
  <Svg width={17} height={21} viewBox="0 0 17 21" fill="none" {...rest}>
    <Path
      fill={color}
      d="M4.339 4.01c0-1.064.428-2.084 1.19-2.836A4.088 4.088 0 0 1 8.4 0c1.078 0 2.11.422 2.872 1.174a3.983 3.983 0 0 1 1.19 2.835 3.984 3.984 0 0 1-1.19 2.836 4.092 4.092 0 0 1-5.743-.001 3.988 3.988 0 0 1-1.19-2.835Zm12.044 10.517a9.695 9.695 0 0 0-3.42-3.24 9.842 9.842 0 0 0-4.562-1.263 9.832 9.832 0 0 0-4.565 1.263 9.684 9.684 0 0 0-3.419 3.24.998.998 0 0 0-.14.509v4.009c0 .266.107.52.298.709.19.188.448.294.718.293h14.215c.27 0 .528-.105.718-.293a.996.996 0 0 0 .298-.709v-4.01a.994.994 0 0 0-.141-.508Z"
    />
  </Svg>
);
