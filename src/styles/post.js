import { Link } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Img from "gatsby-image";

export const PostContainer = styled.div`
  ${tw`relative w-full p-2 sm:p-4`}
`;

export const Post = styled.div`
  ${tw`overflow-hidden`}
  color:#202040;
`;

export const Title = styled(Link)`
  ${tw`block font-sans no-underline text-lg font-bold pl-5 pr-5 mt-5 sm:text-xl md:text-2xl md:pl-8 md:pr-8 md:mt-5`};
  color: #eee;
`;

export const Meta = styled.div`
  ${tw`text-xs text-grey-darkest mt-5 ml-5 md:ml-8`};
`;

export const TagLink = styled(Link)`
  ${tw`inline-block font-bold uppercase mb-1 font-sans no-underline text-xxs md:text-xs text-white p-1 pr-3 pl-3 pb-1 mr-1 rounded-full`}
  color:#eee;
  background-color: #602080;
  &:hover {
    background-color: #b030b0;
  }
`;

export const DateLink = styled(Link)`
  ${tw`block font-sans font-bold no-underline text-xs md:text-sm p-5 pt-4 pb-1 md:p-8 md:pb-1 md:pt-5`}
  color:#b030b0;
`;

export const Content = styled.div`
  ${tw`font-sans text-sm leading-loose p-5 pt-4 pb-1  md:p-8 md:pb-2 md:pt-4 overflow-hidden md:text-base`};
  color: #eee;
`;

export const Image = styled(Img)`
  ${tw`mb-6 rounded shadow`}
  border-color:#602080;
`;

export const ExcerptContainer = styled.div`
  ${tw`relative p-2 sm:p-4`}
  color:#eee;
`;

export const ExcerptLink = styled(Link)`
  ${tw`block no-underline`}
  color:#eee;
  font-weight: normal;
`;
