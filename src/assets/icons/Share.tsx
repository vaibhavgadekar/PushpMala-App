import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function Share(props: SvgProps) {
  return (
    <Svg width={28} height={28} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity={0.34}
        d="M16.96 6.172c2 1.39 3.38 3.6 3.66 6.15m-17.13.047a8.601 8.601 0 013.6-6.15m1.1 14.722c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85"
        stroke="#616161"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.06 7.7a2.78 2.78 0 100-5.56 2.78 2.78 0 000 5.56zM4.83 19.92a2.78 2.78 0 100-5.56 2.78 2.78 0 000 5.56zm14.34 0a2.78 2.78 0 100-5.56 2.78 2.78 0 000 5.56z"
        stroke="#616161"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Share;
