import "./card.styles.css";

const Card = ({user}) => {
  const { name, id, email } = user;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`Employee ${name}`}
        src={`https://robohash.org/${id + 3}?set=set5&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
