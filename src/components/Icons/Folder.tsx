import { HTMLAttributes } from "react";

export default function Folder({ ...props }: HTMLAttributes<SVGElement>) {
  return (
    <svg
      width="45"
      height="34"
      viewBox="0 0 45 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 5.6C0 2.50721 2.50721 0 5.6 0H19.6L25.2 5.6H39.2C42.2928 5.6 44.8 8.10721 44.8 11.2V28C44.8 31.0928 42.2928 33.6 39.2 33.6H5.6C2.50721 33.6 0 31.0928 0 28V5.6Z"
        fill="#272727"
      />
    </svg>
  );
}
