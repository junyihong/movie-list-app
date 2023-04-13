import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./DetailMovie.module.css";

function DetailMovie({
  id,
  mediumImg,
  originalImg,
  title,
  description_intro,
  rating,
  genres,
  year,
}) {
  return (
    <div
      id={id}
      className={styles.DM__container}
      style={{
        backgroundImage: `url(${originalImg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.DM__inner}>
        <img src={mediumImg} alt={title} className={styles.DM__img} />
        <h2 className={styles.DM__title}>
          {title} / {year}
        </h2>

        <p>
          {description_intro.length > 230
            ? `${description_intro.slice(0, 230)}...`
            : description_intro}
        </p>
        <span className={styles.DM__rating}>
          Rating : <span className={styles.DM__star}>&nbsp;★</span>&nbsp;&nbsp;
          {rating}{" "}
        </span>
        <ul className={styles.DM__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
DetailMovie.protoTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default DetailMovie;
