import React from "react";
import css from "./style.module.css";
import img from "../../images/bg.png";
import Slider from "../Slider";
import { useHistory } from "react-router-dom";

export default function Body() {
  const history = useHistory();

  function handleClick() {
    history.push("/gg");
  }
  return (
    <div>
      <section className={css.container}>
        <div className={css.about}>
          <p>THE WITCHER</p>
          <h1>Season 1</h1>
          <button type="button" onClick={handleClick}>
            ABOUT
          </button>
        </div>
        <img className={css.photo} src={img} />
      </section>
      <Slider />
    </div>
  );
}
