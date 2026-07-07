import React from "react";
import styles from "../Project.module.css";
import { ProjectImage } from "../ProjectMedia";

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
      <ProjectImage
        src="/478.png"
        width={1920}
        height={1080}
        alt={""}
        priority
      />
      <div className={styles.description}>
        <p className={styles.header}>
          <b>Role</b>
        </p>
        <p className={styles.overview}>Founder</p>
        <p className={styles.header}>
          <b>Date</b>
        </p>
        <p className={styles.overview}>September 2025</p>
        <p className={styles.header}>
          <b>Product</b>
        </p>
        <p className={styles.overview}>
          iOS app to practice 4-7-8 breathing method
        </p>
        <p className={styles.header}>
          <b>Design</b>
        </p>
        <p className={styles.overview}>
          We take roughly 20,000 breaths each day, and most of them go
          unnoticed. Taking the time to shift our focus on our breathing has
          profound impacts. This app is an ode to my favorite breathing method.
          When a user opens the app they can immediately start the exercise.
          There is no lengthy onboarding or authorization, all data is stored on
          device.
        </p>
        <p className={styles.overview}>
          Around 50+ installs each month without any marketing.
        </p>
        <p className={styles.overview}>
          A comment from a user from Ireland that encapsulates the product best:
          &quot;5 stars. It is free, no ads, does exactly what it has to
          do&quot;
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
