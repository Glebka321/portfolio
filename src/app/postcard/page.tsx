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
      <img className={styles.image} src="/postcardimage.png" alt={""} />
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
        An app to send postcards to your friends anonymously <br />
      </p>
      <p className={styles.header}>
        <b>Design process</b>
      </p>
      <p className={styles.overview}>
        With messenger apps it feels like we&apos;ve become spoiled with instant
        communication. Postcards was an exploration of bringing back the
        nostalgic feeling of connecting with friends that are far away by
        delaying the message. The product shifted to send postcards not just to
        friends but also co-workers, crushes etc.
      </p>
      {/* </div> */}
    </div>
  );
};

export default ProjectOverview;
