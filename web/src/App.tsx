import { useEffect, useState } from "react";
import { DotGroup } from "./components/DotGroup/DotGroup";
import { Navbar } from "./components/Navbar/Navbar.component";
import { Landing } from "./pages/Landing/Landing";
import { useMediaQuery } from "./hooks/useMediaQuery";
import "./styles/global.css";

export function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setIsTopOfPage(false);
      } else {
        setIsTopOfPage(true);
      }
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
}
