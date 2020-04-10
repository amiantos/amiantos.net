import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const Title = styled.header`
  text-align: center;
  height: 0px;
  overflow: show;
  z-index: -2;
`;

const Text = styled.div`
  ${tw`font-sans font-bold`}
  color: #202060;
  font-size: 180px;
`;

const Header = ({ siteTitle }) => (
  <Title>
    <Text>{siteTitle}</Text>
  </Title>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
