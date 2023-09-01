import React, { ComponentType } from "react";
import styles from "./Icon.module.scss";
import dynamic from "next/dynamic";
export interface IconProps {
  source:
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
  size: "small" | "normal" | "medium" | "large";
  // fill?: "orange"
}

export const Icon = ({
  source,
  size,
}: IconProps) => {
  const ImageSVG: ComponentType<{ className: string }> = dynamic(
    () => import(`../../assets${source}`)
  );

  return (
    <>
      {source == "/fill-star.svg" ? (
        <ImageSVG className={styles.icon} data-size={size} data-star="true" />
      ) : (
        <ImageSVG className={styles.icon} data-size={size} />
      )}
    </>
  );
};
