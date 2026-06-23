import React from "react";
import styles from "../Project.module.css";
import { ProjectImage, ProjectPicture } from "../ProjectMedia";

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
      <ProjectImage
        src="/crtd1.png"
        width={1920}
        height={1080}
        alt={"first"}
        priority
      />
      <ProjectImage src="/crtd2.png" width={1920} height={1080} alt={"second"} />
      <ProjectImage src="/crtd3.png" width={1920} height={1080} alt={"third"} />
      <div className={styles.description}>
        <p className={styles.header}>
          <b>Role</b>
        </p>
        <p className={styles.overview}>co-founder</p>
        <p className={styles.header}>
          <b>Duration</b>
        </p>
        <p className={styles.overview}>August 2023</p>
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
          re-evaluate the content I was consuming but couldn&apos;t find a place
          to easily discover good long form content. I had a feeling others
          might be experiencing the same. To test the idea I created a
          newsletter with links of content my friends enjoyed. <br />
          Each week a group of friends would text me 3 of the favorite things
          they&apos;ve consumed, I&apos;d aggregate the links and send them out
          on Sunday using Mailchimp <br />
          Below is how the newsletter looked:
        </p>
        <ProjectPicture
          desktop={{ src: "/crtdfirst.png", width: 1920, height: 1080 }}
          mobile={{ src: "/crtd_mobile_news.png", width: 1080, height: 1920 }}
          alt={""}
        />
        <p className={styles.overview}>
          The second iteration involved creating the UX through SMS and a
          webpage. During the onboarding process users would get sent a contact
          card that they could send links to. Each week they&apos;d receive a
          text message with a url to a weekly digest.
        </p>
        <ProjectPicture
          desktop={{ src: "/crtdsecond.png", width: 1920, height: 1080 }}
          mobile={{ src: "/crtd_contact_mobile.png", width: 1080, height: 1920 }}
          alt={""}
        />
        <p className={styles.overview}>
          Final iteration, was implemented through integrations with Spotify,
          Apple Music, Goodreads and Letterboxd to pull data from those
          services. I still believe that SMS is the most low friction UX for a
          product like this. That&apos;s why the core of the product remained the same
          -- sharing links via text message. The result was a dynamic
          link-in-bio page users could use to display the content they&apos;re
          consuming as well as discover what people they follow are into.
        </p>
        <ProjectPicture
          desktop={{ src: "/crtdprofile.png", width: 1920, height: 1080 }}
          mobile={{ src: "/crtdprofilemobile.png", width: 1080, height: 1920 }}
          alt={""}
        />
        <p className={styles.header}>
          <b>Reflection</b>
        </p>
        <p className={styles.overview}>
          I believe there&apos;s an opportunity in building on top of messenger
          apps as the primary interface for social applications, as those are
          the applications people open everyday. During the duration of the
          project time we received over 26,000 submissions.
        </p>
        <p className={styles.header}>
          <b>Other assets</b>
        </p>
        <div className={styles.assetRow}>
          <div className={styles.assetItem}>
            <p className={styles.assetTitle}>Widget for iOS</p>
            <ProjectPicture
              desktop={{ src: "/crtdthird.png", width: 1920, height: 1080 }}
              mobile={{
                src: "/crtd_mobile_widget.png",
                width: 1080,
                height: 1920,
              }}
              alt={""}
            />
          </div>
          <div className={styles.assetItem}>
            <p className={styles.assetTitle}>Onboarding video</p>
            <video
              controls
              loop
              muted
              playsInline
              preload="metadata"
              poster="/onboarding_poster.jpg"
              className={styles.videoInvite}
            >
              <source src="/onboarding_optimized.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.assetItem}>
            <p className={styles.assetTitle}>
              Personal invitation cards to invite users
            </p>
            <video
              controls
              loop
              muted
              playsInline
              preload="metadata"
              poster="/crtd_invites_poster.jpg"
              className={styles.videoInvite}
            >
              <source src="/crtd_invites_optimized.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.assetItem}>
            <p className={styles.assetTitle}>Billboard Campaign in NYC</p>
            <video
              controls
              loop
              muted
              playsInline
              preload="metadata"
              poster="/crtd_billboard_poster.jpg"
              className={styles.videoInvite}
            >
              <source src="/crtd_billboard_optimized.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
