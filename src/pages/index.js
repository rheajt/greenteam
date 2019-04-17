import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const Header = styled.header`
  .img {
    width: 400px;
    height: auto;
    text-align: center;
    margin: 0 auto;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    li {
      display: inline-block;
      padding: 2rem;
      border: 1px solid grey;
    }
  }
`

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Header>
      <div className="img">
        <Image />
      </div>

      <nav>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>events</li>
        </ul>
      </nav>
    </Header>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
