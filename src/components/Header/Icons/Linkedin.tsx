import * as React from "react";

const LinkedIn = (props: { color?: string }) => (
  <svg
    width={28}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.125 0H1.875A1.875 1.875 0 0 0 0 1.875v21.25A1.875 1.875 0 0 0 1.875 25h21.25A1.875 1.875 0 0 0 25 23.125V1.875A1.875 1.875 0 0 0 23.125 0ZM7.5 21.25H3.75V10H7.5v11.25ZM5.625 7.812a2.187 2.187 0 1 1 2.25-2.187 2.225 2.225 0 0 1-2.25 2.188ZM21.25 21.25H17.5v-5.925c0-1.775-.75-2.412-1.725-2.412a2.176 2.176 0 0 0-2.025 2.325.826.826 0 0 0 0 .175v5.837H10V10h3.625v1.625A3.888 3.888 0 0 1 17 9.875c1.938 0 4.2 1.075 4.2 4.575l.05 6.8Z"
      fill="#ffffff"
    />
  </svg>
);

export default LinkedIn;
