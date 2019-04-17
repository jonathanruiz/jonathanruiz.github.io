import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { Profile } from "./image"
import BackgroundImage from "gatsby-background-image"
import Typed from "react-typed"
import styled from "styled-components"

// Styled Components
const StyledBackgroundHeader = styled.div`
  width: 100%;
  background-repeat: repeat-y;
  background-size: cover;
`

const Container = styled.div`
  font-family: Poppins, Roboto, sans-serif;
`

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  z-index: 1;
`

const Heading = styled.h1`
  font-family: Poppins, Roboto, sans-serif;
  margin: 0;
  flex-grow: 1;
`

const HeadingLink = styled(Link)`
  color: rebeccapurple;
  text-decoration: none;
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 960px;
  text-align: center;
  padding: 1.45rem 1.0875rem;
`

const ProfileImage = styled(Profile)`
  width: 200px;
`

const TypedText = styled(Typed)`
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
`

const JumboHead = ({ siteTitle, className }) => (
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
            <Container>
              <Inner>
                <Heading>
                  <HeadingLink to="/">{siteTitle}</HeadingLink>
                </Heading>
              </Inner>
              <Hero>
                <ProfileImage />
                <TypedText
                  strings={["Hi, my name is Jonathan Ruiz"]}
                  typeSpeed={30}
                />
                <Typed
                  strings={[
                    "I love to hike.",
                    "I love to cook.",
                    "And I love to code!",
                  ]}
                  typeSpeed={50}
                  backSpeed={50}
                  smartBackspace
                />
              </Hero>
            </Container>
          </BackgroundImage>
        )
      }}
    />
  </StyledBackgroundHeader>
)

JumboHead.propTypes = {
  siteTitle: PropTypes.string,
}

JumboHead.defaultProps = {
  siteTitle: ``,
}

export default JumboHead