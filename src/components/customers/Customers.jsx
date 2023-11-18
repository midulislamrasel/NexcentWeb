import {
  CR_Logo1,
  CR_Logo2,
  CR_Logo3,
  CR_Logo4,
  CR_Logo5,
  CR_Logo6,
  customer,
} from "@/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Style from "./customer.module.css";
function Customers() {
  return (
    <div
      style={{
        backgroundColor: "var(--neutralsilver)",
        padding: "32px 0px",
        margin: "48px 0px",
      }}
    >
      <div className="container">
        <div className={Style.customer_section}>
          <Image src={customer} width={326} height={326} alt="customar_imges" />
          <div>
            <p className={Style.pera}>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <p className={Style.comone_pera}>Tim Smith</p>
            <p className={Style.pera2}>
              British Dragon Boat Racing Association
            </p>
            <div className={Style.CR_logo}>
              <Image src={CR_Logo1} width={40} height={40} alt="CR_Logo" />
              <Image src={CR_Logo2} width={40} height={40} alt="CR_Logo" />
              <Image src={CR_Logo3} width={40} height={40} alt="CR_Logo" />
              <Image src={CR_Logo4} width={40} height={40} alt="CR_Logo" />
              <Image src={CR_Logo5} width={40} height={40} alt="CR_Logo" />
              <Image src={CR_Logo6} width={40} height={40} alt="CR_Logo" />
              <p>
                <Link href="#" className={Style.comone_pera}>
                  Meet All customers --
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
