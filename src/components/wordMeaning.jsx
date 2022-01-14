import React from "react";
import SynonymCard from "./synonymCard";

function WordMeaning({ partOfSpeech, definitions }) {
  return (
    <div className="text-lg">
      <p className="text-white mt-5 ml-5">
        <i>{partOfSpeech}</i>
      </p>
      {Boolean(definitions.length) &&
        definitions.map((definition) => (
          <div>
            <p className="text-text-blue mt-3">
              <span className="text-white">meaning: </span>
              {definition.definition}
            </p>
            <p className="text-text-blue mt-2">
              <span className="text-white">example: </span>
              {definition.example}
            </p>
            <div>
              {Boolean(definition.synonyms.length) && (
                <div className="flex flex-wrap mt-2 text-white items-start">
                  <p>similar: </p>
                  {definition.synonyms.map((synonym) => (
                    <SynonymCard word={synonym} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default WordMeaning;
