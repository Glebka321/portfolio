import React from "react";
import styles from "../Project.module.css";
import { ProjectImage } from "../ProjectMedia";

const ProjectOverview = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {" "}
        <a
          href="https://www.izzy.ink"
          target="_blank"
          rel="noopener noreferrer"
        >
          izzy & friends{" "}
        </a>
      </p>
      <ProjectImage
        src="/izzy_portfolio.001.png"
        width={1920}
        height={1080}
        alt={"first"}
        priority
      />
      <ProjectImage
        src="/izzy_portfolio.002.png"
        width={1920}
        height={1080}
        alt={"second"}
      />
      <ProjectImage
        src="/izzy_portfolio.003.png"
        width={1920}
        height={1080}
        alt={"third"}
      />
      <div className={styles.description}>
        <p className={styles.header}>
          <b>Role</b>
        </p>
        <p className={styles.overview}>Founder</p>
        <p className={styles.header}>
          <b>Date</b>
        </p>
        <p className={styles.overview}>November 2025</p>
        <p className={styles.header}>
          <b>Product</b>
        </p>
        <p className={styles.overview}>an AI companion app</p>
        <p className={styles.header}>
          <b>Design</b>
        </p>
        <p className={styles.overview}>
          In 8th grade on a class trip to Budapest, the city was filled with
          posters for the movie Her. On return home I decided to watch it,
          within the first 20 minutes of the movie I shut my laptop down,
          feeling deeply uncomfortable. In 2023 in the midst of the AI boom I
          decided to give the film another shot, and found it beautifully done.
          A valuable lesson that it&apos;s worth leaning into the things you
          initially reject.
        </p>
        <p className={styles.overview}>
          In October 2025, I started thinking more about AI companionship. I
          knew for sure, is that I didn&apos;t want to create a product that
          would replace human connection. But rather, help us better understand
          ourselves by interacting with AI companions. An article written by
          <a
            href="https://kk.org/thetechnium/emotional-agents/"
            target="_blank"
            rel="noopener noreferrer"
            className="styles.underline"
          >
            {" "}
            Kevin Kelly on emotional agents
          </a>{" "}
          gave me more conviction that this is the future, and it&apos;s worth
          playing a part in it.
        </p>
        <p className={styles.overview}>
          Launched the app on Dec 13th, 2025 and within 12 hours were #5 on the
          App Store in the paid lifestyle category.{" "}
          <a
            href="https://medium.com/@gleb25/how-to-get-to-5-on-the-app-store-9c1b31d983e5"
            target="_blank"
            rel="noopener noreferrer"
            className="styles.underline"
          >
            The story of how we got there in more detail can be read on
            Medium.{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
