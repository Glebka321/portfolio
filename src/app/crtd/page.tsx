import React from "react";
import styles from "../Project.module.css";

const ProjectOverview = () => {
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
      <img className={styles.image} src="/crtd1.png" />
      <img className={styles.image} src="/crtd2.png" />
      <img className={styles.image} src="/crtd3.png" />
      <div className={styles.description}>
        <p className={styles.header}>
          <b>Role</b>
        </p>
        <p className={styles.overview}>co-founder</p>
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
          re-evalaute the content I was consuming but couldn't find a place to
          easily discover long form content. I had a feeling others might be
          experiencing the same. To test the idea I created a newsletter with
          links of content my friends enjoyed. <br />
          Each week a group of friends would text me 3 of the favorite things
          they've consumed, I'd aggregate the links and send them out on Sunday
          using Mailchimp <br />
          Below is how the newsletter looked:
        </p>
        <img className={styles.image} src="/crtdfirst.png" />
        <p className={styles.overview}>
          There was a lot of manual work with the newsletter, and reaching out
          to people to remind them to send links wasn't ideal. I decided to
          automate the process to make a more scalable solution. The second
          iteration involved creating the UX through SMS and a webpage. During
          the onboarding process users would get sent a contact card that they
          could send links to. Each week they'd receive a text message with a
          url to a weekly digest. This worked okay for awhile but didn't have
          enough feedback loops for users to continue to share links
        </p>
        <img className={styles.image} src="/crtdsecond.png" />
        <p className={styles.overview}>
          The last iteration was more invloved. This time with a co-founder. The
          core of the product remained the same -- sharing links via SMS. We
          added integrations with Spotify, Apple Music, Goodreads and Letterboxd
          to pull data from those services. The result was a dynamic link-in-bio
          page users could use to display the content they're consuming as well
          as discover what people they follow are into.
        </p>
        <p className={styles.header}>
          <b>Other assets</b>
        </p>
        <p className={styles.overview}>
          Personal invitation cards to invite users
        </p>
        <video controls autoPlay loop muted className={styles.videoInvite}>
          <source src="/crtd_invites.mp4" type="video/mp4" />
        </video>
        <p className={styles.overview}>Widget for iOS</p>
        <img className={styles.image} src="/crtdthird.png" />
      </div>
    </div>
  );
};

export default ProjectOverview;
