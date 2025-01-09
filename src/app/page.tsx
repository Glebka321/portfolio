import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src={"/image.png"}
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
            a consumer social application to find out what your friends are{" "}
            reading / watching / listening to <br />
            <br />
            <a href="">
              <i>view project</i>
            </a>
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
            a private application based &quot;speakeasy&quot; for students{" "}
            <br /> <br />
            <a href="">
              <i>view project</i>
            </a>
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
            <a href="/dots.png">
              {" "}
              <i>view project</i>
            </a>
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
            <a href="/478demo.m4v">
              {" "}
              <i>view project</i>
            </a>
          </p>
        </div>
        <div className={styles.project}>
          <a
            href="https://www.sfpostcard.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b className={styles.title}>postcard</b>
          </a>
          <p className={styles.description}>
            an app to send postcards to friends anonymously
            <br /> <br />
            <i>view project</i>
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
