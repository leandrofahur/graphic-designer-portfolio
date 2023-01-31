import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import MenuIcon from "../../assets/menu-icon.svg";
import CloseIcon from "../../assets/close-icon.svg";

interface LinkProps {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void; //React.Dispatch<React.SetStateAction<string>>
}

function Link(props: LinkProps) {
  const { page, selectedPage, setSelectedPage } = props;
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

interface NavbarProps {
  selectedPage: string;
  setSelectedPage: (value: string) => void; //React.Dispatch<React.SetStateAction<string>>
}

export function Navbar(props: NavbarProps) {
  const { selectedPage, setSelectedPage } = props;

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  return (
    <nav className="z-40 w-full top-0 py-6">
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">AG</h4>

        {isAboveMediumScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
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
            {/* <Link
              page="Testmonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
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
          </div>
        )}
      </div>
    </nav>
  );
}
