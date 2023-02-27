import * as React from "react";

const InterviewIcon = (props: { color?: string }) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h32v32H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.01042)" />
      </pattern>
      <image
        id="b"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACT0lEQVR4nO2dXWpTURRG75M/0/DVOhTn5AQUlaoD6as6CfWxc0j2V/Ql5ciRCKFIiTS56yR3LdhQSktyv3X21z4EzjSJiIiIiIg8kCQvqupdVX1PcpOknfjc9GepqrdJLoY9IK21x0k+VtXtAKG1Y8z22T601h5No4VfVV/pgDKfiC9DSUjyiQ4l80u4nAbq/NsFCtgkeU7nP/U/uHQY4SS8GWEDfixYwLcRBGSEMMJMjSDg3jc59+tl5jn08x08kLlfLwpQwKy4ATAKgFEAjAJgFACjABgFwCgARgEwCoBRAIwCYBQAowAYBcAoAEYBMAqAUQCMAmAUAKMAGAWcuIDVavUsyVWf/vVDX88PZu0poLX2NMmrqvr192er6mf/XmvtiQKOuAHr9fplkut7fu+6/4wbcGABO3Wzb1Vc3a0lunKO/dnX/2afN/ivutl36k4t0YGfnIA96qbtOX9qiQ785ASc+0w0dABRAB9C3AA+iEBDN5AVREOfwLgBfAixgvggAg3dQFYQDX0C4wbwIcQK4oMINHQDWUE09AmMG8CHECuIDyLQ0A1kBdHQJzBuAB9CrCA+iEBDN5AVREOfwLgBfAixgvggAg3dQFYQDX0C4wbwIcQK4oMINHQDWUE09AmMG8CHECuIDyLQ0A209Asc1nT+XmFCs71hri1xqur1CBtwsb3SaWnhb4a4xqrTr/dboID30yj0a/369X4LCv/zUFcZ7ki4POc6qqpNP/nDhb9L78V+w1y/5OxM/kVNf5b+TMN0voiIiIiITKfMb6ODxHSP9F9BAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export default InterviewIcon;
