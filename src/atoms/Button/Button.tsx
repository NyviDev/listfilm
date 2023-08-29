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
  return (
    <button className={styles.button} data-type={type}>
      {type == "icon" ? (
        <Icon
          size={iconArgs!.size}
          source={iconArgs!.source}
        />
      ) : (
        content
      )}
    </button>
  );
};
