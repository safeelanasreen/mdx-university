import React from "react";

const Circle = ({className, perc}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="179"
      height="179"
      viewBox="0 0 179 179"
    >
      <g id="circle" transform="translate(-861 -3222)">
        <path
          id="Ellipse_78280_-_Outline"
          data-name="Ellipse 78280 - Outline"
          d="M89.5,5A85.15,85.15,0,0,0,72.465,6.717,84.009,84.009,0,0,0,42.259,19.428,84.761,84.761,0,0,0,11.638,56.61,84.039,84.039,0,0,0,6.717,72.465a85.373,85.373,0,0,0,0,34.07,84.009,84.009,0,0,0,12.711,30.206,84.761,84.761,0,0,0,37.182,30.62,84.039,84.039,0,0,0,15.855,4.922,85.373,85.373,0,0,0,34.07,0,84.009,84.009,0,0,0,30.206-12.711,84.761,84.761,0,0,0,30.62-37.182,84.039,84.039,0,0,0,4.922-15.855,85.373,85.373,0,0,0,0-34.07,84.009,84.009,0,0,0-12.711-30.206,84.761,84.761,0,0,0-37.182-30.62,84.039,84.039,0,0,0-15.855-4.922A85.15,85.15,0,0,0,89.5,5m0-5A89.5,89.5,0,1,1,0,89.5,89.5,89.5,0,0,1,89.5,0Z"
          transform="translate(861 3222)"
          fill="#e9e9e9"
        />
        <g
          id="Ellipse_78281"
          data-name="Ellipse 78281"
          transform="translate(861 3222)"
          fill="transparent"
          stroke="#e9e9e9"
          strokeWidth="5"
        >
          <circle cx="89.5" cy="89.5" r="89.5" stroke="none" />
          <circle
            cx="89.5"
            cy="89.5"
            r="87"
            fill="none"
            strokeDasharray={550}
            className={className}
            style={{strokeDashoffset: `${perc*550}`}}
          />
        </g>
      </g>
    </svg>
  );
};

export default Circle;
