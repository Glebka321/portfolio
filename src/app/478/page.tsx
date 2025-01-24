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
      <video controls autoPlay loop muted className={styles.video}>
        <source src="/478demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.description}>
        <p className={styles.header}>
          <b>Role</b>
        </p>
        <p className={styles.overview}>Creator</p>
        <p className={styles.header}>
          <b>Duration</b>
        </p>
        <p className={styles.overview}>Week night project</p>
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
          routine. The initial page serves to explain the exercise for someone
          who might not be familiar with the concept as well as give a moment to
          prepare before starting. The design could be enhanced with an audio
          component, guiding the user when to inhale / exhale if a user wanted
          to practice with their eyes closed.
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
