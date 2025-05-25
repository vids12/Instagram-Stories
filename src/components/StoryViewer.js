import { useEffect, useRef, useState } from "react";
import { getRelativeTime } from "../utils/getRelativeTime";

export const StoryViewer = ({ currentIndex, setCurrentIndex, users }) => {
  var user = users[currentIndex];
  var stories = user?.stories;
  var autoTimer = useRef(null);
  var [fade, setFade] = useState(false);

  useEffect(() => {
    autoTimer.current = setTimeout(() => nextStory(), 5000);
    return () => {
      clearInterval(autoTimer.current);
    };
  }, [currentIndex]);

  const prevStory = () => {
    setFade(true);
    if (currentIndex === 0) setCurrentIndex(null);
    else setCurrentIndex(currentIndex - 1);
    setTimeout(() => setFade(false), 50);
  };
  const nextStory = () => {
    setFade(true);
    if (currentIndex === users?.length - 1) setCurrentIndex(null);
    else setCurrentIndex(currentIndex + 1);
    setTimeout(() => setFade(false), 50);
  };
  return (
    <div className="story-viewer">
      <div className="story__heading">
        <div className="story__progress-bar" key={currentIndex}>
          <div className="progress-bar active"></div>
        </div>
        <div className="story__header">
          <div className="story__user">
            <img
              src={user.profilePic}
              alt={user.username}
              className="profile-pic"
            />
            <div className="story__user-info">
              <p className="username">{user.username}</p>
              <p className="user-time">
                {getRelativeTime(stories[0].timestamp)}
              </p>
            </div>
          </div>
          <div className="story__close" onClick={() => setCurrentIndex(null)}>
            &times;
          </div>
        </div>
      </div>
      <div className="story__content">
        <img
          src={stories[0].url}
          alt={user.username}
          className={`${fade ? "fade-out" : "fade-in"}`}
        />
        <div className="tap-zone left" onClick={() => prevStory()}></div>
        <div className="tap-zone right" onClick={() => nextStory()}></div>
      </div>
    </div>
  );
};
