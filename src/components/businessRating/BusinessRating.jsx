import React from "react";
import styles from "./businessRating.module.css";
import { raw } from "express";
import Image from "next/image";
import { Rating1, Rating2, Rating3, Rating4 } from "@/images";

function BusinessRating() {
  return (
    <div
      style={{
        backgroundColor: "var(--neutralsilver)",
        padding: "64px 0px",
        margin: "48px 0px",
      }}
    >
      <div className="container">
        <div className={styles.businessRating_Section}>
          <div className={styles.rating}>
            <p className={styles.rating_Header}>Helping a local</p>
            <p className={styles.rating_Header2}>business reinvent itself</p>
            <p className={styles.rating_pera}>
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className={styles.icon}>
            <div className={styles.icon_section}>
              <Image src={Rating1} width={48} height={48} alt="ret_Icon" />
              <div>
                <p className={styles.icon_title}>2,245,341</p>
                <p className={styles.icon_pera}>Members</p>
              </div>
            </div>
            <div className={styles.icon_section}>
              <Image src={Rating2} width={48} height={48} alt="ret_Icon" />
              <div>
                <p className={styles.icon_title}>46,328</p>
                <p className={styles.icon_pera}>clubs</p>
              </div>
            </div>
            <div className={styles.icon_section}>
              <Image src={Rating3} width={48} height={48} alt="ret_Icon" />
              <div>
                <p className={styles.icon_title}>828,867</p>
                <p className={styles.icon_pera}>Event Bookings</p>
              </div>
            </div>
            <div className={styles.icon_section}>
              <Image src={Rating4} width={48} height={48} alt="ret_Icon" />
              <div>
                <p className={styles.icon_title}>1,926,436</p>
                <p className={styles.icon_pera}>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessRating;
