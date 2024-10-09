import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        className="relative h-[2.4rem] w-[2.4rem] rounded-full p-0"
        onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      >
        <Sun
          size={20}
          className={`m-0 p-0 text-primary-foreground transition-all ${theme != "dark" ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"}`}
        />
        <Moon
          size={20}
          className={`absolute m-0 p-0 transition-all ${theme == "dark" ? "rotate-0 opacity-100" : "rotate-45 opacity-0"}`}
        />
      </Button>
    </div>
  );
};

export default ThemeToggle;
