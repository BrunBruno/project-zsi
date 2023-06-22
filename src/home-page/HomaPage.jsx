import { useState } from "react";
import Card from "./Card";
import classes from "./HomePage.module.css";

function HomePage() {
  const elements = [
    {
      name: "Nagios",
      maintext:
        "Narzędzie do monitorowania sieci i systemów, które pozwala na śledzenie stanu urządzeń, usług i aplikacji w czasie rzeczywistym.",
      text: "Text",
      image: "./images/NagiosLogo.png",
    },
    {
      name: "Zabbix",
      maintext:
        "Platforma monitorowania sieci i systemów, która oferuje zaawansowane funkcje analizy i wizualizacji danych, a także powiadomienia w czasie rzeczywistym.",
      text: "Text",
      image: "./images/ZabbixLogo.png",
    },
    {
      name: "Cacti",
      maintext:
        "Narzędzie do wykresów i graficznej prezentacji danych o sieciach. Może być używane do monitorowania wydajności i zużycia zasobów.",
      text: "Text",
      image: "./images/CactiLogo.png",
    },
    {
      name: "Wireshark",
      maintext:
        "Narzędzie analizy ruchu sieciowego, które umożliwia przechwytywanie i analizę pakietów danych w czasie rzeczywistym. Jest szczególnie przydatne w rozwiązywaniu problemów z siecią.",
      text: "Text",
      image: "./images/WiresharkLogo.png",
    },
    {
      name: "OpenNMS",
      maintext:
        "Platforma monitorowania sieci, która oferuje wiele zaawansowanych funkcji, takich jak wykrywanie i zarządzanie urządzeniami sieciowymi, monitorowanie usług i alarmowanie.",
      text: "Text",
      image: "./images/OpenNMSLogo.png",
    },
    {
      name: "Ansible",
      maintext:
        "Narzędzie do automatyzacji zarządzania konfiguracją i wdrażania aplikacji. Umożliwia administratorom zdalne zarządzanie systemami i aplikacjami.",
      text: "Text",
      image: "./images/AnsibleLogo.png",
    },
    {
      name: "Icinga",
      maintext:
        "Narzędzie monitorujące, które pozwala na monitorowanie infrastruktury IT, usług i aplikacji. Oferuje elastyczną konfigurację i rozszerzalność.",
      text: "Text",
      image: "./images/IcingaLogo.png",
    },
    {
      name: "Nmap",
      maintext:
        "Narzędzie do skanowania sieci, które pozwala na badanie dostępności i bezpieczeństwa hostów w sieci. Może być używane do identyfikacji otwartych portów, mapowania sieci i analizy zabezpieczeń.",
      text: "Text",
      image: "./images/NmapLogo.png",
    },
    {
      name: "Apache JMeter",
      maintext:
        "Narzędzie do testowania wydajności aplikacji webowych. Umożliwia symulację obciążenia na serwerze, monitorowanie wydajności i analizę wyników.",
      text: "Text",
      image: "./images/ApacheJMeterLogo.png",
    },
    {
      name: "GLPI",
      maintext:
        "System do zarządzania bazą wiedzy i zasobami IT. Oferuje możliwość śledzenia urządzeń, zarządzania zgłoszeniami użytkowników, monitorowania aktywów i wiele innych funkcji.",
      text: "Text",
      image: "./images/GLPILogo.png",
    },
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
