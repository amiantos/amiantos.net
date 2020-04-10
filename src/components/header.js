import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 800px;
  overflow-x: hidden;
`;

const Title = styled.header`
  text-align: center;
  width: 100%;
  height: 0px;
  z-index: -2;
`;

const Text = styled.div`
  ${tw`font-sans font-bold`}
  color: #202060;
  font-size: 180px;
`;

const Header = ({ siteTitle }) => (
  <TitleContainer>
    <Title>
      <Text>{siteTitle}</Text>
    </Title>
  </TitleContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
