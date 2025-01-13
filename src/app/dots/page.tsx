import React from "react";
import styles from "../Project.module.css";

const ProjectOverview = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {" "}
        <a
          href="https://www.thedotsgame.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          dots
        </a>
      </p>
      <img className={styles.image} src="/dotsimage.png" />
      <div className={styles.description}>
        <p className={styles.header}>
          <b>Role</b>
        </p>
        <p className={styles.overview}>creator</p>
        <p className={styles.header}>
          <b>Duration</b>
        </p>
        <p className={styles.overview}>weekend project</p>
        <p className={styles.header}>
          <b>Product</b>
        </p>
        <p className={styles.overview}>
          dots is a simple game to guess the combination of four colors
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
