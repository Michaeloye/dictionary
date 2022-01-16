import React, { useState, useEffect } from "react";
import Search from "./search";
import { GiSpeaker } from "react-icons/gi";
import axios from "axios";
import WordMeaning from "./wordMeaning";

function Main() {
  const [word, setWord] = useState();
  const [keyword, setKeyword] = useState("Hello");
  const [transcription, setTranscription] = useState("həˈloʊ");
  const [meanings, setMeanings] = useState([]);

  function submitForm(e) {
    e.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        const data = res.data[0];
        setKeyword(data.word);
        setTranscription(data.phonetic);
        setMeanings(data.meanings);
      })
      .catch((error) => console.log(error));
  }
  function searchWordFromSynonym(w) {
    setWord(w);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${w}`)
      .then((res) => {
        const data = res.data[0];
        setKeyword(data.word);
        setTranscription(data.phonetic);
        setMeanings(data.meanings);
      })
      .catch((error) => console.log(error));
  }
  function getInput(e) {
    setWord(e.target.value);
  }

  return (
    <div>
      <Search submitForm={submitForm} getInput={getInput} />
      <div className="px-7 lg:px-20 mt-10">
        <div className="name-and-audio flex items-end">
          <p className="text-white font-medium text-4xl">{keyword}</p>
          <div>
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
              searchWordFromSynonym={searchWordFromSynonym}
            />
          ))}
      </div>
    </div>
  );
}

export default Main;
