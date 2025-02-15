import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function settingIcon(props:SvgProps) {
  return (
    <Svg
   
    width={22}
    height={22}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zm-2.83-7.17l5.66-5.66m0 5.66L9.17 9.17"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}

export default settingIcon