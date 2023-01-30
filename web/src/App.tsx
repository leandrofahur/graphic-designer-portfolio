import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar.component";
import { useMediaQuery } from "./hooks/useMediaQuery";
import "./styles/global.css";

export function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app bg-deep-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}
