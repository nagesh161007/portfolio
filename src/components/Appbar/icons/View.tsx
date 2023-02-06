import * as React from "react";

const View = (props: { color: string }) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M25.333 4H6.667C5.187 4 4 5.2 4 6.667v18.666A2.666 2.666 0 0 0 6.667 28h18.666C26.8 28 28 26.8 28 25.333V6.667A2.666 2.666 0 0 0 25.333 4Zm0 21.333H6.667v-16h18.666v16Zm-7.333-8c0 1.107-.893 2-2 2s-2-.893-2-2c0-1.106.893-2 2-2s2 .894 2 2ZM16 12c-3.64 0-6.747 2.213-8 5.333 1.253 3.12 4.36 5.334 8 5.334 3.64 0 6.747-2.214 8-5.334C22.747 14.213 19.64 12 16 12Zm0 8.667A3.335 3.335 0 0 1 16 14a3.334 3.334 0 0 1 0 6.667Z"
        fill="#D8D5DD"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default View;
