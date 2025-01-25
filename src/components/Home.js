import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { 
  FaGithub, FaLinkedin, FaTwitter, 
  FaEnvelope, FaCode
} from "react-icons/fa";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
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
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 25px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin-bottom: 1rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  background: linear-gradient(45deg, #FF4500, #FFD700);
  -webkit-background-clip: text;
  color: transparent;
`;

const Subtitle = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: 1rem;
  color: #FFFFFF;
  min-height: 2.5rem;
`;

const Paragraph = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: clamp(1rem, 2vw, 1.4rem);
  max-width: 650px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  color: #f0f0f0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  color: #FFD700;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: 2px solid #FFD700;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.4s ease;
  
  &:hover {
    background-color: #FFD700;
    color: #0000FF;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  a {
    color: #bdc3c7;
    font-size: 1.8rem;
    transition: all 0.3s ease;

    &:hover {
      color: #3498db;
      transform: scale(1.2) translateY(-5px);
    }
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  filter: blur(2px);
  z-index: 1;
  animation: ${floatAnimation} infinite;
`;

const Home = () => {
  const [animatedText, setAnimatedText] = useState("");
  const [shapes, setShapes] = useState([]);

  const professions = useMemo(
    () => [
      "Software Developer", 
      "DevOps Engineer", 
      "Full Stack Developer",
      "Cloud Enthusiast"
    ],
    []
  );

  const typeProfession = useCallback(() => {
    let currentProfessionIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const animate = () => {
      const currentProfession = professions[currentProfessionIndex];
      
      setAnimatedText(
        isDeleting 
          ? currentProfession.substring(0, currentCharIndex)
          : currentProfession.substring(0, currentCharIndex)
      );

      if (!isDeleting && currentCharIndex < currentProfession.length) {
        currentCharIndex++;
        setTimeout(animate, 150);
      } else if (isDeleting && currentCharIndex > 0) {
        currentCharIndex--;
        setTimeout(animate, 50);
      } else {
        isDeleting = !isDeleting;
        currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
        setTimeout(animate, isDeleting ? 2000 : 500);
      }
    };

    animate();
  }, [professions]);

  useEffect(() => {
    const typingTimeout = setTimeout(typeProfession, 1000);
    return () => clearTimeout(typingTimeout);
  }, [typeProfession]);

  useEffect(() => {
    const createShape = () => ({
      size: Math.random() * 100 + 50,
      left: Math.random() * window.innerWidth,
      top: Math.random() * window.innerHeight,
      animationDuration: Math.random() * 15 + 10,
    });

    setShapes(Array.from({ length: 6 }, createShape));
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
        <Subtitle>I'm an aspiring {animatedText}|</Subtitle>
        <Paragraph>
          Transforming innovative ideas into elegant software solutions, 
          I craft digital experiences that blend cutting-edge technology 
          with intuitive design and performance.
        </Paragraph>
        <ButtonContainer>
          <Button to="/contact">
            <FaEnvelope /> Hire Me
          </Button>
          <Button to="/projects">
            <FaCode /> View Projects
          </Button>
        </ButtonContainer>
        <SocialIcons>
          {[
            { Icon: FaGithub, url: "https://github.com/SuhasPalani" },
            { Icon: FaLinkedin, url: "https://www.linkedin.com/in/suhaspalani/" },
            { Icon: FaTwitter, url: "https://x.com/SuhasPalani" }
          ].map(({ Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          ))}
        </SocialIcons>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;