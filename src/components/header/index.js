"use client";
import { useEffect, useState } from "react";
import ButtonDefault from "../button/ButtonDefault";
import ButtonOutLine from "../button/ButtonOutLine";
import Logo from "../logo";
import Menu from "../menu";
import styles from "./header.module.css";
import { useOpenClose } from "@/hook/useOpenClose";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  const { isOpen, toggle } = useOpenClose(false);

  const handleScroller = () => {
    window.scrollY > 120 ? setIsScroll(true) : setIsScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroller);

    return () => {
      window.removeEventListener("scroll", handleScroller);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isScroll ? styles.header__active : null}`}
    >
      <div className={`${styles.header__inner}`}>
        <div className={styles.site_header__start}>
          <Logo />
          <button onClick={toggle}> {`${isOpen ? "🤪" : "😜"}`} </button>
        </div>
        <div
          className={`${styles.site_header__middle} ${
            isOpen ? styles.active_status : ""
          }`}
        >
          <Menu />
        </div>
        <div
          className={`${styles.site_header__right} ${
            isOpen ? styles.active_status : ""
          }`}
        >
          <ButtonOutLine
            type="button"
            label="log in"
            background="none"
            padding="10px 20px"
          />
          <ButtonDefault type="button" label="sign up" padding="10px 20px" />
        </div>
      </div>
    </header>
  );
};

export default Header;
