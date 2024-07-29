import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  color?: string;
}

export const Home = ({color = '#000', ...rest}: Props) => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none" {...rest}>
    <Path
      fill={color}
      d="M20.33 6.845 11.022.16a.853.853 0 0 0-.995 0L.719 6.845a.839.839 0 0 0-.348.668v9.192c0 .886.356 1.737.99 2.363a3.407 3.407 0 0 0 2.394.98h5.077v-5.85a.83.83 0 0 1 .248-.59.852.852 0 0 1 .598-.245h1.693c.224 0 .44.088.598.244a.83.83 0 0 1 .248.591v5.85h5.077c.897 0 1.758-.353 2.393-.98a3.322 3.322 0 0 0 .991-2.363V7.513a.827.827 0 0 0-.348-.668Z"
    />
  </Svg>
);
