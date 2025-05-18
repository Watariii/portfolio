import { StarsBackground } from "../components/StarsBackground/StarsBackground";
import { ThemeToggle } from "../components/ThemeToggle/ThemeToggle";
export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarsBackground />
    </div>
  );
};
