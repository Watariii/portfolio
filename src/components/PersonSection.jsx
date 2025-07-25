import { ArrowDown } from "lucide-react";
import { personSectionText } from "../constants/constants";
import { useText } from "../context/useText";

export const PersonSection = () => {
  const text = useText(personSectionText);

  return (
    <section
      id="person"
      className="px-4relative min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl flex flex-col items-center justify-center gap-2 font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">{text[0]}</span>
            <div className="flex gap-2">
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {text[1]}
              </span>
              <span className="text-gradient opacity-0 animate-fade-in-delay-2">
                {text[2]}
              </span>
            </div>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            {text[3]}
          </p>
          <div className="flex justify-center pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              {text[4]}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-delay-4">
        <a href="#about" className="flex flex-col items-center ">
          <ArrowDown className="h-8 w-8 text-primary animate-bounce cursor-pointer" />
        </a>
      </div>
    </section>
  );
};
