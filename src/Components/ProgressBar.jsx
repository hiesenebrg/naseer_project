import React from "react";

const ProgressBar = () => {
  let width = 2;
  return (
    <>
      <div className="bg-orange-600 border-spacing-4 w-[90vw] m-auto mt-4 rounded-xl min-h-1">
        <div
          className={`bg-green-600 w-[${width}vw] mt-4 rounded-xl min-h-1`}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
