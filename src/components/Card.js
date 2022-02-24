import "./Card.css";
import Button from "./Button";

function Card(props) {
  const classes = "card " + props.className;
  return (
    <div className={classes}>
      <h1>Hello World</h1>
      <img src={require("../images/1.jpg")} height="100" width="185" />

      <div className="card-content">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-description">{props.description}</div>

        <div className="btn">
          <Button type="submit">View More</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
