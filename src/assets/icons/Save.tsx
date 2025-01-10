import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function Save(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M16 8.99v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.93-2.19c-.42-.23-1.1-.23-1.52 0l-3.93 2.19c-1.27.7-2.31.09-2.31-1.36V8.99c0-1.71 1.4-3.11 3.11-3.11h7.78c1.71 0 3.11 1.4 3.11 3.11z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11zM7 12h4m-2 2v-4"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Save
