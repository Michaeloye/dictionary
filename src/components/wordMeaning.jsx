import React from "react";

function WordMeaning({ partOfSpeech, definitions }) {
  return (
    <div className="mt-3">
      <p className="text-white ">
        <i>{partOfSpeech}</i>
      </p>
      {Boolean(definitions.length) &&
        definitions.map((definition) => (
          <div>
            <p className="text-text-blue">{definition.definition}</p>
            <p className="text-text-blue">
              <span className="text-white">example: </span>
              {definition.example}
            </p>
            <div>
              <p>
                similar:{" "}
                {Boolean(definition.synonyms.length) &&
                  definition.synonyms.map((synonym) => synonym)}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default WordMeaning;
