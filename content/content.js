export default class Content {
  static UI() {
    return {
      "app-name": "Adote",
    }
  }
  
  static Abrigo() {
    return {
      "name": "Abrigo",
      "description": "",
    }
  }
  
  static Error404() {
    return {
      "name": "#404",
      "description": "Página não encontrada",
      "message": "A página que você tentou acessar não existe. Retorne para a página inicial."
    }
  }
  
  static Host() {
    return window.location.hostname === "localhost" ? "http://localhost:3001" : ""
  }
}