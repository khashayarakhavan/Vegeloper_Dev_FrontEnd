import * as React from "react";

function SvgStar(props) {
  return (
    <svg width={20} height={20} {...props}>
      <path d="M10 1.3l2.388 6.722H18.8l-5.232 3.948 1.871 6.928L10 14.744l-5.438 4.154 1.87-6.928-5.233-3.948h6.412L10 1.3z" />
    </svg>
  );
}

export default SvgStar;
