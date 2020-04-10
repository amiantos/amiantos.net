import React from "react";
import SEO from "../components/seo";
import { PostContainer, Post, Title, Content } from "../styles/post";
import About from "../components/about";
import Divider from "../components/divider";

const NotFoundPage = (props) => {
  return (
    <>
      <SEO title="Textlike ... ? " keywords={[`roguelike`, `open source`]} />
      <About />
      <Divider />
      <PostContainer>
        <Post>
          <Title>Textlike ... ?</Title>
          <Content>
            <p>Hey! I'm sorry, but I no longer host Textlike anywhere.</p>
            <p>
              If you're interested in finding out what it was, and maybe trying
              to set up a server environment where you can run it yourself, the
              source code is{" "}
              <a href="https://www.github.com/amiantos/textlike">
                available on GitHub
              </a>
              .
            </p>
            <p>
              Thanks for your interest! Maybe in the future I'll revisit
              Textlike or create something similar.
            </p>
          </Content>
        </Post>
      </PostContainer>
    </>
  );
};

export default NotFoundPage;
