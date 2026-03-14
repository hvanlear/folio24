interface CubeProps {
  isDark?: boolean;
}

export function Cube({ isDark = false }: CubeProps) {
  const strokeColor = isDark ? "white" : "#212529";

  return (
    <span className="cube ml-10 mr-10 h-full flex items-center ">
      <svg
        width="59"
        height="69"
        viewBox="0 0 229 239"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M226.836 161.859L151.836 124.359L1.83643 199.359L76.8364 236.859L226.836 161.859Z"
          stroke={strokeColor}
          strokeWidth="3"
          strokeMiterlimit="1"
        />
        <path
          d="M226.837 161.859L151.837 124.359V1.35938L226.837 38.8594V161.859Z"
          stroke={strokeColor}
          strokeWidth="3"
          strokeMiterlimit="1"
        />
        <path
          d="M151.836 124.359L1.83643 199.359V76.3594L151.836 1.35938V124.359Z"
          stroke={strokeColor}
          strokeWidth="3"
          strokeMiterlimit="1"
        />
        <path
          d="M76.8364 236.859L1.83643 199.359V76.3594L76.8364 113.859V236.859Z"
          stroke={strokeColor}
          strokeWidth="3"
          strokeMiterlimit="1"
        />
        <path
          d="M76.8364 236.859L226.836 161.859V38.8594L76.8364 113.859V236.859Z"
          fill="url(#paint0_linear_1128_2824)"
          stroke={strokeColor}
          strokeWidth="3"
          strokeMiterlimit="1"
        />
        <path
          d="M226.836 38.8594L151.836 1.35938L1.83643 76.3594L76.8364 113.859L226.836 38.8594Z"
          stroke={strokeColor}
          strokeWidth="3"
          strokeMiterlimit="1"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1128_2824"
            x1="76.8364"
            y1="137.859"
            x2="226.836"
            y2="137.859"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--grad-start)" />
            <stop offset="1" stopColor="var(--grad-end)" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}
