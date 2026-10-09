import React from "react";

const SkeletonGrid = ({ count = 4, className = "", component: Component }) => (
  <>
    {Array.from({ length: count }, (_, index) => (
      <div className={className} key={index}>
        <Component />
      </div>
    ))}
  </>
);

export default SkeletonGrid;