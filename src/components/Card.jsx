const Card = ({ name }) => {
  let capitalizedName = name.slice(0, 1).toUpperCase() + name.slice(1);
  return (
    <div className="card">
      <img src={`https://source.unsplash.com/random/400×400/?${name}`} />
      <h2>{capitalizedName}</h2>
    </div>
  );
};

export default Card;
