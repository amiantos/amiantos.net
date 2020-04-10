import React from "react";
import SEO from "../components/seo";
import { PostContainer, Post, Title, Content } from "../styles/post";
import YouTube from "../components/youtube";
import lifesaverSSShots from "../../images/lifesaver-screenshots-1.1.png";
import { Link } from "gatsby";
import About from "../components/about";
import Divider from "../components/divider";

const NotFoundPage = (props) => {
  return (
    <>
      <SEO
        title="Life Saver - Abstract visuals powered by Conway's Game of Life"
        keywords={[
          `conway`,
          `game of life`,
          `apple tv`,
          `tvos`,
          `swift`,
          `spritekit`,
          `open source`,
        ]}
        description="Life Saver is an artistic, abstract Apple TV app and free macOS screensaver based on Conway's Game of Life. Basically: simple artificial life creates pleasing and trippy visuals for your enjoyment."
      />
      <About />
      <Divider />
      <PostContainer>
        <Post>
          <Title to="/lifesaver">Life Saver</Title>
          <Content>
            <p>
              Life Saver is an abstract Apple TV app and free macOS screensaver
              based on{" "}
              <a href="https://www.github.com/amiantos/lifesaver">
                Conway's Game of Life
              </a>
              . With a variety of settings and color schemes, Life Saver should
              satisfy designers and geeks alike.
            </p>
            <YouTube youtubeId="Vv9rDZ1LMSk" />
            <h2>Apple TV</h2>
            <p>
              Life Saver is now on Apple TV! In this version there are some
              extra configuration settings not found in the screensaver version,
              that lead to a greater variety in visuals, including the new
              "Technicolor Dream" preset which I think is totally amazing.
            </p>
            <YouTube youtubeId="6iBuOVzStpA" />
            <h3>
              <center>
                👉{" "}
                <a href="https://apps.apple.com/us/app/life-saver-tv/id1470667717?ls=1">
                  Buy Life Saver TV for Apple TV
                </a>
              </center>
            </h3>
            <h2>Screensaver v1.1 for macOS</h2>
            <img
              src={lifesaverSSShots}
              style={{ width: `100%`, marginBottom: `15px` }}
            />
            <h3>
              <center>
                👉{" "}
                <a href="https://s3.amazonaws.com/amiantos/lifesaver-1.1.pkg">
                  Download Life Saver 1.1 for macOS
                </a>
              </center>
            </h3>
            <h2>What is Open Source?</h2>
            <p>
              Life Saver is fully "open source". That means if you want, you can
              download the source code, compile it with Xcode, and play with it
              for free. You can also use its code in your own projects, or make
              your own versions of Life Saver with extra options that you think
              are cool. For more information, check out{" "}
              <a href="https://github.com/amiantos/lifesaver">
                the repository on GitHub
              </a>
              . If you like Life Saver, please consider starring it as well.
            </p>
            <h2>Your Support</h2>
            <p>
              If you really like Life Saver and want to support the creation of
              more unique projects by me, please consider{" "}
              <a href="https://www.patreon.com/amiantos">
                becoming a patron on Patreon
              </a>
              . If you haven't already paid for Life Saver TV, a patron may
              request a promo code to get a free copy (if there are any
              available).
            </p>
            <h2>Further Reading</h2>
            <p>
              I've blogged consistently about my process developing Life Saver.
              If you're curious, check out the{" "}
              <Link to="/tags/lifesaver">"lifesaver" tag</Link> on this blog to
              read about it.
            </p>
            <p>
              Every week I blog about what I've been working on. If you're
              curious about what I'm up to and what else I've done, check out{" "}
              <Link to="/">the front page</Link>.
            </p>
            <p>Thanks for checking out Life Saver!</p>
          </Content>
        </Post>
      </PostContainer>
    </>
  );
};

export default NotFoundPage;
