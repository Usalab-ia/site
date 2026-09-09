(function () {
  var STORAGE_KEY = "labia-lang";
  var SUPPORTED = { es: true, en: true, pt: true };
  var APPLE = {
    es: "https://apps.apple.com/es/app/lab-ia/id6755089051",
    en: "https://apps.apple.com/app/lab-ia/id6755089051",
    pt: "https://apps.apple.com/br/app/lab-ia/id6755089051"
  };
  var TIKTOK = {
    es: "https://www.tiktok.com/@usalab.ia?lang=es",
    en: "https://www.tiktok.com/@usalab.ia?lang=en",
    pt: "https://www.tiktok.com/@usalab.ia?lang=pt-BR"
  };
  var BADGES = {
    apple: {
      es: "images/badges/apple-es.svg",
      en: "images/badges/apple-en.svg",
      pt: "images/badges/apple-pt.svg"
    },
    play: {
      es: "images/badges/play-es.png",
      en: "images/badges/play-en.png",
      pt: "images/badges/play-pt.png"
    }
  };

  var strings = {
    es: {
      "meta.home": "Lab.IA — Frases para ligar",
      "meta.terms": "Términos de Uso - Lab.IA",
      "meta.privacy": "Política de Privacidad - Lab.IA",
      "nav.terms": "Términos",
      "nav.privacy": "Privacidad",
      "nav.contact": "Contacto",
      "nav.open": "Abrir menú",
      "nav.close": "Cerrar menú",
      "lang.label": "Idioma",
      "hero.eyebrow": "FRASES PARA LIGAR",
      "hero.title": "Lleva tus conversaciones al siguiente nivel",
      "hero.lede": "Tu asistente de flirteo. Genera respuestas con el tono justo: de suave a picante, sin perder tu voz.",
      "store.app": "Consíguelo en el App Store",
      "store.play": "Consíguelo en Google Play",
      "phone.label": "Capturas de Lab.IA",
      "phone.role": "carrusel",
      "shot.1": "Pantalla de inicio de Lab.IA",
      "shot.2": "Generador de frases de Lab.IA",
      "shot.3": "Selección de país en Lab.IA",
      "shot.4": "Sube un pantallazo en Lab.IA",
      "shot.5": "Respuesta sugerida en Lab.IA",
      "modes.title": "Elige el nivel de picante",
      "modes.sub": "Cinco modos reales de la app. Tú decides cuánto calor lleva cada respuesta.",
      "mode.softest": "Muy suave",
      "mode.softestBody": "Amable, sin presión. Ideal para romper el hielo.",
      "mode.soft": "Suave",
      "mode.softBody": "Cercano y ligero, con un toque de interés.",
      "mode.mid": "Medio",
      "mode.midBody": "Flirteo claro, natural y con personalidad.",
      "mode.hot": "Picante",
      "mode.hotBody": "Directo y atrevido, sin pasarte de la raya.",
      "mode.hottest": "Muy picante",
      "mode.hottestBody": "Máxima intensidad. Para cuando ya hay química.",
      "faq.title": "Preguntas frecuentes",
      "faq.sub": "Lo esencial para empezar a usarla con confianza.",
      "faq.q1": "¿Cómo genera las respuestas?",
      "faq.a1": "Sube una captura de la conversación y Lab.IA te propone respuestas con el nivel de picante que elijas. Tú copias, editas y envías.",
      "faq.q2": "¿Sirve solo para ligar?",
      "faq.a2": "Está pensada para flirteo y citas, pero también ayuda en chats donde quieres sonar más ingenioso, cercano o seguro.",
      "faq.q3": "¿Se nota que es una app?",
      "faq.a3": "Las sugerencias buscan tu tono, no un texto genérico. Ajusta el picante y edita lo que no suene a ti antes de enviar.",
      "faq.q4": "¿Qué es el nivel de picante?",
      "faq.a4": "Es el control de intensidad: de muy suave a muy picante. Así la respuesta encaja con el momento de la conversación.",
      "faq.q5": "¿Qué pasa con mi privacidad?",
      "faq.a5": "Usa la app para generar frases, no para publicar tus chats. Si tienes dudas, escríbenos a <a href=\"mailto:main@usalabia.com\">main@usalabia.com</a> o revisa la <a href=\"politica-de-privacidad.html\">política de privacidad</a>.",
      "cta.title": "Empieza a ligar mejor hoy",
      "cta.sub": "Descarga Lab.IA en iOS o Android y prueba tu primer mensaje.",
      "footer.privacy": "Privacidad",
      "footer.terms": "Términos",
      "footer.contact": "Contacto",
      "footer.copy": "Propiedad y operado por GGGAM Enterprises LLC"
    },
    en: {
      "meta.home": "Lab.IA — Lines to flirt",
      "meta.terms": "Terms of Use - Lab.IA",
      "meta.privacy": "Privacy Policy - Lab.IA",
      "nav.terms": "Terms",
      "nav.privacy": "Privacy",
      "nav.contact": "Contact",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "lang.label": "Language",
      "hero.eyebrow": "LINES TO FLIRT",
      "hero.title": "Take your conversations to the next level",
      "hero.lede": "Your flirting assistant. Generate replies with the right heat: from soft to spicy, without losing your voice.",
      "store.app": "Download on the App Store",
      "store.play": "Get it on Google Play",
      "phone.label": "Lab.IA screenshots",
      "phone.role": "carousel",
      "shot.1": "Lab.IA home screen",
      "shot.2": "Lab.IA line generator",
      "shot.3": "Country picker in Lab.IA",
      "shot.4": "Upload a screenshot in Lab.IA",
      "shot.5": "Suggested reply in Lab.IA",
      "modes.title": "Pick the heat level",
      "modes.sub": "Five real in-app modes. You decide how hot each reply should be.",
      "mode.softest": "Very soft",
      "mode.softestBody": "Kind, no pressure. Perfect for breaking the ice.",
      "mode.soft": "Soft",
      "mode.softBody": "Warm and light, with a hint of interest.",
      "mode.mid": "Medium",
      "mode.midBody": "Clear, natural flirting with personality.",
      "mode.hot": "Spicy",
      "mode.hotBody": "Direct and bold, without going too far.",
      "mode.hottest": "Extra spicy",
      "mode.hottestBody": "Maximum heat. For when the chemistry is already there.",
      "faq.title": "Frequently asked questions",
      "faq.sub": "The essentials so you can start with confidence.",
      "faq.q1": "How does it generate replies?",
      "faq.a1": "Upload a screenshot of the chat and Lab.IA suggests replies at the heat level you pick. You copy, edit, and send.",
      "faq.q2": "Is it only for dating?",
      "faq.a2": "It's built for flirting and dates, but it also helps in chats where you want to sound wittier, closer, or more confident.",
      "faq.q3": "Will it sound like an app?",
      "faq.a3": "Suggestions aim for your tone, not generic copy. Dial the heat and edit anything that doesn't sound like you before you send.",
      "faq.q4": "What is the heat level?",
      "faq.a4": "It's the intensity control: from very soft to extra spicy, so the reply fits the moment.",
      "faq.q5": "What about my privacy?",
      "faq.a5": "Use the app to generate lines, not to publish your chats. Questions? Email <a href=\"mailto:main@usalabia.com\">main@usalabia.com</a> or read the <a href=\"politica-de-privacidad.html\">privacy policy</a>.",
      "cta.title": "Start flirting better today",
      "cta.sub": "Download Lab.IA on iOS or Android and try your first message.",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",
      "footer.contact": "Contact",
      "footer.copy": "Owned and operated by GGGAM Enterprises LLC"
    },
    pt: {
      "meta.home": "Lab.IA — Cantadas",
      "meta.terms": "Termos de Uso - Lab.IA",
      "meta.privacy": "Política de Privacidade - Lab.IA",
      "nav.terms": "Termos",
      "nav.privacy": "Privacidade",
      "nav.contact": "Contato",
      "nav.open": "Abrir menu",
      "nav.close": "Fechar menu",
      "lang.label": "Idioma",
      "hero.eyebrow": "CANTADAS",
      "hero.title": "Leve suas conversas para o próximo nível",
      "hero.lede": "Seu assistente de flerte. Gere respostas no tom certo: do suave ao picante, sem perder a sua voz.",
      "store.app": "Baixar na App Store",
      "store.play": "Disponível no Google Play",
      "phone.label": "Capturas do Lab.IA",
      "phone.role": "carrossel",
      "shot.1": "Tela inicial do Lab.IA",
      "shot.2": "Gerador de frases do Lab.IA",
      "shot.3": "Seleção de país no Lab.IA",
      "shot.4": "Envie um print no Lab.IA",
      "shot.5": "Resposta sugerida no Lab.IA",
      "modes.title": "Escolha o nível de picante",
      "modes.sub": "Cinco modos reais do app. Você decide quanto calor cada resposta leva.",
      "mode.softest": "Muito suave",
      "mode.softestBody": "Gentil, sem pressão. Ideal para quebrar o gelo.",
      "mode.soft": "Suave",
      "mode.softBody": "Próximo e leve, com um toque de interesse.",
      "mode.mid": "Médio",
      "mode.midBody": "Flerte claro, natural e com personalidade.",
      "mode.hot": "Picante",
      "mode.hotBody": "Direto e ousado, sem passar do ponto.",
      "mode.hottest": "Muito picante",
      "mode.hottestBody": "Intensidade máxima. Para quando já tem química.",
      "faq.title": "Perguntas frequentes",
      "faq.sub": "O essencial para começar a usar com confiança.",
      "faq.q1": "Como gera as respostas?",
      "faq.a1": "Envie um print da conversa e o Lab.IA sugere respostas no nível de picante que você escolher. Você copia, edita e envia.",
      "faq.q2": "Serve só para flertar?",
      "faq.a2": "Foi feito para flerte e encontros, mas também ajuda em chats em que você quer soar mais criativo, próximo ou seguro.",
      "faq.q3": "Dá para perceber que é um app?",
      "faq.a3": "As sugestões buscam o seu tom, não um texto genérico. Ajuste o picante e edite o que não soar como você antes de enviar.",
      "faq.q4": "O que é o nível de picante?",
      "faq.a4": "É o controle de intensidade: de muito suave a muito picante, para a resposta combinar com o momento da conversa.",
      "faq.q5": "E a minha privacidade?",
      "faq.a5": "Use o app para gerar frases, não para publicar seus chats. Dúvidas? Escreva para <a href=\"mailto:main@usalabia.com\">main@usalabia.com</a> ou veja a <a href=\"politica-de-privacidad.html\">política de privacidade</a>.",
      "cta.title": "Comece a flertar melhor hoje",
      "cta.sub": "Baixe o Lab.IA no iOS ou Android e teste sua primeira mensagem.",
      "footer.privacy": "Privacidade",
      "footer.terms": "Termos",
      "footer.contact": "Contato",
      "footer.copy": "Propriedade e operação de GGGAM Enterprises LLC"
    }
  };

  function normalize(code) {
    var value = (code || "").toLowerCase();
    if (value.indexOf("pt") === 0) return "pt";
    if (value.indexOf("es") === 0) return "es";
    if (value.indexOf("en") === 0) return "en";
    return "";
  }

  function screenshotSrc(lang, n) {
    return lang === "es"
      ? "images/screenshots/" + n + ".jpg"
      : "images/screenshots/" + lang + "/" + n + ".jpg";
  }

  function detect() {
    var booted = normalize(document.documentElement.getAttribute("data-lang"));
    if (SUPPORTED[booted]) return booted;

    try {
      var params = new URLSearchParams(window.location.search);
      var fromQuery = normalize(params.get("lang"));
      if (SUPPORTED[fromQuery]) return fromQuery;
    } catch (e) {}

    try {
      var stored = normalize(window.localStorage.getItem(STORAGE_KEY));
      if (SUPPORTED[stored]) return stored;
    } catch (e2) {}

    var list = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage];
    for (var i = 0; i < list.length; i++) {
      var match = normalize(list[i]);
      if (SUPPORTED[match]) return match;
    }
    return "es";
  }

  function t(lang, key) {
    return (strings[lang] && strings[lang][key]) || strings.es[key] || "";
  }

  function setText(el, value) {
    el.textContent = value;
  }

  function applyAttributes(el, lang) {
    var spec = el.getAttribute("data-i18n-attr");
    if (!spec) return;
    spec.split(",").forEach(function (part) {
      var bits = part.split(":");
      if (bits.length < 2) return;
      el.setAttribute(bits[0].trim(), t(lang, bits[1].trim()));
    });
  }

  function setScreenshots(lang) {
    document.querySelectorAll("[data-screenshot]").forEach(function (img) {
      var n = img.getAttribute("data-screenshot");
      var localized = screenshotSrc(lang, n);
      var fallback = "images/screenshots/" + n + ".jpg";
      img.onerror = function () {
        img.onerror = null;
        if (img.getAttribute("src") !== fallback) img.src = fallback;
      };
      if (img.getAttribute("src") !== localized) img.src = localized;
    });
  }

  function apply(lang) {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.documentElement.setAttribute("data-lang", lang);

    var page = document.documentElement.getAttribute("data-page") || "home";
    document.title = t(lang, "meta." + page);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      setText(el, t(lang, el.getAttribute("data-i18n")));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(lang, el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      applyAttributes(el, lang);
    });
    document.querySelectorAll("[data-store=apple]").forEach(function (el) {
      el.href = APPLE[lang] || APPLE.es;
    });
    document.querySelectorAll("[data-badge]").forEach(function (img) {
      var kind = img.getAttribute("data-badge");
      if (BADGES[kind] && BADGES[kind][lang]) img.src = BADGES[kind][lang];
    });
    document.querySelectorAll("[data-social='tiktok']").forEach(function (el) {
      el.href = TIKTOK[lang] || TIKTOK.es;
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var active = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");
    if (header && toggle) {
      var open = header.classList.contains("is-open");
      toggle.setAttribute("aria-label", t(lang, open ? "nav.close" : "nav.open"));
    }

    setScreenshots(lang);
  }

  function setLang(lang) {
    if (!SUPPORTED[lang]) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url);
    } catch (e2) {}
    apply(lang);
  }

  var current = detect();
  try {
    window.localStorage.setItem(STORAGE_KEY, current);
  } catch (e3) {}

  window.LabIA = {
    lang: function () {
      return current;
    },
    t: function (key) {
      return t(current, key);
    },
    setLang: function (lang) {
      current = lang;
      setLang(lang);
    }
  };

  apply(current);

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.LabIA.setLang(btn.getAttribute("data-set-lang"));
    });
  });
})();
