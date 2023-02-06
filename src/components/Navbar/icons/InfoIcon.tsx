import * as React from "react";

const InfoIcon = (props: { color?: string }) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0Zm1.2 18h-2.4v-7.2h2.4V18Zm0-9.6h-2.4V6h2.4v2.4Z"
      fill="#D8D5DD"
    />
  </svg>
);

export default InfoIcon;
