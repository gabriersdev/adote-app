"use client";

import {useEffect, useMemo, useState} from "react";
import { useRouter } from "next/router"
import axios from "axios";

export default function GeneralFunctions() {
  const [publicIp, setPublicIp] = useState(0);

  const config = useMemo(() => {
    return {
      host: ""
    }
  }, [])

  // Registra o SW e define o atributo rel para todos os links
  useEffect(() => {
    document.querySelectorAll("a").forEach(link => link.setAttribute("rel", "noopener noreferrer"));

    // Hostname "XXX" não existirá, portanto o bloco de código não vai rodar
    if ("serviceWorker" in navigator && window.location.hostname === "XXX") {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => console.log("Service Worker registrado com sucesso!"))
        .catch((err) => console.error("Erro ao registrar o Service Worker:", err));
    }
  }, []);

  // Obtem o IP do acesso
  useEffect(() => {
    // Hostname "XXX" não existirá, portanto o bloco de código não vai rodar
    if (window.location.hostname === "XXX") {
      fetch("https://api64.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
          if (data && data.ip) setPublicIp(data.ip);
        })
        .catch(error => {
          setPublicIp(1);
          console.log("Erro ao obter IP:", error)
        })
    }
  }, []);

  // Registro de acesso
  useEffect(() => {
    // Hostname "XXX" não existirá, portanto o bloco de código não vai rodar
    if (publicIp && window.location.hostname === "XXX") {
      try {
        axios.post(`${config.host}/api/logs/`, {
          event_type: "Acesss page",
          event_details: `Access URL: ${window.location.origin}${window.location.pathname}${window.location.search} ${new Date().getTime()}`,
          os: navigator.userAgent.includes("Windows") ? "Windows" : navigator.userAgent.includes("MacOS") ? "MacOS" : navigator.userAgent.slice(0, 254),
          browser: navigator.userAgent.slice(0, 254),
          ip_address: publicIp,
          user_agent: navigator.userAgent.slice(0, 254),
          page: window.location.pathname,
        }).then(() => {
        })
      } catch (error) {
        console.log(`Ocorreu um erro ao registrar log.`);

        if (window) {
          // @ts-ignore
          if (window.location.hostname === "localhost") console.log(error);
        }
      }
    }
  }, [publicIp]);

  return null;
}
