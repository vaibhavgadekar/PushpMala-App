import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function Pause(props: SvgProps) {
  return (
    <Svg width={70} height={70} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity={0.4}
        d="M11.969 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
        fill="#616161"
      />
      <Path
        d="M14.97 10.231l-2.9-1.67c-.72-.42-1.59-.42-2.31 0s-1.15 1.16-1.15 2v3.35c0 .83.43 1.58 1.15 2a2.285 2.285 0 002.3 0l2.9-1.67c.72-.42 1.15-1.16 1.15-2 .02-.84-.41-1.59-1.14-2.01z"
        fill="#616161"
      />
    </Svg>
  );
}

export default Pause;
