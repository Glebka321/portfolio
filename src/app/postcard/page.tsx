import React from "react";
import styles from "../Project.module.css";

const ProjectOverview = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <a
          href="https://www.sfpostcard.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          POSTCARD
        </a>
      </p>
      <img className={styles.image} src="/postcardimage.png" />
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
          an app to send postcards to your friends anonymously <br />
          exploration of engineering virality based on similar products from the
          past
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
