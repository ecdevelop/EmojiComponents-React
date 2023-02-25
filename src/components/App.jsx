import React from "react";
import Entry from "./Entry.jsx";
import emojis from "../emojipedia.js";

function App() {
  function createEntry(entry) {
    return (
      <Entry
        id={entry.id}
        key={entry.id}
        emoji={entry.emoji}
        name={entry.name}
        meaning={entry.meaning}
      />
    );
  }

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojis.map(createEntry)}</dl>
    </div>
  );
}

export default App;
