"use client";
import React from "react";
import styles from "./Button.module.scss";
import { Icon, IconProps } from "../Icon/Icon";
interface ButtonProps {
  content?: string;
  type: "rate" | "icon" | "login" | "register";
  iconArgs?: IconProps;
}

export const Button = ({ content, type, iconArgs }: ButtonProps) => {
  console.log(iconArgs);
  const alt = iconArgs?.alt;
  console.log(alt);
  return (
    <button className={styles.button} data-type={type}>
      {type == "icon" ? (
        <Icon
          alt={iconArgs!.alt}
          size={iconArgs!.size}
          sourceIcon={iconArgs!.sourceIcon}
        />
      ) : (
        content
      )}
    </button>
  );
};
