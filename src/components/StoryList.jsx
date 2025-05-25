export const StoryList = ({ thumbnailClickHandler, users }) => {
  return (
    <div className="story-list">
      {users?.map(({ username, profilePic }, index) => {
        return (
          <div
            key={index}
            className="story-thumbnail"
            onClick={() => thumbnailClickHandler(index)}
          >
            <img src={profilePic} alt={username} className="profile-pic" />
            <p className="username">{username}</p>
          </div>
        );
      })}
    </div>
  );
};
