"use client";
import React from "react";
import styles from "../Project.module.css";
import { useState, useEffect } from "react";

const ProjectOverview = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the breakpoint as needed
    };

    // Initial check
    checkMobile();

    // Add a resize event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
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
      <img
        className={styles.image}
        src={isMobile ? "/zestmobile.png" : "/zest.png"}
        alt={""}
      />
      <div className={styles.description}>
        <p className={styles.header}>
          <b>Role</b>
        </p>
        <p className={styles.overview}>Founder</p>

        <p className={styles.header}>
          <b>Duration</b>
        </p>
        <p className={styles.overview}>6 months</p>

        <p className={styles.header}>
          <b>Product</b>
        </p>
        <p className={styles.overview}>
          Zest Club was a project I launched during my last semester at
          UW-Madison in Spring of 2021. Nothing socially was happeing on campus
          during that time, so to solve that I decided to host small gatherings
          of 8 students. To get in people had to text a story of when they
          impacted someones life and a song from their childhood. <br />
        </p>
        <p className={styles.header}>
          <b>Design process</b>
        </p>
        <p className={styles.overview}>
          The idea was written in my notes app while I was on a plane returning
          to my final semester on campus. Over a weekend created a landing page,
          social media account, downloaded the student body email list. Most of
          the work involved iterating on the copy of the emails to see which had
          a higher open rate, as well as organizing events. The price to attend
          was $15 and was my first project that started earning $.
        </p>
        <p className={styles.header}>
          <b>Reflection</b>
        </p>
        <p className={styles.overview}>
          Before launching it I wasn&apos;t sure what the response would be but
          it was worth trying out. Zest Club resonated immediately, within 20
          minutes of sending out the first email blast, students started
          applying to get in.
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
