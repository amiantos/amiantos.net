import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

const Menu = styled.ul`
  ${tw`flex items-center relative mx-auto list-reset p-2 pl-6 md:pl-8`}
  margin-bottom:40px;
`;

const MenuItem = styled.li`
  ${tw`flex-shrink`}
`;

const MenuLink = styled(Link)`
  ${tw`font-sans no-underline rounded-full text-xs sm:text-sm md:text-base p-2`}
  border:4px solid #202040;
  &:hover {
    border: 4px solid #602080;
  }
`;

const MenuExternalLink = styled.a`
  ${tw`font-sans no-underline rounded-full text-xs sm:text-sm md:text-base p-2`}
  border:4px solid #202040;
  &:hover {
    border: 4px solid #602080;
  }
`;

export default () => {
  return (
    <nav>
      <Menu>
        <MenuItem>
          <MenuLink to="/">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/lifesaver">Life Saver</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuExternalLink href="https://aeongarden.dev">
            Aeon Garden
          </MenuExternalLink>
        </MenuItem>
        <MenuItem>
          <MenuExternalLink href="https://github.com/amiantos/gamebookengine">
            Gamebook Engine
          </MenuExternalLink>
        </MenuItem>
      </Menu>
    </nav>
  );
};
