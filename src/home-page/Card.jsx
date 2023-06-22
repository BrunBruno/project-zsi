import classes from "./Card.module.css";

function Card(props) {
  function CardText() {
    return <div className={classes["card-text"]}>{props.element.text}</div>;
  }

  function CardImage() {
    return <div className={classes["card-image"]}>{props.element.image}</div>;
  }

  return (
    <>
      <h2>
        {props.index + 1}. {props.element.name}
      </h2>
      <div className={classes.card}>
        {props.index % 2 === 1 ? (
          <>
            <CardText />
            <CardImage />
          </>
        ) : (
          <>
            <CardImage />
            <CardText />
          </>
        )}
      </div>
    </>
  );
}

export default Card;
