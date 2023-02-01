import AnchorLink from "react-anchor-link-smooth-scroll";

interface LinkProps {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void; //React.Dispatch<React.SetStateAction<string>>
}

export function Link(props: LinkProps) {
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
