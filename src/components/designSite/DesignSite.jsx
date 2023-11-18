import React from "react";
import Design from "@/assets/images/Design.png";
import styles from "./designSite.module.css";
import Image from "next/image";
import ButtonDefault from "../button/ButtonDefault";
function DesignSite() {
  return (
    <div className="container">
      <div className={styles.design_sectino}>
        <div className={styles.design_Iamge}>
          <Image src={Design} alt="pixelgrade_image" />
        </div>
        <div className={styles.design_container}>
          <p className={styles.design_title}>
            How to design your site footer like we did
          </p>
          <p className={styles.design_pera}>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <ButtonDefault
            type="button"
            label="Learn More"
            background="var( --brandprimary)"
            padding="14px 32px"
          ></ButtonDefault>
        </div>
      </div>
    </div>
  );
}

export default DesignSite;
