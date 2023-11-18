import Image from "next/image";
import React from "react";
import ButtonOutLine from "../button/ButtonOutLine";
import { markting_Img, markting_Img2, markting_Img3 } from "@/images";
import Styles from "./marketing.module.css";
function Marketing() {
  return (
    <div className="container">
      <p>Caring is the new marketing</p>
      <p>
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div>
        <div className={Styles.markting_Img_card}>
          <Image
            className={Styles.button}
            src={markting_Img}
            width={368}
            height={286}
            alt="markting_Img"
          />
          <div className={Styles.card}>
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <ButtonOutLine
              label={"Readmore"}
              type={"button"}
              background="none"
              padding={"5px 10px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Marketing;
// type,
// label,
// background = "#4CAF4F",
// padding,
// svg = false,
