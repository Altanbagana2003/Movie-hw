import React from "react";
import css from "./style.module.css";
import img from "../../images/bg.png";
import { useHistory } from "react-router-dom";

export default function SecondPage() {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <div className={css.container}>
      <button type="button" onClick={handleClick}>
        Back
      </button>
      <img src={img} />
      <div className={css.description}>
        <h1>The Witcher</h1>
        <p>
          Witchers are once-normal humans who got mutated by a combination of
          medieval science and magic, which made them superhuman (more Captain
          America than Superman) and able to take potions too toxic for normal
          people.
        </p>
      </div>
    </div>
  );
}
