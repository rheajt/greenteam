import React from 'react';
import Image from '../components/image';
import SEO from '../components/seo';
import styled from 'styled-components';
import brickWall from '../images/brickwall_@2X.png';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background-image: url(${brickWall});
  }
`;

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(20, 0, 0, 0.6);
  /* background-color: rgba(50, 67, 29, 0.792); */

  .img {
    width: 800px;
    filter: drop-shadow(2px 4px 6px black);
  }
`;

const IndexPage = () => (
  <Container>
    <SEO title="Green Team" keywords={[`gatsby`, `application`, `react`]} />
    <GlobalStyle />
    <div className="img">
      <Image />
    </div>
  </Container>
);

export default IndexPage;
