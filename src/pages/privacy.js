import React from "react";
import SEO from "../components/seo";
import { PostContainer, Post, Title, Content } from "../styles/post";
import About from "../components/about";
import Divider from "../components/divider";

const PrivacyPolicyPage = (props) => {
  return (
    <>
      <SEO
        title="Privacy Policy for PiBar and Gamebook Engine"
        keywords={[`privacy policy`, `open source`]}
        description="The simple, no nonsense privacy policy for apps by Brad Root"
      />
      <About />
      <Divider />
      <PostContainer>
        <Post>
          <Title to="/privacy">Privacy Policy for PiBar</Title>
          <Content>
            <p>
              PiBar does not collect any information about you or your usage of
              the app, beyond anonymous statistics that you allow to be sent to
              Apple via a setting on your device. Under no circumstances is any
              information sent from PiBar to any third-party (non-Apple)
              servers. Since no data is collected, no data relating to you can
              ever be sold.
            </p>
          </Content>
        </Post>
      </PostContainer>
    </>
  );
};

export default PrivacyPolicyPage;
