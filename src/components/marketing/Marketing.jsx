import Image from "next/image";
import React from "react";
import ButtonOutLine from "../button/ButtonOutLine";
import { markting_Img, markting_Img2, markting_Img3 } from "@/images";
import Styles from "./marketing.module.css";
function Marketing() {
  return (
    <div className="container">
      <div className={Styles.marketing_title_pera}>
        <p className={Styles.marketing_title}>Caring is the new marketing</p>
        <p className={Styles.markting_pera}>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className={Styles.marketing_section}>
        <div className={Styles.markting_Img_card}>
          <Image
            className={Styles.images_style}
            src={markting_Img}
            alt="markting_Img"
          />
          <div className={Styles.card}>
            <div className={Styles.abced}>
              <p>Creating Streamlined Safeguarding Processes with OneRen</p>
              <ButtonOutLine
                style={{ fontSize: "20px" }}
                label={"Readmore"}
                type={"button"}
                background="none"
                padding={"5px 10px"}
              />
            </div>
          </div>
        </div>

        {/* === */}
        <div className={Styles.markting_Img_card}>
          <Image
            className={Styles.images_style}
            src={markting_Img2}
            alt="markting_Img"
          />
          <div className={Styles.card}>
            <div className={Styles.abced}>
              <p>
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <ButtonOutLine
                label={"Readmore"}
                type={"button"}
                background="none"
                padding={"5px 10px"}
              />
            </div>
          </div>
        </div>
        <div className={Styles.markting_Img_card}>
          <Image
            className={Styles.images_style}
            src={markting_Img3}
            alt="markting_Img"
          />
          <div className={Styles.card}>
            <div className={Styles.abced}>
              <p>Revamping the Membership Model with Triathlon Australia</p>
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
    </div>
  );
}
export default Marketing;
