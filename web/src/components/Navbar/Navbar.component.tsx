import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface NavbarProps {
  selectedPage: string;
  setSelectedPage: (value: string) => void; //React.Dispatch<React.SetStateAction<string>>
}

export function Navbar(props: NavbarProps) {
  const { selectedPage, setSelectedPage } = props;

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  return <nav></nav>;
}
