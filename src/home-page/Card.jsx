import classes from "./Card.module.css";

function Card(props) {
  function CardText() {
    return (
      <div className={classes["card-text"]}>
        <h2>
          {props.index + 1}. {props.element.name}
        </h2>
        {props.element.text}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius illo
          libero deserunt veniam ut omnis cumque a? Mollitia, ratione! Ratione
          quod maxime animi aliquam? Aperiam mollitia ab fuga veritatis labore?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa natus
          quidem assumenda? At magni nesciunt tempore atque commodi eos ex quo
          dolore! Corrupti nulla ipsam sequi, impedit atque numquam minima!
        </p>
      </div>
    );
  }

  function CardImage(imgProps) {
    const containerClass =
      imgProps.pos === 0
        ? classes["card-image-container-left"]
        : classes["card-image-container-right"];
    return (
      <div className={classes["card-image"]}>
        <div className={`${classes["card-image-container"]} ${containerClass}`}>
          <p>
            <img src={props.element.image} />
          </p>
          <p></p>
          <p></p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={classes.card}>
        {props.index % 2 === 1 ? (
          <>
            <CardText />
            <CardImage pos={props.index % 2} />
          </>
        ) : (
          <>
            <CardImage pos={props.index % 2} />
            <CardText />
          </>
        )}
      </div>
    </>
  );
}

export default Card;
