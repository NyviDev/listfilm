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
  const coditionArrow = (iconArgs!.source !== "/arrow-left.svg") && (iconArgs!.source !== "/arrow-right.svg");
  
  return (
    <button className={styles.button} data-type={type} data-default={coditionArrow}>
      {type == "icon" ? (
        <Icon
          size={!coditionArrow ? "normal" : iconArgs!.size}
          source={iconArgs!.source}
        />
      ) : (
        content
      )}
    </button>
  );
};
