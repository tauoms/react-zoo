const Card = ({ name, likes, removeCard, addLike, removeLike }) => {
  let capitalizedName = name.slice(0, 1).toUpperCase() + name.slice(1);
  return (
    <div className="card">
      <img
        src={`https://source.unsplash.com/random/400×400/?${name}`}
        alt={`Photo of ${name}`}
      />
      <span
        onClick={removeCard}
        className="material-symbols-outlined removeButton"
      >
        close
      </span>
      <h2>{capitalizedName}</h2>
      <div className="likesDisplay">
        <span
          onClick={addLike}
          className="material-symbols-outlined likeButton"
        >
          thumb_up
        </span>
        <div className="likesMiddle">
          <span className="material-symbols-outlined">favorite</span> {likes}
        </div>
        <span
          onClick={removeLike}
          className="material-symbols-outlined likeButton"
        >
          thumb_down
        </span>
      </div>
    </div>
  );
};

export default Card;
