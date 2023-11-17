import React from "react";
import styles from "./hero.module.css";
import ButtonDefault from "../button/ButtonDefault";

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className="container mx-auto sx heroPadding">
        <div className={styles.Hero__main}>
          <div className={styles.top__content}>
            <p>Lessons and insights</p>
            <p>from 8 years</p>
          </div>
          <div className={styles.bottom__content}>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <ButtonDefault label="Register" padding="14px 32px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
