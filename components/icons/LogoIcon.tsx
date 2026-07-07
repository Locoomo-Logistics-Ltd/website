import React from "react";

interface LogoIconProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * The Locoomo logomark SVG.
 * Use `<LogoIcon />` wherever just the mark is needed.
 * For the full wordmark, use `<MainLogo />`.
 */
export function LogoIcon({ width = 28, height = 34, className }: LogoIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8.64513 15.5997C8.64513 11.8097 11.6959 8.73414 15.4759 8.68454V0.0332031C11.5223 0.0530456 7.57364 1.571 4.55758 4.59202C-1.51919 10.6688 -1.51919 20.5256 4.55758 26.6073L15.4759 37.5256V22.5148C11.6959 22.4652 8.64513 19.3945 8.64513 15.5997Z"
        fill="#005CBE"
      />
      <path
        d="M26.3402 4.87718C23.3242 1.85615 19.3755 0.338202 15.4219 0.318359V8.96969C19.2019 9.0193 22.2527 12.0899 22.2527 15.8848C22.2527 19.6797 19.2019 22.7503 15.4219 22.7999V37.8108L26.3402 26.8924C32.417 20.8157 32.417 10.9589 26.3402 4.87718Z"
        fill="#3D93E0"
      />
      <circle cx="15.67" cy="15.73" r="4.2" fill="#006CDF" />
    </svg>
  );
}