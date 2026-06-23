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
          <a href="/https://apps.apple.com/us/app/izzy-friends/id6753328759">
            <b className={styles.title}>izzy & friends</b>
          </a>
          <a href="/izzy">
            <p className={styles.description}>
              AI companion app <br />
              <br />
              <i>view project</i>
            </p>
          </a>
        </div>
        <div className={styles.project}>
          <a href="/crtd">
            <b className={styles.title}>crtd</b>
          </a>
          <a href="/crtd">
            <p className={styles.description}>
              a consumer social application to find out what your friends are{" "}
              reading / watching / listening to <br />
              <br />
              <i>view project</i>
            </p>
          </a>
        </div>
        <div className={styles.project}>
          <a
            href="https://apps.apple.com/us/app/four-seven-eight/id6749875998"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b className={styles.title}>478</b>
          </a>
          <a href="/478">
            <p className={styles.description}>
              a breathing app to reduce anxiety <br /> <br />{" "}
              <i>view project</i>
            </p>
          </a>
        </div>
        <div className={styles.project}>
          <a
            href="https://www.poolside.ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b className={styles.title}>pool pong</b>
          </a>
          <a href="/pong">
            <p className={styles.description}>
              classic pong game, inside a pool
              <br /> <br />
              <i>view project</i>
            </p>
          </a>
        </div>
        <div className={styles.project}>
          <a
            href="https://www.instagram.com/thezestclub/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b className={styles.title}>zest club</b>
          </a>
          <a href="/zest">
            <p className={styles.description}>
              a private application based &quot;speakeasy&quot; for students{" "}
              <br /> <br />
              <i>view project</i>
            </p>
          </a>
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
