import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src={"/image.jpg"}
          className={styles.image}
          width={200}
          height={200}
          alt={"image"}
        />
        <p className={styles.headerText}>
          <b>Gleb Tsyganov</b> <br /> <br />
          product designer / entrepreneur
        </p>
      </header>
      <div className={styles.projects}>
        <div className={styles.project}>
          <a
            href="https://www.trycrtd.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b className={styles.title}>crtd</b>
          </a>
          <p className={styles.description}>
            a social application to find out what your friends are <br />
            reading / watching / listening to <br />
            works by connecting your spotify, apple music, goodreads, letterboxd
            account <br /> or by sharing links directly via SMS
          </p>
        </div>
        <div className={styles.project}>
          <a
            href="https://www.instagram.com/thezestclub/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b className={styles.title}>zest club</b>
          </a>
          <p className={styles.description}>
            a private application based "speakeasy" for students <br />
            to get in people had to text a story of a time when they impacted
            someones life
            <br />
            first project to earn cash
          </p>
        </div>
        <div className={styles.project}>
          <a
            href="https://x.com/GlebTsyganov/status/1232777636834877440"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b className={styles.title}>souply</b>
          </a>
          <p className={styles.description}>
            an app that located free food around campus
            <br />
          </p>
        </div>
        <div className={styles.project}>
          <a
            href="https://www.thedotsgame.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b className={styles.title}>dots</b>
          </a>
          <p className={styles.description}>
            color guessing game like wordle <br /> <br />
            <a href="/dots.png">image</a>
          </p>
        </div>
        <div className={styles.project}>
          <a
            href="https://www.4-7-8.cc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b className={styles.title}>478</b>
          </a>
          <p className={styles.description}>
            a breathing exercise to reduce anxiety <br /> <br />
            <a href="/478demo.m4v">image</a>
          </p>
        </div>
      </div>
      <footer className={styles.footer}>
        <a
          href="mailto:gleb@uwalumni.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          email
        </a>
        <a
          href="https://www.instagram.com/___gleb___25/"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
        <a
          href="https://x.com/GlebTsyganov"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
      </footer>
    </div>
  );
}