import React from "react";
import styles from "../Project.module.css";

const ProjectOverview = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <a
          href="https://apps.apple.com/us/app/four-seven-eight/id6749875998"
          target="_blank"
          rel="noopener noreferrer"
        >
          478
        </a>
      </p>
      <img className={styles.image} src="/478.png" alt={""} />
      <div className={styles.description}>
        <p className={styles.header}>
          <b>Role</b>
        </p>
        <p className={styles.overview}>Creator</p>
        <p className={styles.header}>
          <b>Duration</b>
        </p>
        <p className={styles.overview}>2 week sprint</p>
        <p className={styles.header}>
          <b>Product</b>
        </p>
        <p className={styles.overview}>
          An application to practice a breathing exercise that reduces anxiety
        </p>
        <p className={styles.header}>
          <b>Design process</b>
        </p>
        <p className={styles.overview}>
          I wanted to create a very minimalistic applciation that I could refer
          to whenever I needed a moment. Breathing exercise are a superpower and
          something I&apos;ve been exploring and trying to integrate in my daily
          routine. The app focuses on just one excercise, when a user opens the app 
          they can immediately start the exercise. There is no lengthy onboarding or 
          authorization all data is stored on the device.
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
