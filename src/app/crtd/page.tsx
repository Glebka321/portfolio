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
          href="https://www.trycrtd.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          crtd{" "}
        </a>
      </p>
      <img className={styles.image} src="/crtd1.png" alt={"first"} />
      <img className={styles.image} src="/crtd2.png" alt={"second"} />
      <img className={styles.image} src="/crtd3.png" alt={"third"} />
      {/* <div className={styles.description}> */}
      <p className={styles.header}>
        <b>Role</b>
      </p>
      <p className={styles.overview}>Co-founder</p>
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
      <p className={styles.header}>
        <b>Design process</b>
      </p>
      <p className={styles.overview}>
        After reading about the Theory of Maximum Taste I knew I needed to
        re-evalaute the content I was consuming but couldn&apos;t find a place
        to easily discover long form content. I had a feeling others might be
        experiencing the same. To test the idea I created a newsletter with
        links of content my friends enjoyed. <br />
        Each week a group of friends would text me 3 of the favorite things
        they&apos;ve consumed, I&apos;d aggregate the links and send them out on
        Sunday using Mailchimp <br />
        Below is how the newsletter looked:
      </p>
      <img
        className={styles.image}
        src={isMobile ? "/crtd_mobile_news.png" : "/crtdfirst.png"}
        alt={""}
      />
      <p className={styles.overview}>
        There was a lot of manual work with the newsletter, and reaching out to
        people to remind them to send links wasn&apos;t ideal. I decided to
        automate the process to make a more scalable solution. The second
        iteration involved creating the UX through SMS and a webpage. During the
        onboarding process users would get sent a contact card that they could
        send links to. Each week they&apos;d receive a text message with a url
        to a weekly digest. This worked okay for awhile but didn&apos;t have
        enough feedback loops for users to continue to share links
      </p>
      <img
        className={styles.image}
        src={isMobile ? "/crtd_contact_mobile.png" : "/crtdsecond.png"}
        alt={""}
      />
      <p className={styles.overview}>
        On the final iteration we added integrations with Spotify, Apple Music,
        Goodreads and Letterboxd to pull data from those services. I still
        believe that SMS is the most low friction UX for a product like this.
        Thats why the core of the product remained the same -- sharing links via
        text message. The result was a dynamic link-in-bio page users could use
        to display the content they&apos;re consuming as well as discover what
        people they follow are into.
      </p>
      <img
        className={styles.image}
        src={isMobile ? "/crtdprofilemobile.png" : "/crtdprofile.png"}
        alt={""}
      />
      <p className={styles.header}>
        <b>Reflection</b>
      </p>
      <p className={styles.overview}>
        I believe there&apos;s an opportunity in building on top of messenger
        apps as the primary interface for social applications, as those are the
        applications people open everyday. With crtd we were eventually planning
        out building support for Telegram to cover the European market and
        Whatsapp for LATAM market. During this time we received over 26,000
        submissions.
      </p>
      <p className={styles.header}>
        <b>Other assets</b>
      </p>
      <p className={styles.overview}>Widget for iOS</p>
      <img
        className={styles.image}
        src={isMobile ? "/crtd_mobile_widget.png" : "/crtdthird.png"}
        alt={""}
      />
      <p className={styles.overview}>Onboarding video</p>
      <video
        controls
        autoPlay
        loop
        muted
        className={isMobile ? styles.videoInviteMobile : styles.videoInvite}
      >
        <source src="/onboarding.mp4" type="video/mp4" />
      </video>
      <p className={styles.overview}>
        Personal invitation cards to invite users
      </p>
      <video
        controls
        autoPlay
        loop
        muted
        className={isMobile ? styles.videoInviteMobile : styles.videoInvite}
      >
        <source src="/crtd_invites.mp4" type="video/mp4" />
      </video>

      <p className={styles.overview}>Billboard Campaign in NYC</p>
      <video
        controls
        autoPlay
        loop
        muted
        className={isMobile ? styles.videoInviteMobile : styles.videoInvite}
      >
        <source src="/crtd_billboard.mp4" type="video/mp4" />
      </video>
      {/* </div> */}
    </div>
  );
};

export default ProjectOverview;
