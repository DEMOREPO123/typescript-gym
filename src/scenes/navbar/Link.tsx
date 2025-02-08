import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage(
    value: SelectedPage,
  ): React.Dispatch<React.SetStateAction<SelectedPage>>;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; //forces to accept the value as on of the values from selectedPage enum
  return (
    <AnchorLink
      onClick={() => setSelectedPage(lowerCasePage)}
      href={`#${lowerCasePage}`}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
