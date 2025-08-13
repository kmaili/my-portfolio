export const aboutMe = {
  description: [
    "Ingénieur Logiciel Full-Stack passionné et spécialisé dans la création d'applications web robustes et évolutives. Double expertise en backend (Django, Spring Boot) et frontend (Angular). Solide expérience en Data Science et pipelines CI/CD (Docker, Jenkins). Capacité à livrer des produits performants, maintenables et prêts pour la production.",
  ],
  cvPath: "/assets/CV.pdf", // Upload your own CV in /public/assets as CV.pdf
  cvFileNameAfterDownload: "Aymen Kmaili CV.pdf", // This is what the name of the file is going to be when downloaded
};

export const technicalSkills: Record<string, string[]> = {
  // You can rename the type of skills, it's dynamically rendered. eg: You can change "Programming Languages" -> to just "Languages"
  "Programming Languages": ["Python", "Java", "JavaScript", "TypeScript", "C/C++"],
  "Frontend Development": [
    "Angular",
    "Flutter",
    "HTML5",
    "CSS3",
    "Bootstrap",
  ],
  "Backend Development": [
    "Django / DRF",
    "Spring Boot",
    "Postgres",
    "MongoDB"
  ],
  "UI/UX Design": [
    "Figma",
  ],
  "Tools & Technologies": [
    "Git",
    "GitHub",
    "Docker",
    "Jenkins",
    "Gitlab-CI"
  ],
  "Soft Skills": [
    "Presentation",
    "Communication",
    "Problem Solving",
    "Collaboration",
  ],
};
