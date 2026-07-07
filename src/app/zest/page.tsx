import React from "react";
import styles from "../Project.module.css";
import { ProjectPicture } from "../ProjectMedia";

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
      <ProjectPicture
        desktop={{ src: "/zest.png", width: 1920, height: 1080 }}
        mobile={{ src: "/zestmobile.png", width: 1080, height: 1920 }}
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
        <p className={styles.overview}>February 2021</p>

        <p className={styles.header}>
          <b>Product</b>
        </p>
        <p className={styles.overview}>
          A private application based &quot;speakeasy&quot; for students
        </p>
        <p className={styles.header}>
          <b>Design</b>
        </p>
        <p className={styles.overview}>
          Zest Club was a project I launched during my last semester at
          UW-Madison in Spring of 2021. Nothing socially was happening on campus
          during that time, so to solve that I decided to host small gatherings
          of 8 students. To get in people had to text a story of when they
          impacted someone&apos;s life and a song from their childhood.
        </p>
        <p className={styles.overview}>
          Over a weekend created a landing page, social media account,
          downloaded the student body email list. The price to attend was $15
          and was my first project that started earning $.
        </p>

        <p className={styles.overview}>
          Before launching it I wasn&apos;t sure what the response would be but
          it was worth trying out. Zest Club resonated immediately, within 20
          minutes of sending out the first email blast, students started
          applying to get in. It was gratifying to create an experience that
          people were willing to pay for. As well as the overall impact it had
          on campus: overhearing students randomly bring it up during class.
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
