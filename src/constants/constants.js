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
  Palette,
  Scissors,
  Zap,
  Atom,
  FileType,
  Repeat,
  Wind,
  LayoutGrid,
  Leaf,
  Hexagon,
  Server,
  Package,
  PackagePlus,
  Dog,
  GitBranch,
  Github,
  Ship,
  Figma,
  Gitlab,
  Brush,
  CodeXml,
  FileJson,
  FileCode2,
  GlassWater,
  PawPrint,
  Settings,
  Blocks,
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
    `Создаю удобные и функциональные веб-интерфейсы, используя современный стек инструментов. Всегда стремлюсь к развитию своих навыков и изучению новых технологий.`,
    `Активно участвую в командной разработке, внимателен к деталям, ответственно подхожу к выполнению задач, требователен к качеству кода и всегда открыт к конструктивной критике.`,
    "Связаться со мной",
    "Ссылка на мой GitHub",
    "Ссылка на GitHub",
    "н.в.",
    "2024",
    "Re-Action",
    `- Разработка UI компонентов на React;
    - Проведение code-review вместе с другими разработчиками;
    - Оптимизация существующего кода и исправление багов;
    - Интеграция сторонних сервисов;
    - Работа с внешним API;
    - Взаимодействие с командами backend, design, analytic, CEO и SEO в процессе решения задач.
    `,
    "2024",
    "2022",
    "Обучение в Яндек.Практикум по направлению web-разработчик",
    `- Обучение навыкам применения HTML, CSS, БЭМ, JavaScript, React, Git, REST API, Node.js, Express.js, mongoDB во frontend и backend разработке;
    - Разработка адаптивных лендинг сайтов и полноценных web-приложений (frontend + backend)`,
    "2022",
    "2021",
    "Технопарк Кванториум (IT-квантум)",
    "Разработка сайтов визиток и лендингов в процессе обучения детей базовым навыкам HTML, CSS и JavaScript",
  ],
  eng: [
    "About",
    "Me",
    "Frontend developer",
    `I create user-friendly and functional web interfaces using a modern tech stack. I am always striving to improve my skills and explore new technologies.`,
    `Actively involved in team development, attentive to details, responsible in task execution, committed to code quality, and always open to constructive feedback.`,
    "Contact Me",
    "Link to my GitHub",
    "Link to GitHub",
    "present",
    "2024",
    "Re-Action",
    `- Developing UI components in React;
    - Conducting code reviews with other developers;
    - Optimizing existing code and fixing bugs;
    - Integrating third-party services;
    - Working with external APIs;
    - Collaborating with backend, design, analytics, CEO and SEO teams to solve tasks.
    `,
    "2024",
    "2022",
    "Learning at Yandex.Practicum in Web Development",
    `- Learned to use HTML, CSS, BEM, JavaScript, React, Git, REST API, Node.js, Express.js, and mongoDB in frontend and backend development;
    - Developed adaptive landing pages and full-fledged web applications (frontend + backend).`,
    "2022",
    "2021",
    "Technopark Quantorium (IT-Quantum)",
    "Developed landing pages and business card websites while teaching children the basics of HTML, CSS, and JavaScript.",
  ],
};

