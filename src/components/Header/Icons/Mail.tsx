import * as React from "react";

const Mail = (props: { color?: string }) => (
  <svg
    width={30}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27 .5H3a2.996 2.996 0 0 0-2.985 3L0 21.5c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3v-18c0-1.65-1.35-3-3-3Zm0 21H3v-15L15 14l12-7.5v15ZM15 11 3 3.5h24L15 11Z"
      fill="#ffffff"
    />
  </svg>
);

export default Mail;
