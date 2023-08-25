import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  InputDefault: boolean;
  placeholder: string;
}

export const Input = ({ InputDefault = true, placeholder }: InputProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      data-default={InputDefault}
      placeholder={placeholder}
    />
  );
};
