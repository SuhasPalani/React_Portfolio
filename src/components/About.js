import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { FaBirthdayCake, FaEnvelope, FaGithub, FaGraduationCap, FaPhone, FaMapMarkerAlt, FaLaptopCode, FaAws } from "react-icons/fa";
import { SiPython, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiDjango, SiFlask, SiReact, SiMysql, SiDocker, SiJenkins, SiGit, SiGithub, SiLinux, SiUipath } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ecf0f1;
  font-family: "Poppins", sans-serif;
  animation: ${fadeIn} 1s ease-out;
`;

const GlassmorphicWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: ${fadeIn} 1.5s ease-out;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #f39c12, #e74c3c, #9b59b6, #3498db);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${fadeIn} 2s ease-out, ${gradientAnimation} 3s infinite linear;
`;

const AboutText = styled.div`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #bdc3c7;
  animation: ${fadeIn} 2s ease-out;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: #ecf0f1;
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 1.5rem;
    color: #f39c12;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    svg {
      transform: scale(1.2);
    }
  }
`;

const TechStackSection = styled.div`
  text-align: center;
`;

const TechStackTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #ecf0f1;
  animation: ${fadeIn} 2s ease-out;
`;

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 2.5rem;
    color: #f39c12;
  }

  span {
    font-size: 1rem;
    color: #ecf0f1;
    font-weight: 500;
  }
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const SkillBar = styled.div`
  height: 100%;
  background-color: #f39c12;
  width: ${props => props.level}%;
  transition: width 1s ease-in-out;
`;

const ScrollDownIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
    60% { transform: translateY(-10px); }
  }
`;

const About = () => {
  const [visibleSkills, setVisibleSkills] = useState({});
  const techStackRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.5 }
    );

    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Python", icon: SiPython, level: 90 },
    { name: "C/C++", icon: SiCplusplus, level: 85 },
    { name: "HTML", icon: SiHtml5, level: 95 },
    { name: "CSS", icon: SiCss3, level: 90 },
    { name: "JavaScript", icon: SiJavascript, level: 85 },
    { name: "Django", icon: SiDjango, level: 80 },
    { name: "Flask", icon: SiFlask, level: 75 },
    { name: "React", icon: SiReact, level: 85 },
    { name: "MySQL", icon: SiMysql, level: 80 },
    { name: "AWS", icon: FaAws, level: 70 },
    { name: "Docker", icon: SiDocker, level: 75 },
    { name: "Jenkins", icon: SiJenkins, level: 70 },
    { name: "Git", icon: SiGit, level: 90 },
    { name: "GitHub", icon: SiGithub, level: 90 },
    { name: "Unix", icon: SiLinux, level: 85 },
    { name: "UiPath", icon: SiUipath, level: 75 },
  ];

  const scrollToTechStack = () => {
    techStackRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AboutContainer>
      <GlassmorphicWrapper>
        <Title>About Me</Title>
        <AboutText>
          <p>
            I'm Suhas Palani, a Software Developer and graduate student in
            computer science who is eager to contribute and has a strong will to
            succeed. Ardent in developing, planning, and implementing strategies
            to address organizational difficulties.
          </p>
          <p>
            Passionate about learning new technologies and driving innovation, I
            am on a mission to make a difference in the tech industry by
            contributing to impactful projects. Always on the lookout for
            opportunities to grow and excel.
          </p>
        </AboutText>
        <InfoGrid>
          <InfoItem>
            <FaBirthdayCake aria-hidden="true" /> <span>Birthday: 23 Feb 2001</span>
          </InfoItem>
          <InfoItem>
            <FaEnvelope aria-hidden="true" /> <span>Email: spalani3@hawk.iit.edu</span>
          </InfoItem>
          <InfoItem>
            <FaGithub aria-hidden="true" /> <span>Github: github.com/SuhasPalani</span>
          </InfoItem>
          <InfoItem>
            <FaGraduationCap aria-hidden="true" /> <span>Degree: Masters in Computer Science</span>
          </InfoItem>
          <InfoItem>
            <FaPhone aria-hidden="true" /> <span>Phone: +1 (773) 850-4663</span>
          </InfoItem>
          <InfoItem>
            <FaMapMarkerAlt aria-hidden="true" /> <span>Location: Chicago, IL</span>
          </InfoItem>
          <InfoItem>
            <FaLaptopCode aria-hidden="true" /> <span>Freelance: Available</span>
          </InfoItem>
        </InfoGrid>

        <TechStackSection ref={techStackRef}>
          <TechStackTitle>Technical Skills</TechStackTitle>
          <TechStackGrid>
            {skills.map((skill, index) => (
              <TechItem key={skill.name} className="tech-item" id={`skill-${index}`}>
                <skill.icon aria-hidden="true" />
                <span>{skill.name}</span>
                <SkillLevel>
                  <SkillBar level={visibleSkills[`skill-${index}`] ? skill.level : 0} />
                </SkillLevel>
              </TechItem>
            ))}
          </TechStackGrid>
        </TechStackSection>
      </GlassmorphicWrapper>
      <ScrollDownIndicator onClick={scrollToTechStack}>
        <FaChevronDown color="#ecf0f1" size={24} />
      </ScrollDownIndicator>
    </AboutContainer>
  );
};

export default About;
