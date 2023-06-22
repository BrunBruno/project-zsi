import { useState } from "react";
import Card from "./Card";
import classes from "./HomePage.module.css";

function HomePage() {
  const elements = [
    { name: "Nagios", text: "Text", image: "./images/NagiosLogo.png" },
    { name: "Zabbix", text: "Text", image: "./images/ZabbixLogo.png" },
    { name: "Cacti", text: "Text", image: "./images/CactiLogo.png" },
    { name: "Wireshark", text: "Text", image: "./images/WiresharkLogo.png" },
    { name: "OpenNMS", text: "Text", image: "./images/OpenNMSLogo.png" },
    { name: "Ansible", text: "Text", image: "./images/AnsibleLogo.png" },
    { name: "Icinga", text: "Text", image: "./images/IcingaLogo.png" },
    { name: "Nmap", text: "Text", image: "./images/NmapLogo.png" },
    {
      name: "Apache JMeter",
      text: "Text",
      image: "./images/ApacheJMeterLogo.png",
    },
    { name: "GLPI", text: "Text", image: "./images/GLPILogo.png" },
  ];
  return (
    <>
      <header className={classes.header}>
        <h2>Top 10 narzędzi administratora systemu informatycznego</h2>
      </header>
      <div className={classes.container}>
        {elements.map((element, index) => (
          <Card key={index} element={element} index={index} />
        ))}
      </div>
      <footer className={classes.footer}>Project ZSI 2023</footer>
    </>
  );
}

export default HomePage;
