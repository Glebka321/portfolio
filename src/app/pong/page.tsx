import React from "react";
import styles from "../Project.module.css";
import { ProjectImage } from "../ProjectMedia";

const ProjectOverview = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {" "}
        <a
          href="https://www.poolside.ink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pool Pong
        </a>
      </p>
      <ProjectImage
        src="/pong.001.png"
        width={1920}
        height={1080}
        alt={""}
        priority
      />
      <div className={styles.description}>
        <p className={styles.header}>
          <b>Role</b>
        </p>
        <p className={styles.overview}>founder</p>
        <p className={styles.header}>
          <b>Date</b>
        </p>
        <p className={styles.overview}>April 2026</p>
        <p className={styles.header}>
          <b>Product</b>
        </p>
        <p className={styles.overview}>classic pong game, inside a pool</p>
        <p className={styles.header}>
          <b>Design process</b>
        </p>
        <p className={styles.overview}>
          My first game I ever built, was Pong in 9th grade. Our computer
          science class in high school was brutal, we were studying C and using
          MS DOS as the operating system. Our programming teacher was infamous
          for having the highest standards, it was already a competitive school
          (6 days a week with most classes being just math and physics) we
          weren’t allowed to use a mouse, just terminal commands. The
          expectation was to complete each project during a class period, we’d
          have to sneak back into the computer lab in order to submit on time.
          The pong game in MS DOS was designed by manipulating each pixel on the
          screen. But I remember it was so liberating, to create something I
          could use myself. Now 12 years later, I can create the game in a few
          prompts, pretty fascinating
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
