import React from "react";

function SynonymCard({ word }) {
  return (
    <div
      className="inline-block rounded-full border border-black ml-3 mt-1 
      bg-synonym-blue text-text-blue px-3 py-1 text-center text-sm cursor-pointer"
    >
      {word}
    </div>
  );
}

export default SynonymCard;
