import { Briefcase, Code, User } from "lucide-react";
import { aboutSectionText } from "../constants/constants";
import { useText } from "../context/useText";
import { useTheme } from "../context/useTheme";
import { cn } from "../lib/utils";

export const AboutSection = () => {
  const text = useText(aboutSectionText);
  const { isDarkTheme } = useTheme();
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="flex gap-2 items-center justify-center text-3xl md:text-4xl font-bold mb-12 text-center">
          {text[0]}
          <span className="text-primary">{text[1]}</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="space-y-6 flex-1">
            <h3 className="text-2xl font-semibold">{text[2]}</h3>
            <p className="text-muted-foreground">{text[3]}</p>
            <p className="text-muted-foreground">{text[4]}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {text[5]}
              </a>
              <a
                href="#cntacts"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {text[6]}
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
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{text[7]}</h4>
                  <p className="text-muted-foreground">{text[8]}</p>
                </div>
              </div>
            </div>
            <div
              className={cn(
                "gradient-border p-6 card-hover shadow-sm",
                isDarkTheme && "shadow-white/20"
              )}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{text[9]}</h4>
                  <p className="text-muted-foreground">{text[10]}</p>
                </div>
              </div>
            </div>
            <div
              className={cn(
                "gradient-border p-6 card-hover shadow-sm",
                isDarkTheme && "shadow-white/20"
              )}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{text[11]}</h4>
                  <p className="text-muted-foreground">{text[12]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
