import React from "react";
import styles from "../Project.module.css";

const ProjectOverview = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>478</p>
      <video controls className={styles.video}>
        <source src="/478demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.description}>
        <p className={styles.header}>
          <b>Role</b>
        </p>
        <p className={styles.overview}>creator</p>
        <p className={styles.header}>
          <b>Duration</b>
        </p>
        <p className={styles.overview}>week night project</p>
        <p className={styles.header}>
          <b>Product</b>
        </p>
        <p className={styles.overview}>
          a single use application to practice a breathing exercise that reduces
          anxiety
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
