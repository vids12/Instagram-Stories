import { useEffect, useRef } from "react";
import { users } from "../data/usersList";
import { getRelativeTime } from "../utils/getRelativeTime";

export const StoryViewer = ({ currentIndex, setCurrentIndex }) => {
  var user = users[currentIndex];
  var stories = user?.stories;
  var autoTimer = useRef(null);

  useEffect(() => {
    autoTimer.current = setTimeout(() => nextStory(), 5000);
    return () => {
      clearInterval(autoTimer.current);
    };
  });

  const prevStory = () => {
    if (currentIndex === 0) setCurrentIndex(null);
    else setCurrentIndex(currentIndex - 1);
  };
  const nextStory = () => {
    if (currentIndex === users.length - 1) setCurrentIndex(null);
    else setCurrentIndex(currentIndex + 1);
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
        <img src={stories[0].url} alt={user.username} />
        <div className="tap-zone left" onClick={() => prevStory()}></div>
        <div className="tap-zone right" onClick={() => nextStory()}></div>
      </div>
    </div>
  );
};
