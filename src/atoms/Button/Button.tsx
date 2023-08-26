'use client';
import React, { ReactNode } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./Button.module.scss";

interface ButtonProps {
    content: string | ReactNode,
    type: "rate" | "icon" | "login" | "register"
}

export const Button = ({content, type}: ButtonProps) => {
  return <button className={styles.button} data-type={type}>{content}</button>;
};
