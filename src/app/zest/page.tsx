import React from "react";
import styles from "../Project.module.css";

const ProjectOverview = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {" "}
        <a
          href="https://www.instagram.com/thezestclub/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zest Club
        </a>
      </p>
      <img className={styles.image} src="/zestclubimage.png" />
      <div className={styles.description}>
        <p className={styles.header}>
          <b>Role</b>
        </p>
        <p className={styles.overview}>founder</p>

        <p className={styles.header}>
          <b>Duration</b>
        </p>
        <p className={styles.overview}>6 months</p>

        <p className={styles.header}>
          <b>Product</b>
        </p>
        <p className={styles.overview}>
          Zest Club was a project I launched during my last semester at
          UW-Madison in 2021. Nothing socially was happeing on campus during
          that time, so to solve that I decided to host small gatherings of 8
          students. To get in people had to text a story of when they impacted
          someones life and a song from their childhood. <br />
          To read more about how it was started: <br />
          <a
            href="https://gleb25.medium.com/a-speakeasy-in-wisco-46b4a8e7204a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>origin story</u>
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
