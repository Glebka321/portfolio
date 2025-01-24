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
      <img className={styles.image} src="/dotsimage.png" alt={""} />
      {/* <div className={styles.description}> */}
      <p className={styles.header}>
        <b>Role</b>
      </p>
      <p className={styles.overview}>Creator</p>
      <p className={styles.header}>
        <b>Duration</b>
      </p>
      <p className={styles.overview}>Weekend project</p>
      <p className={styles.header}>
        <b>Product</b>
      </p>
      <p className={styles.overview}>
        dots is a simple game to guess the combination of four colors
      </p>
      <p className={styles.header}>
        <b>Design process</b>
      </p>
      <p className={styles.overview}>
        Inspired by mastermind a game I played as a kid. The biggest challenge
        was creating the feedback after a player submits a guess. When people
        played for the first time they shared that they thought the squares
        represented the order of the circles, which is not the case. Experience
        could be improved by adding a modal that explains the rules
      </p>
      {/* </div> */}
    </div>
  );
};

export default ProjectOverview;
