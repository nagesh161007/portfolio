import * as React from "react";

const ProjectIcon = (props: { color: string }) => (
  <svg
    width={24}
    height={24}
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.4 4.8H0v16.8C0 22.92 1.08 24 2.4 24h16.8v-2.4H2.4V4.8ZM21.6 0H7.2C5.88 0 4.8 1.08 4.8 2.4v14.4c0 1.32 1.08 2.4 2.4 2.4h14.4c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0Zm-1.2 10.8h-12V8.4h12v2.4Zm-4.8 4.8H8.4v-2.4h7.2v2.4ZM20.4 6h-12V3.6h12V6Z"
      fill={props.color}
    />
  </svg>
);

export default ProjectIcon;
