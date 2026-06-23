import Image, { getImageProps } from "next/image";
import styles from "./Project.module.css";

const projectImageSizes = "(max-width: 860px) calc(100vw - 40px), 740px";

type ProjectImageSource = {
  src: string;
  width: number;
  height: number;
};

type ProjectImageProps = ProjectImageSource & {
  alt: string;
  priority?: boolean;
};

type ProjectPictureProps = {
  alt: string;
  desktop: ProjectImageSource;
  mobile: ProjectImageSource;
  priority?: boolean;
};

export function ProjectImage({
  src,
  width,
  height,
  alt,
  priority = false,
}: ProjectImageProps) {
  return (
    <Image
      className={styles.image}
      src={src}
      width={width}
      height={height}
      alt={alt}
      sizes={projectImageSizes}
      priority={priority}
    />
  );
}

export function ProjectPicture({
  desktop,
  mobile,
  alt,
  priority = false,
}: ProjectPictureProps) {
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    src: desktop.src,
    width: desktop.width,
    height: desktop.height,
    alt,
    sizes: projectImageSizes,
    priority,
  });

  const {
    props: { srcSet: mobileSrcSet, ...imageProps },
  } = getImageProps({
    src: mobile.src,
    width: mobile.width,
    height: mobile.height,
    alt,
    sizes: projectImageSizes,
    priority,
  });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
      <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
      <img {...imageProps} alt={alt} className={styles.image} />
    </picture>
  );
}
