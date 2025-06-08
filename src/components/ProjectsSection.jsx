import { ExternalLink, Github,ArrowRight } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "title",
    description: "description",
    image: "/images/project1.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    gitHubUrl: "#",
  },
  {
    id: 2,
    title: "title",
    description: "description",
    image: "/images/project1.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    gitHubUrl: "#",
  },
  {
    id: 3,
    title: "title",
    description: "description",
    image: "/images/project1.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    gitHubUrl: "#",
  },
  {
    id: 4,
    title: "title",
    description: "description",
    image: "/images/project1.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    gitHubUrl: "#",
  },
  {
    id: 5,
    title: "title",
    description: "description",
    image: "/images/project1.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    gitHubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((item, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="Ссылка на демо проекта"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="Ссылка на проект на GitHub"
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
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
