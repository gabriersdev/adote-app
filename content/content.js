export default class Content {
  static UI() {
    return {
      "app-name": "Adote",
    }
  }
  
  static Abrigo() {
    return {
      "name": "Abrigo",
      "description": "Aqui, cada vida importa. Somos um abrigo dedicado a resgatar, recuperar e proteger animais em situação de vulnerabilidade. Oferecemos cuidado, segurança e afeto até que encontrem famílias dispostas a dar o amor que merecem. Acreditamos em segundas chances - e aqui elas começam.",
      "email": "suporte@lts.app.br",
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
  
  static DevInfos() {
    return {
      "email": "gabriel@lts.app.br"
    }
  }
}