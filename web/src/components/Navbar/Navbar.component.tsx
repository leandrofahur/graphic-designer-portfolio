import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Link } from "../Link/Link";
import MenuIcon from "../../assets/menu-icon.svg";
import CloseIcon from "../../assets/close-icon.svg";

interface NavbarProps {
  selectedPage: string;
  setSelectedPage: (value: string) => void; //React.Dispatch<React.SetStateAction<string>>
  isTopOfPage: boolean;
}

const links = ["Home", "Skills", "Projects", "Contact"];

export function Navbar(props: NavbarProps) {
  const { selectedPage, setSelectedPage, isTopOfPage } = props;

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = !isTopOfPage && "bg-red";

  return (
    <nav className={`z-40 w-full top-0 py-6 ${navbarBackground}`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">AG</h4>

        {isAboveMediumScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {links.map((link) => (
              <Link
                page={`${link}`}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
            {/* <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
          </div>
        ) : (
          <div>
            <button
              className="rounded-full bg-red p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img src={MenuIcon} alt="menu icon" />
            </button>
          </div>
        )}

        {/* Mobile Menu Popup */}
        {!isAboveMediumScreens && !isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src={CloseIcon} alt="close icon" />
              </button>
            </div>
            <div className="flex flex-col gap-10 m-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
