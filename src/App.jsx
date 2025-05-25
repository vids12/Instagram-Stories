import { useEffect, useState } from "react";
import "./App.css";
import { StoryList } from "./components/StoryList";
import { StoryViewer } from "./components/StoryViewer";

function App() {
  const [users, setUsers] = useState([]);
  var [currentIndex, setCurrentIndex] = useState(null);
  var thumbnailClickHandler = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    fetch("./usersList.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  },[]);

  return (
    <div>
      <StoryList thumbnailClickHandler={thumbnailClickHandler} users={users} />
      {currentIndex !== null && (
        <StoryViewer
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          users={users}
        />
      )}
    </div>
  );
}

export default App;
