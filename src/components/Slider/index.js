import React from "react";
import css from "./style.module.css";
import img from "../../images/bg.png";

export default function Slider() {
  return (
    <div className={css.slider}>
      <div className={css.book}>
        <img src={img} />
        <p>The Witcher</p>
      </div>
      <div className={css.book}>
        <img src={img} />
        <p>The Witcher</p>
      </div>
      <div className={css.book}>
        <img src={img} />
        <p>The Witcher</p>
      </div>
      <div className={css.book}>
        <img src={img} />
        <p>The Witcher</p>
      </div>
      <div className={css.book}>
        <img src={img} />
        <p>The Witcher</p>
      </div>
      <div className={css.book}>
        <img src={img} />
        <p>The Witcher</p>
      </div>
      <div className={css.book}>
        <img src={img} />
        <p>The Witcher</p>
      </div>
      <div className={css.book}>
        <img src={img} />
        <p>The Witcher</p>
      </div>
    </div>
  );
}
