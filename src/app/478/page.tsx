import React from "react";
import styles from "../Project.module.css";

const ProjectOverview = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <a
          href="https://www.4-7-8.cc"
          target="_blank"
          rel="noopener noreferrer"
        >
          478
        </a>
      </p>
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
          an application to practice a breathing exercise that reduces anxiety
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
