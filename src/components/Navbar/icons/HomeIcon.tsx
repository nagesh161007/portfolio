import React from "react";

const HomeIcon = (props: { color: string }) => (
  <svg
    width={24}
    height={24}
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.6 24v-8.47h4.8V24h6V12.706H24L12 0 0 12.706h3.6V24h6Z"
      fill={props.color}
    />
  </svg>
);

export default HomeIcon;
