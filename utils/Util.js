import Moment from "moment";

export default class Util {
  static arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  static createArray(length, add) {
    if (!add) return Array.from({length: length}, (_, i) => i);
    return Array.from({length: length}, (_, i) => i + add);
  }

  static formatTime(time, format) {
    return new Moment(time).format(format);
  }

  static isSameDomain(url) {
    if (url.startsWith("/")) return true;

    try {
      const currentOrigin = new URL(window.location.href).origin;
      const linkOrigin = new URL(url).origin;
      // console.log(currentOrigin, linkOrigin)
      return currentOrigin === linkOrigin;
    } catch (error) {
      console.log("Um erro ocorreu: %s", error.message);
      // URL inválida, assumimos que não é do mesmo domínio
      return false;
    }
  }

  static formatString(text, format) {
    // Remove non-numeric characters from the text if the format only contains #, otherwise keeps the original characters
    const cleanText = format.includes("#") && !format.includes("?") ? text.replace(/\D/g, "") : text;

    let result = "";
    let textIndex = 0;

    for (let i = 0; i < format.length; i++) {
      if (format[i] === "#") {
        if (textIndex < cleanText.length) {
          result += cleanText[textIndex];
          textIndex++;
        }
      } else if (format[i] === "?") { // Wildcard character, inserts if there is a character in the text
        if (textIndex < cleanText.length) {
          result += cleanText[textIndex];
          textIndex++;
        }
      } else {
        result += format[i];
      }
    }

    return result;
  }

  static convertToSafeText(text) {
    if (!text) return "";

    let sanitize = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\u0100-\u1EFF]/g, "");
    sanitize = sanitize.replace(/\s/g, "-");
    sanitize = sanitize.replace(/[,.]/g, "");
    sanitize = sanitize.replace(/^\w]/g, "");
    return sanitize.replace(/-{2,}/g, "-");
  }

  static formatMoney(value) {
    return Intl.NumberFormat("pt-BR", {
      style: "currency", currency: "BRL", minimumFractionDigits: 2,
    }).format(value);
  }
  
  static renderText = (text) => {
    // Usa regex para encontrar todas as barras e as envolve em spans
    return text.split(/(\/)/).map((part, index) => {
      if (part === "/") {
        return <span key={index} style={{fontSize: 'inherit', fontFamily: "'Arial', sans-serif"}}>/</span>; // Adiciona uma key para o React
      }
      return part;
    });
  };
}
