import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function Share2(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      {...props}
    >
      <Path d="M19 22H5c-1.654 0-3-1.346-3-3V8h2v11c0 .552.449 1 1 1h14a1 1 0 001-1v-2h2v2c0 1.654-1.346 3-3 3zm-2.293-10.293l-1.414-1.414L18.586 7l-3.293-3.293 1.414-1.414L21.414 7z" />
      <Path d="M8 18H6v-1c0-6.065 4.935-11 11-11h3v2h-3c-4.963 0-9 4.037-9 9v1z" />
    </Svg>
  )
}

export default Share2
