import React from "react";
import SEO from "../components/seo";
import { PostContainer, Post, Title, Content } from "../styles/post";
import laststatementshots from "../../images/last-statement-screens.png";
import { Link } from "gatsby";
import About from "../components/about";
import Divider from "../components/divider";

const NotFoundPage = (props) => {
  return (
    <>
      <SEO
        title="Last Statement - A screensaver displaying the last statements of people executed by the State of Texas"
        keywords={[
          `criminal justice`,
          `execution`,
          `macos`,
          `screensaver`,
          `swift`,
          `spritekit`,
          `open source`,
        ]}
        description="Last Statement is a screensaver that displays the names and last statements of people executed by the State of Texas"
      />
      <About />
      <Divider />
      <PostContainer>
        <Post>
          <Title to="/last-statement">Last Statement</Title>
          <Content>
            <p>
              Last Statement is a macOS screensaver that displays the names and
              last statements of people executed by the State of Texas.
            </p>
            <img
              src={laststatementshots}
              style={{ width: `100%`, marginBottom: `15px` }}
            />
            <h3>
              <center>
                👉{" "}
                <a href="https://s3.amazonaws.com/amiantos/last-statement-1.0.zip">
                  Download Last Statement 1.0 for macOS 10.13+
                </a>
              </center>
            </h3>
            <h2>What is Open Source?</h2>
            <p>
              Last Statement is fully "open source". That means if you want, you
              can download the source code, compile it with Xcode, and play with
              it for free. You can also use its code in your own projects, or
              make your own versions of Last Statement. For more information,
              check out{" "}
              <a href="https://github.com/amiantos/last-statement">
                the repository on GitHub
              </a>
              . If you like Last Statement, please consider starring it as well.
            </p>
            <h2>Your Support</h2>
            <p>
              If you really like Last Statements and want to support the
              creation of more unique projects like it, please consider{" "}
              <a href="https://www.patreon.com/amiantos">
                becoming a patron on Patreon
              </a>
              . You can also{" "}
              <a href="https://github.com/sponsors/amiantos">
                sponsor me on GitHub
              </a>
              .
            </p>
            <h2>Further Reading</h2>
            <p>
              I've blogged about my process developing Last Statement. If you're
              curious, check out the{" "}
              <Link to="/tags/last-statement">"last-statement" tag</Link> on
              this blog to read about it.
            </p>
            <p>
              Every week I blog about what I've been working on. If you're
              curious about what I'm up to and what else I've done, check out{" "}
              <Link to="/">the front page</Link>.
            </p>
            <p>Thanks for checking out Last Statement!</p>
          </Content>
        </Post>
      </PostContainer>
    </>
  );
};

export default NotFoundPage;
