import React from "react";
import Styles from "./system.module.css";
import Image from "next/image";
import { card_Icon, card_Icon2, card_Icon3 } from "@/images";

function System() {
  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <p className={Styles.system_header}>Manage your entire community</p>
        <p className={Styles.system_header}>in a single system</p>
        <p className={Styles.system_pera}>Who is Nextcent suitable for?</p>
      </div>
      <div className={Styles.card_section}>
        <div className={Styles.card}>
          <Image src={card_Icon} style={{ marginBottom: "16px" }} />
          <p className={Styles.card_title}>Membership</p>
          <p className={Styles.card_title}>Organisations</p>
          <p className={Styles.card_pera}>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className={Styles.card}>
          <Image src={card_Icon2} style={{ marginBottom: "16px" }} />
          <p className={Styles.card_title}>Membership</p>
          <p className={Styles.card_title}>Organisations</p>
          <p className={Styles.card_pera}>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className={Styles.card}>
          <Image src={card_Icon3} style={{ marginBottom: "16px" }} />
          <p className={Styles.card_title}>Membership</p>
          <p className={Styles.card_title}>Organisations</p>
          <p className={Styles.card_pera}>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}

export default System;
