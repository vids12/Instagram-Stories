import { useState } from "react";
import "./App.css";
import { StoryList } from "./components/StoryList";
import { StoryViewer } from "./components/StoryViewer";

function App() {
  var [currentIndex, setCurrentIndex] = useState(null);
  var thumbnailClickHandler = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <StoryList thumbnailClickHandler={thumbnailClickHandler} />
      {currentIndex !== null && (
        <StoryViewer
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </div>
  );
}

export default App;
