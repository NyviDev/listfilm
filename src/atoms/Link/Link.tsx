import React from "react";
import styles from "./Link.module.scss";
import { Icon, IconProps } from "../Icon/Icon";

interface LinkProps {
  href: string;
  content: string;
  color: "black" | "white";
  externalLink: boolean;
  iconArgs?: IconProps;
}

export const Link = ({
  content,
  href,
  color,
  externalLink,
  iconArgs,
}: LinkProps) => {
  return (
    <>
      {externalLink ? (
        <a
          className={styles.link}
          href={href}
          target="_blank"
          data-color={color}
          data-externalLink={externalLink}
        >
          {content}
        </a>
      ) : (
        <a
          className={styles.link}
          href={href}
          data-color={color}
          data-externalLink={externalLink}
        >
          {iconArgs && (
            <Icon
              alt={iconArgs.alt}
              size={iconArgs.size}
              sourceIcon={iconArgs.sourceIcon}
            />
          )}
          {content}
        </a>
      )}
    </>
  );
};
