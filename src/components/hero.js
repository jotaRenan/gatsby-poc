import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import { Link, graphql, useStaticQuery } from 'gatsby';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 28% center;
  background-size: cover;
  height: 50vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, lightgreen 2rem, #ddbbff00);
  display: flex;
  height: 100%;
  justify-content: flex-end;
  flex-direction: column;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "vacas.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1> Frontend Masters + Gatsby + Jota &hearts;</h1>
        <p>
          Olá mundo. <Link to="/about/">Sobre mim &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
