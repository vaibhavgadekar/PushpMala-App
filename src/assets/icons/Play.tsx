import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function Play(props: SvgProps) {
  return (
    <Svg width={70} height={70} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity={0.4}
        d="M11.969 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
        fill="#756D6D"
      />
      <Path
        d="M10.72 15.03V8.97c0-.48-.2-.67-.71-.67h-1.3c-.51 0-.71.19-.71.67v6.06c0 .48.2.67.71.67H10c.52 0 .72-.19.72-.67zm5.28 0V8.97c0-.48-.2-.67-.71-.67H14c-.51 0-.71.19-.71.67v6.06c0 .48.2.67.71.67h1.29c.51 0 .71-.19.71-.67z"
        fill="#756D6D"
      />
    </Svg>
  );
}

export default Play;
