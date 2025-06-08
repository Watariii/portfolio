import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";
import { lang } from "../constants/constants";
import { useLang } from "../context/useLang";
import { navText } from "../constants/constants";
import { ThemeToggle } from "../components/ThemeToggle";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLang, setIsLang, handleText } = useLang();
  const [text] = handleText(navText);
  const navItems = text;
  
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav
      className={cn(
        "fixed w-full z-40",
        isScrolled && !isMenuOpen
          ? "py-3 bg-background/60 backdrop-blur-sm shadow-md transition-all duration-300"
          : "py-5"
      )}
    >
      <div className="px-4 sm:container flex items-center justify-between">
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
        <div className="hidden md:flex md:gap-4 lg:gap-8 md:items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="m-0 text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <button
            className="m-0 text-foreground/80 hover:text-primary transition-colors duration-300"
            onClick={handleChangeLanguage}
          >
            {isLang}
          </button>
          <ThemeToggle />
        </div>
        <div className="flex gap-4 items-center justify-center md:hidden z-50">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={handleToggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backgroun-blur-md z-40 hidden",
            "transition-all duration-500 md:hidden",
            isScrolled
              ? isMenuOpen
                ? "flex flex-col items-center justify-center pointer-events-auto"
                : ""
              : isMenuOpen
              ? "flex flex-col items-center justify-center opacity-100 pointer-events-auto"
              : "flex flex-col items-center justify-center opacity-0 pointer-events-none"
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
