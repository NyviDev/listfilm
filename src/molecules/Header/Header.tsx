import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
    HeaderDefault?: boolean
}

export const Header = ({HeaderDefault = true}: HeaderProps) => {
    return (
        <header className={styles.header} data-default={HeaderDefault}>
            <h2 className={styles.title}>LISTFILM</h2>
        </header>
    )
}