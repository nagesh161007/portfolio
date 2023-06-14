import * as React from "react";
const TopMate = (props: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#F3F3F3"
      d="M18.667 6.75V1.5c0-.825-.6-1.5-1.334-1.5h-16C.6 0 0 .675 0 1.5v15c0 .825.6 1.5 1.333 1.5h16c.734 0 1.334-.675 1.334-1.5v-5.25l5.333 6V.75l-5.333 6Zm-4 3.75h-4V15H8v-4.5H4v-3h4V3h2.667v4.5h4v3Z"
    />
  </svg>
);
export default TopMate;
