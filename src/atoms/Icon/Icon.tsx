import React from "react";
import Image from "next/image";
import styles from "./Icon.module.scss";

interface IconProps {
    sourceIcon: string,
    alt: string
    size: "small" | "normal" | "medium" | "large"
}

export const Icon = ({alt, sourceIcon, size}: IconProps) => {
    return (
        <Image className={styles.icon} data-size={size} src={sourceIcon} alt={alt}/>
    )
}