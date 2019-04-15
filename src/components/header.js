import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

// Styled Components
const StyledBackgroundHeader = styled.div`
  width: 100%;
  background-repeat: repeat-y;
  background-size: cover;
`

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  // position: absolute;
  z-index: 1;
`

const Heading = styled.h1`
  margin: 0;
  flex-grow: 1;
`

const HeadingLink = styled(Link)`
  color: rebeccapurple;
  text-decoration: none;
`

const Nav = styled.nav`
  display: flex;
  margin: 0;
  list-style: none;
`

const NavLink = styled.a`
  padding: 1em;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`

// Header
const Header = ({ siteTitle, className }) => (
  <StyledBackgroundHeader>
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "trianglify.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.desktop.childImageSharp.fluid
        return (
          // Background Image
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
            style={{ height: "100vh" }}
          >
            {/* Actual Header Content */}
            <Container>
              <Inner>
                <Heading>
                  <HeadingLink to="/">{siteTitle}</HeadingLink>
                </Heading>
                <Nav>
                  <NavLink href="#">About</NavLink>
                  <NavLink href="#">Projects</NavLink>
                  <NavLink href="#">Contact</NavLink>
                </Nav>
              </Inner>
            </Container>
          </BackgroundImage>
        )
      }}
    />
  </StyledBackgroundHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header