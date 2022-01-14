import React, { useState, useEffect } from "react";
import Search from "./search";
import { GiSpeaker } from "react-icons/gi";
import axios from "axios";

function Main() {
  const [word, setWord] = useState();
  const [keyword, setKeyword] = useState("Hello");
  const [transcription, setTranscription] = useState("həˈloʊ");

  function submitForm(e) {
    e.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        console.log(res.data[0]);
        setKeyword(res.data[0].word);
        setTranscription(res.data[0].phonetic);
      })
      .catch((error) => console.log(error));
  }
  function getInput(e) {
    setWord(e.target.value);
  }

  return (
    <div className="h-screen bg-body-blue">
      <Search submitForm={submitForm} getInput={getInput} />
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
