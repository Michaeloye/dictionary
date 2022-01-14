import React from "react";
import dictionary from "../assets/dictionary.png";

function Header() {
  return (
    <div className="bg-header-blue flex h-14 lg:h-16">
      <div className="ml-3 flex items-center gap-2">
        <img
          src={dictionary}
          alt="dictionary image"
          className="h-10 w-10 lg:h-12 lg:w-12"
        />
        <p className="text-base lg:text-lg font-medium text-white">
          Dictionary
        </p>
      </div>
    </div>
  );
}

export default Header;
