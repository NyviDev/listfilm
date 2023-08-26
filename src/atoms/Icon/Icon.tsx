import React from "react";
import Image from "next/image";
import styles from "./Icon.module.scss";

interface IconProps {
  sourceIcon:
    | "/camera-movie.svg"
    | "/error.svg"
    | "/exit.svg"
    | "/eye.svg"
    | "/fill-star.svg"
    | "/half-fill-popcorn.svg"
    | "/popcorn-orange.svg"
    | "/popcorn.svg"
    | "/star-orange.svg"
    | "/star-white.svg"
    | "/success.svg";
  alt: string;
  size: "15" | "20" | "25" | "35";
}

export const Icon = ({ alt, sourceIcon, size }: IconProps) => {
  return (
    <Image
      width={size}
      height={size}
      className={styles.icon}
      src={sourceIcon}
      alt={alt}
    />
  );
};
