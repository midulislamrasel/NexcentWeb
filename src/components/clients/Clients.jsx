import {
  CR_Logo1,
  CR_Logo2,
  CR_Logo3,
  CR_Logo4,
  CR_Logo5,
  CR_Logo6,
} from "@/images";
import Image from "next/image";
import React from "react";
import Styles from "./clients.module.css";

function Clients() {
  return (
    <div
      className="container"
      style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}
    >
      <p className={Styles.client_title}>Our Clients </p>
      <p className={Styles.client_pera}>
        We have been woring with some Fortun Fortune 500+ clients
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Image src={CR_Logo1} width={40} height={40} alt="Clients" />
        <Image src={CR_Logo2} width={40} height={40} alt="Clients" />
        <Image src={CR_Logo3} width={40} height={40} alt="Clients" />
        <Image src={CR_Logo4} width={40} height={40} alt="Clients" />
        <Image src={CR_Logo5} width={40} height={40} alt="Clients" />
        <Image src={CR_Logo6} width={40} height={40} alt="Clients" />
      </div>
    </div>
  );
}

export default Clients;
