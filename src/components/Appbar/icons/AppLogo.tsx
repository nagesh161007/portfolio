import * as React from "react";

const AppLogo = (props: any) => (
  <svg
    width={53}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M4 2h46v31H4V2Z" stroke="url(#b)" strokeWidth={2.8} />
      <circle cx={11.75} cy={10.75} r={1.75} fill="#FA3D49" />
      <circle cx={16.65} cy={10.75} r={1.75} fill="#FAE100" />
      <circle cx={21.55} cy={10.75} r={1.75} fill="#50FA00" />
      <path
        d="M8 21v9h11"
        stroke="#23AEFD"
        strokeWidth={2.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 15V6H34M22 6 8.084 5.872 8 15M34 30.026l11.98.025.02-9.025"
        stroke="#54A3FF"
        strokeWidth={2.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <path
      d="M16.339 20.717v-1.25l5-2.202v1.438l-3.423 1.374.046-.074v.177l-.046-.074 3.423 1.374v1.438l-5-2.201Zm11.984-5.33-2.344 8.707h-1.303l2.344-8.708h1.303Zm8.338 5.33-5 2.201V21.48l3.423-1.374-.046.074v-.177l.046.074-3.423-1.374v-1.438l5 2.202v1.25Z"
      fill="#fff"
      id="svg-text"
    />
    <defs>
      <linearGradient
        id="b"
        x1={27}
        y1={2}
        x2={27}
        y2={33}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AA00FA" />
        <stop offset={1} stopColor="#AA00FA" stopOpacity={0} />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h53v34H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default AppLogo;
