import React from "react";
import css from "./style.module.css";

export default function Header() {
  return (
    <div className={css.Header}>
      <p className={css.logo}>Moviestan</p>
      <div className={css.categories}>
        <p className={css.cat}>Home</p>
        <p className={css.active}>Tv Shows</p>
        <p className={css.cat}>Movies</p>
        <p className={css.cat}>Upcoming</p>
      </div>
      <div className={css.menu}>
        <div className={css.line}></div>
        <div className={css.line}></div>
        <div className={css.line}></div>
      </div>
    </div>
  );
}
