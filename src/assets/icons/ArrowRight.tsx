import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function ArrowRight(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowRight;
