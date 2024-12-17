import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes} from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
`;

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  background: linear-gradient(-45deg, #00BFFF, #1E90FF, #4169E1, #0000FF);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  color: #FFFFFF;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    max-width: 800px;
    padding: 3rem;
  }
`;

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  background: linear-gradient(45deg, #FF4500, #FFD700);
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    font-size: 4.5rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #FFFFFF;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  max-width: 100%;
  margin: 0 auto 1.5rem;
  line-height: 1.5;
  text-align: center;
  color: #FFFFFF;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    font-size: 1.4rem;
    max-width: 650px;
    margin-bottom: 2.5rem;
    line-height: 1.7;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  margin: 1.5rem 0;
  width: 90%;
  max-width: 400px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    width: auto;
    max-width: none;
  }
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #FFD700;
  padding: 1rem;
  font-size: clamp(0.9rem, 2.5vw, 1.3rem);
  border: 2px solid #FFD700;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s ease;
  text-decoration: none;
  min-height: 3rem;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, #FFD700, transparent);
    transition: all 0.4s ease;
  }

  &:hover {
    color: #0000FF;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);

    &::before {
      left: 100%;
    }
  }

  @media (min-width: 768px) {
    width: auto;
    min-width: 180px;
    padding: 1rem 2.5rem;
  }

  /* Touch device optimization */
  @media (hover: none) {
    &:active {
      transform: scale(0.98);
    }
  }
`;


const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    gap: 2rem;
    font-size: 2rem;
  }

  a {
    color: #bdc3c7;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: translateY(-5px) scale(1.2);
      color: #3498db;
    }
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  animation: ${floatAnimation} ease-in-out infinite alternate;
`;

const Home = () => {
  const [animatedText, setAnimatedText] = useState("");
  const [shapes, setShapes] = useState([]);

  const professions = useMemo(
    () => ["Software Developer", "DevOps Engineer", "Full Stack Developer"],
    []
  );

  const typeProfession = useCallback(() => {
    let currentProfessionIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const erasingSpeed = 50;
    const delayBetweenProfessions = 2000;

    const animate = () => {
      const currentProfession = professions[currentProfessionIndex];

      if (isDeleting) {
        setAnimatedText(currentProfession.substring(0, currentCharIndex));
        currentCharIndex--;

        if (currentCharIndex < 0) {
          isDeleting = false;
          currentProfessionIndex =
            (currentProfessionIndex + 1) % professions.length;
          setTimeout(animate, delayBetweenProfessions);
        } else {
          setTimeout(animate, erasingSpeed);
        }
      } else {
        setAnimatedText(currentProfession.substring(0, currentCharIndex));
        currentCharIndex++;

        if (currentCharIndex > currentProfession.length) {
          isDeleting = true;
          setTimeout(animate, delayBetweenProfessions);
        } else {
          setTimeout(animate, typingSpeed);
        }
      }
    };

    animate();
  }, [professions]);

  useEffect(() => {
    const animationTimeout = setTimeout(typeProfession, 2000);
    return () => clearTimeout(animationTimeout);
  }, [typeProfession]);

  useEffect(() => {
    const createShape = () => ({
      size: Math.random() * 150 + 50,
      left: Math.random() * window.innerWidth,
      top: Math.random() * window.innerHeight,
      animationDuration: Math.random() * 20 + 10,
    });

    setShapes(Array.from({ length: 8 }, createShape));
  }, []);

  return (
    <HomeContainer>
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
            animationDuration: `${shape.animationDuration}s`,
          }}
        />
      ))}
      <ContentWrapper>
        <Title>Hello, I'm Suhas Palani</Title>
        <Subtitle>I'm an aspiring {animatedText}</Subtitle>
        <Paragraph>
          Crafting digital symphonies through code, I transform innovative ideas 
          into elegant software solutions that push the boundaries of technology 
          and user experience.
        </Paragraph>
        <ButtonContainer>
          <Button to="/contact">Hire Me</Button>
          <Button to="/projects">View Projects</Button>
        </ButtonContainer>
        <SocialIcons>
          <a
            href="https://github.com/SuhasPalani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/suhaspalani/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/SuhasPalani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </SocialIcons>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;