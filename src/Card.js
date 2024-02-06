import "./Card.css";

function Card({ name, email }) {
  return (
    <div className="card bg-info shadow-lg">
      <img
        className="card-img-top"
        src={`https://robohash.org/${name}?200x200`}
        alt="Sample Robot"
      />
      <div className="card-body text-center">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
}

export default Card;
