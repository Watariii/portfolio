import moviesExplorerLogo from "../images/movies-explorer.png";
import mestoReact from "../images/mesto-react.png";
import mestoJavaScript from "../images/mesto-javascript.png";
import closingTagDark from "../images/closing-tag-dark.png";
import closingTagLight from "../images/closing-tag-light.png";
import noFocusLight from "../images/no-focus-light.png";
import noFocusDark from "../images/no-focus-dark.png";
import russianTravel from "../images/russian-travel.png";
import onoTebeNado from "../images/ono-tebe-nado.png";
import posmotri from "../images/posmotri.png";
import learning from "../images/learning.png";
import weddingWebsite from "../images/wedding-website.png";

import {
  FileCode,
  Palette,
  Scissors,
  Zap,
  Atom,
  ShieldCheck,
  Repeat,
  Wind,
  LayoutGrid,
  Leaf,
  Server,
  Database,
  Flame,
  Package,
  PackagePlus,
  Dog,
  TestTube,
  GitBranch,
  Ship,
  Figma,
  Brush,
  CodeXml,
} from "lucide-react";

export const lang = {
  ru: "Eng",
  eng: "Рус",
};

export const navText = {
  ru: [
    { name: "Главная", href: "#person" },
    { name: "Обо мне", href: "#about" },
    { name: "Навыки", href: "#skills" },
    { name: "Проекты", href: "#projects" },
    { name: "Контакты", href: "#contact" },
  ],
  eng: [
    { name: "Home", href: "#person" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
};

export const personSectionText = {
  ru: [
    "Привет! Меня зовут",
    "Никита",
    "Сухов",
    "Создаю функциональные веб-интерфейсы с использованием современных технологий, специализируясь на frontend разработке.",
    "Посмотреть мои проекты",
  ],
  eng: [
    "Hello! I'm",
    "Nikita",
    "Sukhov",
    "I create functional web interfaces using modern technologies, specializing in frontend development.",
    "View My Projects",
  ],
};

export const aboutSectionText = {
  ru: [
    "Обо",
    "Мне",
    "Frontend-разработчик",
    "Текст о том какой я у меня опыт вкрате",
    "Мои приемущестенные софт скилы",
    "Связаться со мной",
    "Загрузить резюме",
    "1 опыт работы",
    "Длительность что делал",
    "2 опыт работы",
    "Длительность что делал",
    "3 опыт работы",
    "Длительность что делал",
  ],
  eng: [
    "About",
    "Me",
    "Passionate Web Developer & Tech Creator",
    "With over 5 years of experience in web development, I specialize in creating responsive, accessible, and performant web applications using modern technologies.",
    "I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.",
    "Get In Touch",
    "Download CV",
    "Web Development",
    "Creating responsive websites and web applications with modern frameworks.",
    "UI/UX Design",
    "Designing intuitive user interfaces and seamless user experiences.",
    "Project Management",
    "Leading projects from conception to completion with agile methodologies.",
  ],
};

export const skillsSectionText = {
  ru: ["Мои", "Навыки"],
  eng: ["My", "Skills"],
};
//_________________________________________________________________________
export const skills = [
  { skillName: "HTML", icon: FileCode, category: ["Primary", "Основные"] },
  { skillName: "CSS", icon: Palette, category: ["Secondary", "Вторичные"] },
  { skillName: "SCSS/SASS", icon: Scissors, category: ["Primary", "Основные"] },
  { skillName: "JavaScript", icon: Zap, category: ["Primary", "Основные"] },
  { skillName: "React", icon: Atom, category: ["Primary", "Основные"] },
  {
    skillName: "TypeScript",
    icon: ShieldCheck,
    category: ["Primary", "Основные"],
  },
  {
    skillName: "Redux/RTK/RTK-query",
    icon: Repeat,
    category: ["Primary", "Основные"],
  },
  {
    skillName: "Tailwind CSS",
    icon: Wind,
    category: ["Secondary", "Вторичные"],
  },
  {
    skillName: "FSD architecture",
    icon: LayoutGrid,
    category: ["Primary", "Основные"],
  },
  { skillName: "Node.js", icon: Leaf, category: ["Secondary", "Вторичные"] },
  {
    skillName: "Express.js",
    icon: Server,
    category: ["Secondary", "Вторичные"],
  },
  {
    skillName: "MongoDB",
    icon: Database,
    category: ["Secondary", "Вторичные"],
  },
  { skillName: "Vite.js", icon: Flame, category: ["Primary", "Основные"] },
  { skillName: "Webpack", icon: Package, category: ["Secondary", "Вторичные"] },
  { skillName: "Pug", icon: Dog, category: ["Secondary", "Вторичные"] },
  {
    skillName: "Gulp.js",
    icon: TestTube,
    category: ["Secondary", "Вторичные"],
  },
  { skillName: "NPM", icon: PackagePlus, category: ["Primary", "Основные"] },
  { skillName: "yarn", icon: PackagePlus, category: ["Primary", "Основные"] },
  {
    skillName: "Git/GitHub/GitLab",
    icon: GitBranch,
    category: ["Primary", "Основные"],
  },
  { skillName: "Docker", icon: Ship, category: ["Secondary", "Вторичные"] },
  { skillName: "Figma", icon: Figma, category: ["Secondary", "Вторичные"] },
  { skillName: "Pixso", icon: Brush, category: ["Primary", "Основные"] },
  { skillName: "VS Code", icon: CodeXml, category: ["Primary", "Основные"] },
];

export const categoriesText = {
  ru: ["Все", "Основные", "Вторичные"],
  eng: ["All", "Primary", "Secondary"],
};
//_________________________________________________________________________
export const getProjects = (lang, isDarkTheme) => [
  {
    id: 10,
    title: "Movies-explorer",
    description:
      lang === "Eng"
        ? "Веб-приложение, для поиска и просмотра понравившихся фильмов"
        : "Web-service for searching and watching your favorite movies",
    image: moviesExplorerLogo,
    tags: [
      "React",
      "JavaScript",
      "Express.js",
      "MongoDB",
      "Webpack",
      "Mobile",
      "Tablet",
      "Desktop",
    ],
    demoUrl: "https://movies-explorer.sukhov-nikita.ru",
    gitHubUrl: "https://github.com/Watariii/movies-explorer-frontend",
  },
  {
    id: 9,
    title: "Mesto Russia (React)",
    description:
      lang === "Eng"
        ? "Веб-приложение, чтобы загружать изображения в общую галерею и делиться ими с другими пользователями"
        : "Web-service to upload images to a shared gallery and share them with other users",
    image: mestoReact,
    tags: [
      "React",
      "JavaScript",
      "Express.js",
      "MongoDB",
      "Webpack",
      "Mobile",
      "Tablet",
      "Desktop",
    ],
    demoUrl: "https://mesto-react.sukhov-nikita.ru/sign-in",
    gitHubUrl: "https://github.com/Watariii/react-mesto-api-full-gha",
  },
  {
    id: 8,
    title: "Wedding's website",
    description:
      lang === "Eng"
        ? "Свадебный сайт для информационной поддержки гостей и взаимодейстия с организаторами"
        : "Wedding's website for information support of guests and interaction with organizers",
    image: weddingWebsite,
    tags: [
      "JavaScript",
      "SCSS",
      "Pug",
      "Gulp.js",
      "Mobile",
      "Tablet",
      "Desktop",
    ],
    demoUrl: "https://sukhov-nikita.ru/arina-nikita/dist/",
    gitHubUrl: "https://github.com/Watariii/arina-nikita",
  },
  {
    id: 7,
    title: "Mesto Russia (JavaScript)",
    description:
      lang === "Eng"
        ? "Веб-приложение (без авторизации), чтобы загружать изображения в общую галерею и делиться ими с другими пользователями"
        : "Web-service to upload images to a shared gallery and share them with other users",
    image: mestoJavaScript,
    tags: ["JavaScript", "HTML", "CSS", "Mobile", "Tablet", "Desktop"],
    demoUrl: "https://sukhov-nikita.ru/mesto/dist/",
    gitHubUrl: "https://github.com/Watariii/mesto",
  },
  {
    id: 6,
    title: "Закрывающий тег",
    description:
      lang === "Eng"
        ? "Сайт с темизацией, приятной анимацией 'лайков' и пиксельной атмосферой"
        : "Website with toggle theme, a nice like animation and a pixel atmosphere",
    image: isDarkTheme ? closingTagDark : closingTagLight,
    tags: [
      "JavaScript",
      "SCSS",
      "Pug",
      "Gulp.js",
      "Mobile",
      "Tablet",
      "Desktop",
    ],
    demoUrl: "https://sukhov-nikita.ru/zakrivayuschiy-teg-f/dist/",
    gitHubUrl: "https://github.com/Watariii/zakrivayuschiy-teg-f",
  },
  {
    id: 5,
    title: "Сложно сосредоточиться",
    description:
      lang === "Eng"
        ? "Лендинг с темизацией о том, как сконцентрироваться при работе"
        : "Landing page with theming on how to concentrate while working",
    image: isDarkTheme ? noFocusDark : noFocusLight,
    tags: ["JavaScript", "HTML", "CSS", "Git", "Mobile", "Tablet", "Desktop"],
    demoUrl: "https://sukhov-nikita.ru/slozhno-sosredotochitsya/",
    gitHubUrl: "https://github.com/Watariii/slozhno-sosredotochitsya",
  },
  {
    id: 4,
    title: "Путешествия по России",
    description:
      lang === "Eng"
        ? "Лендинг про путешествия по России"
        : "Landing page about traveling around Russia",
    image: russianTravel,
    tags: ["HTML", "CSS", "Mobile", "Tablet", "Desktop"],
    demoUrl: "https://sukhov-nikita.ru/russian-travel/",
    gitHubUrl: "https://github.com/Watariii/russian-travel",
  },
  {
    id: 3,
    title: "Оно тебе надо",
    description:
      lang === "Eng"
        ? "Лендинг про аукцион вещей в которые никто не верил"
        : "Landing page about auction of things that no one believed in",
    image: onoTebeNado,
    tags: ["HTML", "CSS"],
    demoUrl: "https://sukhov-nikita.ru/ono-tebe-nado/",
    gitHubUrl: "https://github.com/Watariii/ono-tebe-nado",
  },
  {
    id: 2,
    title: "Посмотри в окно",
    description:
      lang === "Eng"
        ? "Прототип веб-приложения для просмотра видео по запросу с фильтрацией"
        : "Prototype web app for watching video on demand with filtering",
    image: posmotri,
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://sukhov-nikita.ru/posmotri_v_okno/",
    gitHubUrl: "https://github.com/Watariii/posmotri_v_okno",
  },
  {
    id: 1,
    title: "Научиться учиться",
    description:
      lang === "Eng"
        ? "Лендин про современные и эффективные подходы к обучению"
        : "Landin on modern and effective approaches to learning",
    image: learning,
    tags: ["HTML", "CSS"],
    demoUrl: "https://sukhov-nikita.ru/how-to-learn/",
    gitHubUrl: "https://github.com/Watariii/how-to-learn",
  },
];
export const projectsSectionText = {
  ru: [
    "Созданные",
    "Проекты",
    "Представляю список моих завершенных проектов, каждый из которых был реализован с приоритетом на чистую архитектуру и создание качественного пользовательского опыта.",
    "Ссылка на демо проекта",
    "Ссылка на проект на GitHub",
    "Посмотреть мой GitHub",
  ],
  eng: [
    "Created",
    "Projects",
    "Here is a list of my completed projects, each of which was implemented with a focus on clean architecture and creating a quality user experience.",
    "Link to demo project",
    "Link to project GitHub",
    "Check My Github",
  ],
};

export const contactSectionText = {
  ru: [
    "Связаться со",
    "Мной",
    "Буду рад обсудить предложения о взаимной работе и ответить на ваши вопросы. Доступен для связи с понедельника по пятницу с 8:00 до 20:00 (Мск).",
    "Контактная Информация",
    "Местоположение",
    "Королёв, МО, Россия",
    "Меня также можно найти",
  ],
  eng: [
    "Get In",
    "Touch",
    "Do you want to ask something interesting? Contact me. I am in touch monday-friday from 8:00 am to 8:00 pm (GMT+3).",
    "Contact Information",
    "Location",
    "Korolev, Moscow, Russia",
    "Connect With Me",
  ],
};
