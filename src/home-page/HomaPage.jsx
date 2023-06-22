import { useState } from "react";
import Card from "./Card";
import classes from "./HomePage.module.css";

function HomePage() {
  const elements = [
    { name: "Nagios", text: "Text", image: "url" },
    { name: "Zabbix", text: "Text", image: "url" },
    { name: "Cacti", text: "Text", image: "url" },
    { name: "Wireshark", text: "Text", image: "url" },
    { name: "OpenNMS", text: "Text", image: "url" },
    { name: "Ansible", text: "Text", image: "url" },
    { name: "Icinga", text: "Text", image: "url" },
    { name: "Nmap", text: "Text", image: "url" },
    { name: "Apache JMeter", text: "Text", image: "url" },
    { name: "GLPI", text: "Text", image: "url" },
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
