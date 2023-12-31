import * as React from "react";
import { SVGProps } from "react";
const UpDownSvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#222"
      fillRule="evenodd"
      d="M4.438.195c.26-.26.682-.26.943 0l4.242 4.243a.667.667 0 1 1-.942.943L5.576 2.276V12.39l3.105-3.104a.667.667 0 1 1 .942.943L5.381 14.47a.667.667 0 0 1-.943 0L.195 10.23a.667.667 0 0 1 .943-.943l3.105 3.104V2.276L1.138 5.381a.667.667 0 1 1-.943-.943L4.438.195Z"
      clipRule="evenodd"
    />
  </svg>
);
export default UpDownSvgComponent;
