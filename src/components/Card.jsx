const Card = ({ name, likes, removeCard, addLike, removeLike }) => {
  // let capitalizedName = name.slice(0, 1).toUpperCase() + name.slice(1);
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
      <h2>{name}</h2>

      <div className="likesDisplay">
        <button onClick={addLike} className="likeButtons">
          <span className="material-symbols-outlined">thumb_up</span>
        </button>
        <div className="likesMiddle">
          <span className="material-symbols-outlined">favorite</span> {likes}
        </div>
        <button onClick={removeLike} className="likeButtons">
          <span className="material-symbols-outlined">thumb_down</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
