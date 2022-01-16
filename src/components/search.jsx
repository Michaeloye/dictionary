import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useScreensize from "../hooks/useScreenSize";

function Search({ submitForm, getInput }) {
  const { width } = useScreensize();
  const [onLargeScreen, setOnLargeScreen] = useState();

  useEffect(() => {
    if (width >= 1024) setOnLargeScreen(true);
    else setOnLargeScreen(false);
    return () => null;
  }, [width]);

  return (
    <div className="mt-3">
      <div className="relative">
        <form onSubmit={submitForm}>
          <input
            type="text"
            placeholder="search word..."
            autoComplete="off"
            spellCheck="false"
            onChange={getInput}
            className="block mx-auto border rounded-lg h-10 px-3 w-3/4 lg:w-7/12 focus:outline-none"
          />
        </form>
        {onLargeScreen ? (
          <div style={{ position: "absolute", top: "20%", right: "22%" }}>
            <AiOutlineSearch size={25} className="text-body-blue" />
          </div>
        ) : (
          <div style={{ position: "absolute", top: "20%", right: "16%" }}>
            <AiOutlineSearch size={25} className="text-body-blue" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
