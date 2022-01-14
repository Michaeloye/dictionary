import React, { useState, useEffect } from "react";
import Search from "./search";
import { GiSpeaker } from "react-icons/gi";

function Main() {
  const [keyword, setKeyword] = useState("Hello");
  const [transcription, setTranscription] = useState("/həˈloʊ/");
  return (
    <div className="h-screen bg-body-blue">
      <Search />
      <div className="px-10 lg:px-20 mt-10">
        <div className="name-and-audio flex items-end">
          <p className="text-white font-medium text-4xl">{keyword}</p>
          <div>
            <GiSpeaker className="text-text-blue" size={38} />
          </div>
        </div>
        <p className="font-medium text-lg text-text-blue">{transcription}</p>
      </div>
    </div>
  );
}

export default Main;
