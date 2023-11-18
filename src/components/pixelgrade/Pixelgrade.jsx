import React from "react";
import styles from "./pixelgrade.module.css";
import ButtonDefault from "../button/ButtonDefault";
import Image from "next/image";
// import { Frame } from "@/images";
import Frame from "@/assets/images/Frame.png";

Frame;
function Pixelgrade() {
  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <div className={styles.pixelgrade_sectino}>
        <div className={styles.pixelgrade_Iamge}>
          <Image src={Frame} alt="pixelgrade_image" />
        </div>
        <div className={styles.pixelgrade_container}>
          <p className={styles.pixelgrade_title}>
            The unseen of spending three years at Pixelgrade
          </p>
          <p className={styles.pixelgrade_pera}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <ButtonDefault
            type="button"
            label="Learn More"
            background="var(--brandprimary)"
            padding="14px 32px"
          ></ButtonDefault>
        </div>
      </div>
    </div>
  );
}

export default Pixelgrade;
