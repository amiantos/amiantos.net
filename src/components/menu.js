import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

const Menu = styled.ul`
  ${tw`flex items-center relative mx-auto list-reset justify-center sm:p-2 pl-6 md:pl-8 md:pr-10`}
  margin-bottom:40px;
`;

const MenuItem = styled.li`
  ${tw`flex-shrink rounded-full p-1 md:p-2 justify-center`}
  border:4px solid #202040;
  line-height: 0.7em;
  text-align: center;
  &:hover {
    border: 4px solid #602080;
  }
`;

const MenuLink = styled(Link)`
  ${tw`font-sans no-underline rounded-full text-xxs sm:text-xs md:text-base`}
`;

const MenuExternalLink = styled.a`
  ${tw`font-sans no-underline rounded-full text-xxs sm:text-xs md:text-base`}
`;

export default () => {
  return (
    <nav>
      <Menu>
        <MenuItem>
          <MenuLink to="/">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuExternalLink href="https://github.com/amiantos">
            GitHub
          </MenuExternalLink>
        </MenuItem>
        <MenuItem>
          <MenuExternalLink href="https://twitch.tv/amiantos">
            Twitch
          </MenuExternalLink>
        </MenuItem>
        <MenuItem>
        <MenuExternalLink href="https://www.youtube.com/channel/UChFEc6JyFzIVWbxY7LKeC4A">
            YouTube
          </MenuExternalLink>
        </MenuItem>
        <MenuItem>
          <MenuExternalLink href="https://www.twitter.com/amiantos">
            Twitter
          </MenuExternalLink>
        </MenuItem>
        <MenuItem>
          <MenuExternalLink href="https://www.linkedin.com/in/amiantos">
            LinkedIn
          </MenuExternalLink>
        </MenuItem>
      </Menu>
    </nav>
  );
};
