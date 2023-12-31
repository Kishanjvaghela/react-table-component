import * as React from "react";
import { SVGProps } from "react";
const DownSvgComponent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.507 10.229 5.315 14.47a.653.653 0 0 1-.93 0L.192 10.23a.673.673 0 0 1 0-.943.653.653 0 0 1 .931 0l3.067 3.104V.667c0-.369.295-.667.659-.667.364 0 .658.298.658.667V12.39l3.067-3.104a.653.653 0 0 1 .932 0 .673.673 0 0 1 0 .943Z"
      clipRule="evenodd"
    />
  </svg>
);
export default DownSvgComponent;
