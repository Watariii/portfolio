import { aboutSectionText } from "../constants/constants";
import { useText } from "../context/useText";
import { useTheme } from "../context/useTheme";
import { cn } from "../lib/utils";
import {
  Palette,
  Scissors,
  Zap,
  Atom,
  FileType,
  Repeat,
  LayoutGrid,
  Leaf,
  Server,
  Package,
  PackagePlus,
  GitBranch,
  Github,
  Figma,
  Gitlab,
  Brush,
  FileJson,
  FileCode2,
  PawPrint,
  Settings,
  Blocks,
  ExternalLink,
} from "lucide-react";

export const AboutSection = () => {
  const text = useText(aboutSectionText);
  const { isDarkTheme } = useTheme();
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="flex gap-2 items-center justify-center text-3xl md:text-4xl font-bold mb-12 text-center cursor-default">
          {text[0]}
          <span className="text-primary cursor-default">{text[1]}</span>
        </h2>
        <div className="flex flex-col gap-12 items-center">
          <div className="space-y-6 flex-1">
            <h3 className="text-2xl font-semibold cursor-default">{text[2]}</h3>
            <p className="text-muted-foreground cursor-default">{text[3]}</p>
            <p className="text-muted-foreground cursor-default">{text[4]}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {text[5]}
              </a>
              <a
                href="https://github.com/Watariii"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                title={text[6]}
                target="_blank"
              >
                {text[7]}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <div
              className={cn(
                "gradient-border p-6 card-hover shadow-sm",
                isDarkTheme && "shadow-white/20"
              )}
            >
              <div className="grid justify-items-center gap-4 grid-cols-[48px_minmax(150px,_1fr)]">
                <div className=" flex flex-col items-center gap-2 h-full col-start-1 row-start-1 row-end-4">
                  <p
                    className={cn(
                      "h-[26px] px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground shadow-md cursor-default",
                      isDarkTheme && "shadow-white/10"
                    )}
                  >
                    {text[8]}
                  </p>
                  <div
                    className={cn(
                      "w-0 h-full px-0.5 py-0.5 border rounded-full bg-primary/10 shadow-md",
                      isDarkTheme && "shadow-white/10"
                    )}
                  ></div>
                  <p
                    className={cn(
                      "h-[26px] px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground shadow-md cursor-default",
                      isDarkTheme && "shadow-white/10"
                    )}
                  >
                    {text[9]}
                  </p>
                </div>
                  <a
                    href="https://re-action.online/"
                    className="text-left text-[16px] sm:text-[18px] flex gap-1 justify-self-start font-semibold text-lg col-start-2 row-start-1 hover:text-primary transition-colors"
                  target="_blank"
                >
                  {text[10]}
                  <ExternalLink
                    size={12}
                    className="min-w-[12px] min-h-[12px] text-primary"
                  />
                </a>
                <p className="text-sm sm:text-[16px] text-left justify-self-start text-muted-foreground whitespace-pre-line col-start-2 row-start-2 cursor-default">
                  {text[11]}
                </p>
                <div className="flex-wrap flex gap-4 justify-self-start">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <FileCode2 size={16} className="text-orange-600" />
                    <span className="text-xs cursor-default">HTML</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Scissors size={16} className="text-pink-400" />
                    <span className="text-xs cursor-default">SCSS/SASS</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <FileType size={16} className="text-blue-500" />
                    <span className="text-xs cursor-default">TypeScript</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Atom size={16} className="text-cyan-400" />
                    <span className="text-xs cursor-default">React</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Repeat size={16} className="text-violet-600" />
                    <span className="text-xs cursor-default">Redux Toolkit</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <LayoutGrid size={16} className="text-sky-400" />
                    <span className="text-xs cursor-default">FSD</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Zap size={16} className="text-yellow-500" />
                    <span className="text-xs cursor-default">Vite.js</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <PawPrint
                      size={16}
                      className="text-(--primary-foreground)"
                    />
                    <span className="text-xs cursor-default">yarn</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <GitBranch size={16} className="text-blue-400" />
                    <span className="text-xs cursor-default">Git</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Gitlab size={16} className="text-orange-400" />
                    <span className="text-xs cursor-default">GitLab</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Brush size={16} className="text-pink-300" />
                    <span className="text-xs cursor-default">Pixso</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={cn(
                "gradient-border p-6 card-hover shadow-sm",
                isDarkTheme && "shadow-white/20"
              )}
            >
              <div className="grid justify-items-center gap-4 grid-cols-[48px_minmax(150px,_1fr)]">
                <div className=" flex flex-col items-center gap-2 h-full col-start-1 row-start-1 row-end-4">
                  <p
                    className={cn(
                      "h-[26px] px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground shadow-md cursor-default",
                      isDarkTheme && "shadow-white/10"
                    )}
                  >
                    {text[12]}
                  </p>
                  <div
                    className={cn(
                      "w-0 h-full px-0.5 py-0.5 border rounded-full bg-primary/10 shadow-md",
                      isDarkTheme && "shadow-white/10"
                    )}
                  ></div>
                  <p
                    className={cn(
                      "h-[26px] px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground shadow-md cursor-default",
                      isDarkTheme && "shadow-white/10"
                    )}
                  >
                    {text[13]}
                  </p>
                </div>
                <a
                  href="https://practicum.yandex.ru/"
                  className="text-left text-[16px] sm:text-[18px] flex gap-1 justify-self-start font-semibold text-lg col-start-2 row-start-1 hover:text-primary transition-colors"
                  target="_blank"
                >
                  {text[14]}
                  <ExternalLink
                    size={12}
                    className="min-w-[12px] min-h-[12px] text-primary"
                  />
                </a>
                <p className="text-sm sm:text-[16px] text-left justify-self-start text-muted-foreground whitespace-pre-line col-start-2 row-start-2 cursor-default">
                  {text[15]}
                </p>
                <div className="flex flex-wrap gap-4 justify-self-start">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <FileCode2 size={16} className="text-orange-600" />
                    <span className="text-xs cursor-default">HTML</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Palette size={16} className="text-blue-500" />
                    <span className="text-xs cursor-default">CSS</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <FileJson size={16} className="text-yellow-300" />
                    <span className="text-xs cursor-default">JavaScript</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Blocks size={16} className="text-blue-600" />
                    <span className="text-xs cursor-default">BEM</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Atom size={16} className="text-cyan-400" />
                    <span className="text-xs cursor-default">React</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Server size={16} className="text-(--primary-foreground)" />
                    <span className="text-xs cursor-default">Express.js</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Leaf size={16} className="text-green-500" />
                    <span className="text-xs cursor-default">MongoDB</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Package size={16} className="text-blue-400" />
                    <span className="text-xs cursor-default">Webpack</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <PackagePlus size={16} className="text-red-700" />
                    <span className="text-xs cursor-default">NPM</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <GitBranch size={16} className="text-blue-400" />
                    <span className="text-xs cursor-default">Git</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Github size={16} className="text-(--primary-foreground)" />
                    <span className="text-xs cursor-default">GitHub</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Settings size={16} className="text-blue-300" />
                    <span className="text-xs cursor-default">REST API</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Figma size={16} className="text-(--primary-foreground)" />
                    <span className="text-xs cursor-default">Figma</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={cn(
                "gradient-border p-6 card-hover shadow-sm",
                isDarkTheme && "shadow-white/20"
              )}
            >
              <div className="grid justify-items-center gap-4 grid-cols-[48px_minmax(150px,_1fr)]">
                <div className=" flex flex-col items-center gap-2 h-full col-start-1 row-start-1 row-end-4">
                  <p
                    className={cn(
                      "h-[26px] px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground shadow-md cursor-default",
                      isDarkTheme && "shadow-white/10"
                    )}
                  >
                    {text[16]}
                  </p>
                  <div
                    className={cn(
                      "w-0 h-full px-0.5 py-0.5 border rounded-full bg-primary/10 shadow-md",
                      isDarkTheme && "shadow-white/10"
                    )}
                  ></div>
                  <p
                    className={cn(
                      "h-[26px] px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground shadow-md cursor-default",
                      isDarkTheme && "shadow-white/10"
                    )}
                  >
                    {text[17]}
                  </p>
                </div>
                <a
                  href="https://vk.com/kvantoriumkorolev"
                  className="text-left text-[16px] sm:text-[18px] flex gap-1 justify-self-start font-semibold text-lg col-start-2 row-start-1 hover:text-primary transition-colors"
                  target="_blank"
                >
                  {text[18]}
                  <ExternalLink
                    size={12}
                    className="min-w-[12px] min-h-[12px] text-primary"
                  />
                </a>
                <p className="text-sm sm:text-[16px] text-left justify-self-start text-muted-foreground whitespace-pre-line col-start-2 row-start-2 cursor-default">
                  {text[19]}
                </p>
                <div className="flex flex-wrap gap-4 justify-self-start">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <FileCode2 size={16} className="text-orange-600" />
                    <span className="text-xs cursor-default">HTML</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Palette size={16} className="text-blue-500" />
                    <span className="text-xs cursor-default">CSS</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <FileJson size={16} className="text-yellow-300" />
                    <span className="text-xs cursor-default">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
