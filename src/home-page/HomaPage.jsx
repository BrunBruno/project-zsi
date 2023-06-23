import { useState } from "react";
import Card from "./Card";
import classes from "./HomePage.module.css";

function HomePage() {
  const elements = [
    {
      name: "Nagios",
      maintext:
        "Narzędzie do monitorowania sieci i systemów, które pozwala na śledzenie stanu urządzeń, usług i aplikacji w czasie rzeczywistym.",
      text: "Nagios jest popularnym narzędziem monitorującym, wykorzystywanym do śledzenia stanu infrastruktury IT i aplikacji. Nagios oferuje wszechstronne funkcje monitorowania, umożliwiające kontrolę parametrów takich jak dostępność, wydajność i integralność systemów. Dzięki Nagiosowi można skonfigurować powiadomienia i alerty w przypadku wykrycia awarii lub nieprawidłowości, co umożliwia szybką reakcję i rozwiązanie problemów. Nagios zapewnia także możliwość generowania raportów i wykresów, umożliwiających analizę trendów i identyfikację długoterminowych wzorców. Dzięki swojej elastyczności i rozszerzalności Nagios jest szeroko stosowany w branży IT, pomagając administratorom utrzymać stabilność i niezawodność swoich systemów.",
      image: "./images/NagiosLogo.png",
    },
    {
      name: "Zabbix",
      maintext:
        "Platforma monitorowania sieci i systemów, która oferuje zaawansowane funkcje analizy i wizualizacji danych, a także powiadomienia w czasie rzeczywistym.",
      text: "Zabbix to popularne narzędzie do monitorowania infrastruktury IT i aplikacji, które pozwala na bieżące śledzenie stanu zasobów. Zabbix umożliwia monitorowanie wielu parametrów, takich jak wydajność, dostępność, zużycie zasobów i obciążenie systemu. Dzięki Zabbixowi można skonfigurować powiadomienia i alarmy, które informują o wystąpieniu awarii lub przekroczeniu określonych wartości progowych. Zabbix oferuje bogatą funkcjonalność raportowania i analizy danych, umożliwiając generowanie wykresów, raportów i statystyk, które ułatwiają zrozumienie trendów i identyfikację problemów. Dzięki zdolności do automatycznego odkrywania nowych urządzeń i usług, Zabbix ułatwia skalowanie monitorowania w dynamicznych środowiskach IT.",
      image: "./images/ZabbixLogo.png",
    },
    {
      name: "Cacti",
      maintext:
        "Narzędzie do wykresów i graficznej prezentacji danych o sieciach. Może być używane do monitorowania wydajności i zużycia zasobów.",
      text: "Cacti to popularne narzędzie do monitorowania sieci, które umożliwia wizualizację i analizę danych wydajnościowych. Cacti zbiera dane z różnych urządzeń sieciowych, takich jak routery, przełączniki i serwery, a następnie prezentuje je w formie wykresów i grafów. Dzięki Cacti można monitorować parametry sieciowe, takie jak przepustowość, opóźnienia czy zużycie zasobów, co umożliwia szybkie wykrywanie problemów i optymalizację sieci. Cacti oferuje elastyczną architekturę pluginów, umożliwiając rozszerzenie funkcjonalności i dostosowanie narzędzia do indywidualnych potrzeb. Dzięki intuicyjnemu interfejsowi użytkownika i prostemu w obsłudze systemowi zarządzania, Cacti jest często wybieranym narzędziem przez administratorów sieciowych.",
      image: "./images/CactiLogo.png",
    },
    {
      name: "Wireshark",
      maintext:
        "Narzędzie analizy ruchu sieciowego, które umożliwia przechwytywanie i analizę pakietów danych w czasie rzeczywistym. Jest szczególnie przydatne w rozwiązywaniu problemów z siecią.",
      text: "Wireshark to narzędzie do analizy pakietów sieciowych, które umożliwia monitorowanie, przechwytywanie i analizę ruchu sieciowego w czasie rzeczywistym. Dzięki Wiresharkowi można szczegółowo analizować pakiety sieciowe, odkrywać problemy związane z komunikacją sieciową i diagnozować awarie. Wireshark obsługuje wiele protokołów sieciowych, takich jak TCP/IP, HTTP, DNS, FTP, oraz umożliwia filtrowanie pakietów w celu skoncentrowania się na konkretnych zdarzeniach. Narzędzie to oferuje zaawansowane funkcje, takie jak dekodowanie i analiza struktury pakietów, odkrywanie anomalii, generowanie statystyk i tworzenie raportów. Wireshark jest darmowym i otwartoźródłowym oprogramowaniem, które jest szeroko stosowane przez specjalistów ds. sieci, administratorów i inżynierów do badania i monitorowania ruchu sieciowego.",
      image: "./images/WiresharkLogo.png",
    },
    {
      name: "OpenNMS",
      maintext:
        "Platforma monitorowania sieci, która oferuje wiele zaawansowanych funkcji, takich jak wykrywanie i zarządzanie urządzeniami sieciowymi, monitorowanie usług i alarmowanie.",
      text: "OpenNMS to zaawansowane narzędzie monitorujące i zarządzające infrastrukturą sieciową, które oferuje funkcje monitorowania, alarmowania, analizy i zarządzania zasobami sieciowymi. OpenNMS automatycznie odkrywa urządzenia sieciowe i usługi, monitoruje ich stan, a także zbiera i analizuje dane wydajnościowe, umożliwiając identyfikację problemów i szybką reakcję. Narzędzie to obsługuje wiele protokołów sieciowych, takich jak SNMP, ICMP, HTTP, SSH, co umożliwia kompleksowe monitorowanie różnych typów urządzeń i usług. OpenNMS oferuje elastyczną architekturę pluginów i rozszerzeń, umożliwiając dostosowanie narzędzia do indywidualnych potrzeb i integrację z innymi systemami zarządzania. Dzięki swojej otwartoźródłowej naturze, OpenNMS jest popularnym wyborem wśród organizacji, które poszukują rozwiązania do profesjonalnego monitorowania i zarządzania swoją infrastrukturą sieciową.",
      image: "./images/OpenNMSLogo.png",
    },
    {
      name: "Ansible",
      maintext:
        "Narzędzie do automatyzacji zarządzania konfiguracją i wdrażania aplikacji. Umożliwia administratorom zdalne zarządzanie systemami i aplikacjami.",
      text: "Ansible to popularne narzędzie do automatyzacji IT, które umożliwia zarządzanie konfiguracją, wdrożenie aplikacji i zarządzanie infrastrukturą jako kod. Ansible opiera się na języku YAML i nie wymaga instalacji agentów na zarządzanych maszynach, co sprawia, że jest łatwy w użyciu i skalowalny. Narzędzie to umożliwia zdalne wykonywanie poleceń, konfigurację systemów, aktualizacje oprogramowania i wdrożenie aplikacji na wielu maszynach jednocześnie. Ansible oferuje moduły i playbooke, które umożliwiają definiowanie i organizowanie zadań w sposób czytelny i elastyczny. Dzięki swojej prostocie i elastyczności, Ansible jest szeroko stosowany w branży IT, pomagając w automatyzacji procesów i oszczędzając czas i wysiłek administratorom systemów.",
      image: "./images/AnsibleLogo.png",
    },
    {
      name: "Icinga",
      maintext:
        "Narzędzie monitorujące, które pozwala na monitorowanie infrastruktury IT, usług i aplikacji. Oferuje elastyczną konfigurację i rozszerzalność.",
      text: "Icinga jest narzędziem monitorującym open-source, które umożliwia monitorowanie infrastruktury IT, aplikacji i usług w czasie rzeczywistym. Icinga oferuje rozszerzone funkcje monitorowania, w tym sprawdzanie dostępności, wydajności, integrowanie zewnętrznych danych, oraz generowanie powiadomień i alarmów. Narzędzie to zapewnia elastyczność w konfiguracji monitorowania, umożliwiając dostosowanie parametrów i reguł monitorowania do indywidualnych potrzeb. Icinga posiada intuicyjny interfejs użytkownika, który umożliwia łatwe zarządzanie monitorowanymi zasobami i analizę zebranych danych. Dzięki społeczności i aktywnemu rozwojowi projektu, Icinga oferuje nieustannie rozwijające się funkcje i wsparcie dla różnych integracji i rozszerzeń.",
      image: "./images/IcingaLogo.png",
    },
    {
      name: "Nmap",
      maintext:
        "Narzędzie do skanowania sieci, które pozwala na badanie dostępności i bezpieczeństwa hostów w sieci. Może być używane do identyfikacji otwartych portów, mapowania sieci i analizy zabezpieczeń.",
      text: "Nmap to popularne narzędzie do skanowania sieci, które umożliwia odkrywanie i badanie otwartych portów, usług oraz analizę topologii sieciowej. Nmap oferuje wiele technik skanowania, w tym skanowanie TCP, UDP, skanowanie SYN, skanowanie pingowe oraz skanowanie z wykorzystaniem skryptów. Narzędzie to pozwala na identyfikację systemów operacyjnych, wersji oprogramowania, a także wykrywanie podatności związanych z konkretnymi usługami. Nmap oferuje elastyczne opcje filtrowania i konfiguracji, umożliwiając dostosowanie skanowania do indywidualnych potrzeb i ograniczeń sieciowych. Dzięki swojej wszechstronności i zaawansowanym możliwościom, Nmap jest szeroko stosowany przez specjalistów ds. bezpieczeństwa, administratorów sieciowych i badaczy do analizy i diagnozowania sieci.",
      image: "./images/NmapLogo.png",
    },
    {
      name: "Apache JMeter",
      maintext:
        "Narzędzie do testowania wydajności aplikacji webowych. Umożliwia symulację obciążenia na serwerze, monitorowanie wydajności i analizę wyników.",
      text: "Apache JMeter to popularne narzędzie do testowania wydajności aplikacji internetowych i usług webowych. JMeter umożliwia symulację obciążenia, umożliwiając testowanie skalowalności, wydajności i stabilności aplikacji w różnych scenariuszach obciążenia. Narzędzie to obsługuje wiele protokołów komunikacyjnych, takich jak HTTP, FTP, JDBC, SOAP, REST, co pozwala na testowanie różnych typów aplikacji. JMeter oferuje rozbudowane funkcje raportowania i analizy wyników testów, umożliwiając identyfikację wąskich gardeł, problemów wydajnościowych i optymalizację aplikacji. Dzięki swojej otwartoźródłowej naturze i aktywnej społeczności, Apache JMeter jest powszechnie wykorzystywany w branży IT do przeprowadzania testów wydajnościowych i obciążeniowych aplikacji.",
      image: "./images/ApacheJMeterLogo.png",
    },
    {
      name: "GLPI",
      maintext:
        "System do zarządzania bazą wiedzy i zasobami IT. Oferuje możliwość śledzenia urządzeń, zarządzania zgłoszeniami użytkowników, monitorowania aktywów i wiele innych funkcji.",
      text: "GLPI (Gestionnaire Libre de Parc Informatique) to otwartoźródłowe narzędzie do zarządzania infrastrukturą IT i obsługi zgłoszeń. GLPI umożliwia śledzenie i zarządzanie sprzętem komputerowym, oprogramowaniem, kontraktami, licencjami oraz zgłoszeniami użytkowników. Narzędzie to oferuje centralną bazę wiedzy, która ułatwia dokumentację i udostępnianie informacji dotyczących infrastruktury IT. GLPI umożliwia automatyzację procesów, takich jak rezerwacje, zgłoszenia serwisowe i zarządzanie zmianami, co zwiększa efektywność pracy zespołów IT. Dzięki swojej elastyczności i rozbudowanym funkcjom, GLPI jest powszechnie wykorzystywane w organizacjach do profesjonalnego zarządzania infrastrukturą IT i świadczenia usług wsparcia użytkownikom.",
      image: "./images/GLPILogo.png",
    },
  ];
  return (
    <>
      <header className={classes.header}>
        <h2>Top 10 narzędzi administratora systemu informatycznego</h2>
      </header>
      <div className={classes.hero}>
        <div className={classes["hero-context"]}>
          <div className={classes["hero-context-title"]}>
            <h1>
              Top 10 (bezpłatnych) narzędzi przydatnych w realizacji zadań
              administratora systemu informatycznego.
            </h1>
          </div>
        </div>
        <a href="#content">
          <button className={classes["nav-button"]}>
            <svg
              viewBox="0 -4.5 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-220.000000, -6684.000000)" fill="#fff">
                  <g transform="translate(56.000000, 160.000000)">
                    <path d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </a>
      </div>
      <div id="content" className={classes.container}>
        {elements.map((element, index) => (
          <Card key={index} element={element} index={index} />
        ))}
      </div>
      <footer className={classes.footer}>Project ZSI 2023</footer>
    </>
  );
}

export default HomePage;
