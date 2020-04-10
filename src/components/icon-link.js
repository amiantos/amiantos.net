import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const StyledLink = styled.a`
  ${tw`inline-block ml-4 mr-4 mb-4 no-underline hover:text-gumbo`}
`;
const StyledSVG = styled.svg`
  ${tw`mr-1`}
  width:20px;
  height: 20px;
  opacity: 1;
`;

const OffsetText = styled.span`
  position: relative;
  margin-left: 3px;
  top: -4px;
`;

const IconLink = ({ link, icon, text }) => (
  <StyledLink href={link}>
    <StyledSVG fill="#000">
      <use xlinkHref={`#${icon.id}`} />
    </StyledSVG>
    <OffsetText>{text}</OffsetText>
  </StyledLink>
);

export default IconLink;
