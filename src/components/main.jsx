import React, { useState, useEffect } from "react";
import Search from "./search";
import { GiSpeaker } from "react-icons/gi";
import axios from "axios";
import WordMeaning from "./wordMeaning";

function Main() {
  const [word, setWord] = useState();
  const [keyword, setKeyword] = useState("");
  const [transcription, setTranscription] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [audioLink, setAudioLink] = useState();
  const audio = new Audio(audioLink);

  function searchWord(e) {
    if (typeof e !== "string") e.preventDefault();
    axios
      .get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${
          typeof e === "string" ? e : word
        }`
      )
      .then((res) => {
        const data = res.data[0];
        setKeyword(data.word);
        setAudioLink(data.phonetics[0].audio);
        setTranscription(data.phonetic);
        setMeanings(data.meanings);
      })
      .catch((error) => console.log(error));
  }
  function getInput(e) {
    setWord(e.target.value);
  }
  useEffect(() => {
    searchWord("hello");
  }, []);
  return (
    <div>
      <Search submitForm={searchWord} getInput={getInput} />
      <div className="px-7 lg:px-20 mt-10">
        <div className="name-and-audio flex items-end">
          <p className="text-white font-medium text-4xl">{keyword}</p>
          <div onClick={() => audio.play()}>
            <GiSpeaker className="text-text-blue" size={38} />
          </div>
        </div>
        <p className="font-medium text-lg text-text-blue -mb-3">
          {transcription}
        </p>
        {Boolean(meanings.length) &&
          meanings.map((meaning) => (
            <WordMeaning
              key={meaning.partOfSpeech}
              partOfSpeech={meaning.partOfSpeech}
              definitions={meaning.definitions}
              searchWordFromSynonym={searchWord}
            />
          ))}
      </div>
    </div>
  );
}

export default Main;
