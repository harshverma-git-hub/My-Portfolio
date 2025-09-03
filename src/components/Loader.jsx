import React from "react";

const Loader = ({ size = "h-12 w-12", color = "border-blue-500" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-4 border-gray-200 ${color} ${size}`}
        style={{ borderTopColor: "transparent" }}
      ></div>
    </div>
  );
};

export default Loader;
