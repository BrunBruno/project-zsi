import classes from "./Card.module.css";

function Card(props) {
  function CardText() {
    const containerClass =
      props.index % 2 === 1
        ? classes["card-text-bg-left"]
        : classes["card-text-bg-right"];
    return (
      <div className={`${classes["card-text"]} ${containerClass}`}>
        <h2>
          <span>
            {props.index + 1}. {props.element.name}
          </span>
        </h2>
        <h4>{props.element.maintext}</h4>
        <span>{props.element.text}</span>
      </div>
    );
  }

  function CardImage() {
    const containerClass =
      props.index % 2 === 0
        ? classes["card-image-container-left"]
        : classes["card-image-container-right"];
    return (
      <div className={classes["card-image"]}>
        <a href={props.element.link} target="_blank">
          <div
            className={`${classes["card-image-container"]} ${containerClass}`}
          >
            <p>
              <img src={props.element.image} alt={props.element.name} />
            </p>
            <p></p>
            <p></p>
          </div>
        </a>
      </div>
    );
  }

  return (
    <>
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
