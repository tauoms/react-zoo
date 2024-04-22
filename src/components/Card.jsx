const Card = ({ name, likes }) => {
  let capitalizedName = name.slice(0, 1).toUpperCase() + name.slice(1);
  return (
    <div className="card">
      <span class="material-symbols-outlined removeButton">close</span>
      <img src={`https://source.unsplash.com/random/400×400/?${name}`} />
      <h2>{capitalizedName}</h2>
      <p className="likesDisplay">
        <span className="material-symbols-outlined likeButton">thumb_up</span>
        <div className="likesMiddle">
          <span class="material-symbols-outlined">favorite</span> {likes}
        </div>
        <span className="material-symbols-outlined likeButton">thumb_down</span>
      </p>
    </div>
  );
};

export default Card;
