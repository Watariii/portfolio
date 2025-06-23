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

const skills = [
  { name: "HTML", icon: FileCode },
  { name: "CSS", icon: Palette },
  { name: "SCSS / SASS", icon: Scissors },
  { name: "JavaScript", icon: Zap },
  { name: "TypeScript", icon: ShieldCheck },
  { name: "React", icon: Atom },
  { name: "Redux / RTK", icon: Repeat },
  { name: "Tailwind CSS", icon: Wind },
  { name: "FSD Architecture", icon: LayoutGrid },
  { name: "Node.js", icon: Leaf },
  { name: "Express.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Vite", icon: Flame },
  { name: "Webpack", icon: Package },
  { name: "NPM", icon: PackagePlus },
  { name: "Gulp", icon: TestTube },
  { name: "Pug", icon: Dog },
  { name: "Git / GitHub", icon: GitBranch },
  { name: "Docker", icon: Ship },
  { name: "Figma", icon: Figma },
  { name: "Pixso", icon: Brush },
  { name: "VS Code", icon: CodeXml },
];

export const Footer = () => {
  return (
    <footer className="pb-12 px-4 relative bg-secondary/30 cursor-default">
      © Nikita Sukhov, 2025
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 text-center hover:scale-105 transition-transform"
          >
            <Icon size={32} className="text-blue-600 dark:text-blue-400" />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        {["primary", "secondary"].map((type) => (
          <button
            key={type}
            className="px-4 py-1 rounded-full text-sm border bg-blue-600 text-white"
          >
            Основные
          </button>
        ))}
      </div>
    </footer>
  );
};
