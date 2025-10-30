import React from "react";

const Gen1 = ({ text }) => {
  return (
    <>
      <div className="text-[40px] bg-green-400 m-10 p-10 font-serif rounded-2xl shadow-lg text-white text-center">
        {text}
      </div>
    </>
  );
};

export default Gen1;
