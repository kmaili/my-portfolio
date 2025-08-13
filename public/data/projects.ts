import scraperXpressPhoto from '../assets/scraperXpress-photo.png'
import holoulPhoto from '../assets/holoul-photo.png'

export const projects = [
  {
    ImageURL: scraperXpressPhoto,
    Title: "ScrapXpress",
    Description:
      "Plateforme no-code pour workflows de scraping complexes avec backend scalable et frontend Angular intuitif avec visualisation temps réel.",
    Technologies: [
      "angular",
      "django",
      "python",
      "docker",
      "celery",
      "redis",
      "websockets",
      "postgresql",
      "rest api"
    ],
    Source: "#",
    Demo: "https://www.linkedin.com/posts/aymen-kmaili-75851a1bb_webscraping-nocode-automation-activity-7360324566549676032-9u6b?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMoBLQB2EyDzQSS0SM4Mw92mLLxmfsMXwY", // À remplacer par votre lien réel
  },
  {
    ImageURL: "https://ntxgroupsa.com/wp-content/uploads/2019/11/project-placeholder.jpg",
    Title: "Real-time Auction Platform",
    Description:
      "Application d'enchères temps réel avec gestion sécurisée des utilisateurs et des paiements, développée en freelance.",
    Technologies: [
      "angular",
      "django",
      "python",
      "websockets",
      "postgresql",
      "rest api",
      "authentication"
    ],
    Source: "#", // À remplacer par votre lien réel
    Demo: "#", // À remplacer par votre lien réel
  },
  {
    ImageURL: "https://ntxgroupsa.com/wp-content/uploads/2019/11/project-placeholder.jpg",
    Title: "Warrini",
    Description:
      "Plateforme éducative pour étudiants IT avec système d'authentification, génération automatique de CV et recommandations personnalisées.",
    Technologies: [
      "django",
      "python",
      "postgresql",
      "rest api",
      "authentication",
      "database design"
    ],
    Source: "#", // À remplacer par votre lien réel
    Demo: "#", // À remplacer par votre lien réel
  },
  {
    ImageURL: holoulPhoto,
    Title: "Plateforme de Crowdsourcing",
    Description:
      "Plateforme modulaire avec soumission de problèmes, propositions de solutions, vote et intégration d'un LLM pour l'analyse intelligente des solutions.",
    Technologies: [
      "django",
      "python",
      "llm",
      "ollama",
      "celery",
      "redis",
      "jenkins",
      "docker",
      "postgresql"
    ],
    Source: "#", // À remplacer par votre lien réel
    Demo: "#", // À remplacer par votre lien réel
  },
  {
    ImageURL: "https://coursecouponclub.com/wp-content/uploads/2021/07/5555520_d54c.jpg",
    Title: "Agrégateur de données de réseaux sociaux",
    Description:
      "Pipelines de web scraping évolutifs avec Django REST Framework, optimisation du scraping (-40% temps) et gestion intelligente des CAPTCHA.",
    Technologies: [
      "django",
      "python",
      "web scraping",
      "rest api",
      "optimization",
      "automation"
    ],
    Source: "#", // À remplacer par votre lien réel
    Demo: "#", // Pas de démo pour ce projet
  }
];