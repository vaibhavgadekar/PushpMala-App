import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function Bookmark(props: SvgProps) {
  return (
    <Svg width={28} height={28} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M14 2c2 0 3 1.01 3 3.03v7.05c0 1.99-1.41 2.76-3.14 1.72l-1.32-.8c-.3-.18-.78-.18-1.08 0l-1.32.8C8.41 14.84 7 14.07 7 12.08V5.03C7 3.01 8 2 10 2h4z"
        stroke="#756D6D"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity={0.4}
        d="M6.82 4.99C3.41 5.56 2 7.66 2 11.9v3.03C2 19.98 4 22 9 22h6c5 0 7-2.02 7-7.07V11.9c0-4.31-1.46-6.42-5-6.94"
        stroke="#756D6D"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Bookmark;
