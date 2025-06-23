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
    </footer>
  );
};
