import React from "react";
import styles from "../Project.module.css";

const ProjectOverview = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {" "}
        <a
          href="https://www.trycrtd.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          crtd{" "}
        </a>
      </p>
      <img className={styles.image} src="/crtd1.png" />
      <img className={styles.image} src="/crtd2.png" />
      <img className={styles.image} src="/crtd3.png" />
      <div className={styles.description}>
        <p className={styles.header}>
          <b>Role</b>
        </p>
        <p className={styles.overview}>co-founder</p>
        <p className={styles.header}>
          <b>Duration</b>
        </p>
        <p className={styles.overview}>1.5 years</p>
        <p className={styles.header}>
          <b>Product</b>
        </p>
        <p className={styles.overview}>
          crtd is an application to discover what your friends are reading /
          watching / listening to <br />
          it works by connecting your spotify, apple music, goodreads and
          letterboxd accounts or by sharing links directly via SMS
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
