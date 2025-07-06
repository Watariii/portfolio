import { Mail, MapPin, Send, Linkedin, Github, Gitlab } from "lucide-react";
import { useText } from "../context/useText";
import { contactSectionText } from "../constants/constants";

export const ContactSection = () => {
  const text = useText(contactSectionText);
  return (
    <section id="contact" className="pt-24 pb-12 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-bold mb-4 text-center cursor-default">
          {text[0]}
          <span className="text-primary cursor-default">{text[1]}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto cursor-default">
          {text[2]}
        </p>
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="py-8 px-4 sm:p-8 lg:w-full flex flex-col items-center space-y-8 bg-card rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 cursor-default">
              {text[3]}
            </h3>
            <div className="flex flex-col gap-4 items-start justify-center lg:flex-row md:w-full lg:items-center lg:justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" /></div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium cursor-default">Email</h4>
                  <a
                    href="mailto:nikita.sukhov_rsce@mail.ru"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    nikita.sukhov_rsce@mail.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium cursor-default">Telegram</h4>
                  <a
                    href="https://t.me/sukhov_nikita"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                  >
                    @sukhov_nikita
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium cursor-default">{text[4]}</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="https://yandex.ru/maps/-/CHGb6YmL"
                    target="_blank"
                  >{text[5]}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4 cursor-default">{text[6]}</h4>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://github.com/Watariii"
                target="_blank"
                title="GitHub"
                className="hover:text-primary transition-colors duration-300"
              >
                <Github />
              </a>
              <a
                href="https://gl.re-action.online/nikita.sukhov"
                target="_blank"
                title="Gitlab"
                className="hover:text-primary transition-colors duration-300"
              >
                <Gitlab />
              </a>
              <a
                href="https://www.linkedin.com/in/sukhov-nikita/"
                target="_blank"
                title="Linkedin"
                className="hover:text-primary transition-colors duration-300"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