export const skillsSectionText = {
  ru: [
    "Мои",
    "Навыки",
    "Основные навыки — активно использую в текущей работе и проектах. Вторичные навыки — применял ранее в отдельных задачах и проектах.",
  ],
  eng: [
    "My",
    "Skills",
    "Primary skills - actively used in current work and projects. Secondary skills - previously used in individual tasks and projects.",
  ],
};
//_________________________________________________________________________
export const skills = [
  {
    skillName: "HTML",
    icon: FileCode2,
    color: "text-orange-600",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "CSS",
    icon: Palette,
    color: "text-blue-500",
    category: ["Secondary", "Вторичные"],
  },
  {
    skillName: "SCSS/SASS",
    icon: Scissors,
    color: "text-pink-400",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "JavaScript",
    icon: FileJson,
    color: "text-yellow-300",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "React",
    icon: Atom,
    color: "text-cyan-400",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "TypeScript",
    icon: FileType,
    color: "text-blue-500",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "Redux Toolkit",
    icon: Repeat,
    color: "text-violet-600",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "Tailwind CSS",
    icon: Wind,
    color: "text-teal-400",
    category: ["Secondary", "Вторичные"],
  },
  {
    skillName: "FSD architecture",
    icon: LayoutGrid,
    color: "text-sky-400",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "BEM",
    icon: Blocks,
    color: "text-blue-600",
    category: ["Secondary", "Вторичные"],
  },
  {
    skillName: "Node.js",
    icon: Hexagon,
    color: "text-green-700",
    category: ["Secondary", "Вторичные"],
  },
  {
    skillName: "Express.js",
    icon: Server,
    color: "text-(--primary-foreground)",
    category: ["Secondary", "Вторичные"],
  },
  {
    skillName: "MongoDB",
    icon: Leaf,
    color: "text-green-500",
    category: ["Secondary", "Вторичные"],
  },
  {
    skillName: "Vite.js",
    icon: Zap,
    color: "text-yellow-500",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "Webpack",
    icon: Package,
    color: "text-blue-400",
    category: ["Secondary", "Вторичные"],
  },
  {
    skillName: "Pug",
    icon: Dog,
    color: "text-orange-200",
    category: ["Secondary", "Вторичные"],
  },
  {
    skillName: "Gulp.js",
    icon: GlassWater,
    color: "text-red-400",
    category: ["Secondary", "Вторичные"],
  },
  {
    skillName: "NPM",
    icon: PackagePlus,
    color: "text-red-700",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "yarn",
    icon: PawPrint,
    color: "text-(--primary-foreground)",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "Git",
    icon: GitBranch,
    color: "text-sky-400",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "GitHub",
    icon: Github,
    color: "text-(--primary-foreground)",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "GitLab",
    icon: Gitlab,
    color: "text-orange-400",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "Docker",
    icon: Ship,
    color: "text-blue-400",
    category: ["Secondary", "Вторичные"],
  },
  {
    skillName: "Figma",
    icon: Figma,
    color: "text-(--primary-foreground)",
    category: ["Secondary", "Вторичные"],
  },
  {
    skillName: "Pixso",
    icon: Brush,
    color: "text-pink-300",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "VS Code",
    icon: CodeXml,
    color: "text-blue-400",
    category: ["Primary", "Основные"],
  },
  {
    skillName: "REST API",
    icon: Settings,
    color: "text-blue-300",
    category: ["Primary", "Основные"],
  },
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
        ? "Web-приложение с авторизацией для поиска и просмотра понравившихся фильмов"
        : "Web-service for searching and watching your favorite movies",
    image: moviesExplorerLogo,
    tags: [
      "React",
      "JavaScript",
      "Express.js",
      "MongoDB",
      "Webpack",
      "REST API",
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
        ? "Web-приложение с авторизацией, чтобы загружать изображения в общую галерею и делиться ими с другими пользователями"
        : "Web-service to upload images to a shared gallery and share them with other users",
    image: mestoReact,
    tags: [
      "React",
      "JavaScript",
      "Express.js",
      "MongoDB",
      "Webpack",
      "REST API",
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
        ? "Web-приложение (без авторизации), чтобы загружать изображения в общую галерею и делиться ими с другими пользователями"
        : "Web-service to upload images to a shared gallery and share them with other users",
    image: mestoJavaScript,
    tags: ["JavaScript", "OOP", "HTML", "CSS", "Mobile", "Tablet", "Desktop"],
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
    "Представляю список моих завершенных проектов. Каждый проект можно открыть в демо режиме или открыть репозиторий с проектом на GitHub.",
    "Ссылка на демо проекта",
    "Ссылка на проект на GitHub",
    "Посмотреть мой GitHub",
  ],
  eng: [
    "Created",
    "Projects",
    "Here is a list of my completed projects. Each project can be opened in demo mode or a repository with the project can be opened on GitHub.",
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

export const notFoundPageText = {
  ru: [
    "Страница не найдена",
    "Такой страницы не существует",
    "Вернуться на главную",
  ],
  eng: ["Page not found", "This page does not exist", "Return to home"],
};
