import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";
import { lang } from "../constants/constants";
import { useLang } from "../context/useLang";
const navItems = [
  { name: "Home", href: "#person" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isLang, setIsLang} = useLang();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handlePageReload = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const handleChangeLanguage = () => {
    isLang === lang.ru ? setIsLang(lang.eng) : setIsLang(lang.ru);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/60 backdrop-blur-sm shadow-md" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#person"
          onClick={handlePageReload}
        >
          <span className=" flex gap-1 relative z-10">
            <span className="text-glow text-foreground">Nikita.S</span>
            Portfolio
          </span>
        </a>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <button
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
            onClick={handleChangeLanguage}
          >
            {isLang}
          </button>
        </div>
        <button
          className="md:hidden p-2 text-foreground z-50"
          onClick={handleToggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backgroun-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={handleToggleMenu}
              >
                {item.name}
              </a>
            ))}
            <button
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={handleChangeLanguage}
            >
              {isLang}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
