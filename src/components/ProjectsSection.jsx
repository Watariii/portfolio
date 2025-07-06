import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { getProjects, projectsSectionText } from "../constants/constants";
import { useLang } from "../context/useLang";
import { useText } from "../context/useText";
import { useTheme } from "../context/useTheme";
import { cn } from "../lib/utils";

export const ProjectsSection = () => {
  const { isLang } = useLang();
  const { isDarkTheme } = useTheme();
  const text = useText(projectsSectionText);
  const projects = getProjects(isLang,isDarkTheme);
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="flex gap-2 items-center justify-center text-3xl md:text-4xl font-bold mb-4 text-center cursor-default">
          {text[0]}
          <span className="text-primary cursor-default">{text[1]}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto cursor-default">
          {text[2]}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "h-full flex flex-col group bg-card rounded-lg overflow-hidden shadow-sm card-hover",
                isDarkTheme && "shadow-white/20"
              )}
            >
              <a href={project.demoUrl} target="_blank" className="h-48 overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>
              <div className="flex flex-col flex-1 p-6 justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((item, index) => (
                    <span
                      key={index}
                      className={cn("px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground shadow-md cursor-default", isDarkTheme && 'shadow-white/10')}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1 cursor-default">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 cursor-default">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title={text[3]}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title={text[4]}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Watariii?tab=repositories"
          >
            {text[5]}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
