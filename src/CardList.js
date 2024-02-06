import Card from "./Card";

function CardList({ robots }) {
  console.log("Robots received in cardlist are", robots);
  if (robots.length) {
    return (
      <div className="row d-flex justify-content-center">
        {robots.map((robot) => {
          return <Card key={robot.id} name={robot.name} email={robot.email} />;
        })}
      </div>
    );
  } else {
    return <h2>Sorry but there is nothing to display.</h2>;
  }
}

export default CardList;
