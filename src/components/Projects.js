import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaLaptopCode,
  FaGithub,
  FaCloud,
  FaBrain,
  FaCode,
  FaEllipsisH,
} from "react-icons/fa";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ResumeContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(-45deg, #2c3e50, #3498db, #2980b9, #34495e);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  color: #fff;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  animation: ${fadeIn} 0.8s ease-out;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  svg {
    color: #e0ffff;
  }
`;

const ExperienceItem = styled.div`
  background: rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #e0ffff;
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    text-align: justify;
  }

  .company {
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
    text-align: justify;
  }

  .date {
    color: #e0ffff;
    font-size: 0.9rem;
    opacity: 0.8;
    text-align: justify;
  }

  ul {
    list-style-type: none;
    padding: 0;
    text-align: justify;
  }

  li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #e0ffff;
    }
    text-align: justify;
  }
`;

const ProjectLink = styled.a`
  color: #e0ffff;
  text-decoration: none;
  margin-left: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Resume = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      name: "Bitcoin Prediction",
      categories: ["ML", "Software Engineering"],
      github: "https://github.com/SuhasPalani/ML_Bitcoin_Prediction",
      date: "Dec 2024 - Present",
      description: [
        "Developed ML_Bitcoin_Prediction system with D3.js for interactive data visualization of Bitcoin price trends and forecasts",
        "Implemented multiple machine learning models, with ARIMA providing 95.2% accuracy on a 15-year dataset",
        "Utilized time series forecasting to improve predictive accuracy and decision-making for cryptocurrency market analysis",
        "Currently working on buy and sell strategy integration based on ARIMA predictions for automated trading decisions",
      ],
    },
    {
      name: "SUMMARAIZE",
      categories: ["AI", "Software Engineering"],
      github: "https://github.com/SuhasPalani/summaraize-native",
      date: "Apr 2024 - Sept 2024",
      description: [
        "Developed a multimodal AI platform with web and mobile apps using Python Flask, MongoDB, HTML, CSS, JavaScript, and React Native",
        "Enhanced mobile user engagement by 28% through optimized design and chatbot integration",
        "Led API testing and validation using Postman, covering 25+ endpoints",
        "Achieved top recognition at OraHacks and TikTok tech jam finalist status",
      ],
    },
    {
      name: "AIRBNB DATA PIPELINE OPTIMIZATION",
      categories: ["Other"],
      github: "https://github.com/SuhasPalani/DBT",
      date: "Jun 2024 - Jul 2024",
      description: [
        "Built a robust data pipeline using DBT, ensuring clean datasets and optimized query performance in Snowflake",
        "Automated ETL process, cutting manual data processing time by 50%",
        "Implemented rigorous testing strategies for data quality and integrity",
      ],
    },

    {
      name: "GitHub Analytics Dashboard",
      categories: ["Cloud", "ML", "Software Engineering"],
      github: "https://github.com/SuhasPalani/spm-assignment-5",
      date: "Mar 2024 - Apr 2024",
      description: [
        "Developed a React-based web application to display real-time data from popular GitHub repositories",
        "Deployed the application on Google Cloud Platform (GCP)",
        "Built a Flask backend server to handle API requests and process data",
        "Integrated machine learning models to predict and forecast repository activity trends",
        "Created interactive data visualizations using Plotly and Matplotlib",
        "Designed a user-friendly, responsive interface",
        "Optimized data processing and model execution",
      ],
    },
    {
      name: "Parking Lot Management System",
      categories: ["Software Engineering"],
      github: "https://github.com/SuhasPalani/parking_lot_management_system",
      date: "Oct 2023 - Dec 2023",
      description: [
        "Took charge of frontend design and database creation, synthesizing the Faker module to expedite dataset generation, resulting in a significant 30% reduction in database creation time",
        "Crafted a resilient Parking Lot Management System with a seamless fusion of HTML, CSS, JS, and Flask, harmonizing frontend aesthetics and backend functionality for optimal performance.",
      ],
    },
    {
      name: "API CONTRACT TESTING TOOL FOR MICROSERVICES",
      categories: ["Software Engineering"],
      github: "https://github.com/SuhasPalani/final-year-project",
      date: "Sep 2022 - Apr 2023",
      description: [
        "Led development of a web-based API contract testing tool, reducing contract creation time by 30%",
        "Designed intuitive UI, increasing user satisfaction by 20%",
        "Boosted user engagement by 45% through seamless functionality",
      ],
    },
    {
      name: "Airlines Reservation System",
      categories: ["Software Engineering"],
      github: "https://github.com/SuhasPalani/DBMS_Airline_Reservation",
      date: "Dec 2021 - Mar 2022",
      description: [
        "Directed the full development of an Airlines Reservation System, utilizing Flask and MySQL",
        "Achieved an impressive average rating of 4.5/5 for the ticket booking experience",
      ],
    },
    {
      name: "Shopping Market",
      categories: ["Other"],
      github: "",
      date: "Dec 2021 - Mar 2022",
      description: [
        "Designed a user-friendly, menu-driven CLI program, earning a solid 4.4/5 rating for creativity",
        "Improved the program's functionality by incorporating delimiters into the database creation process",
      ],
    },
  ];

  const filters = [
    { name: "All", icon: FaLaptopCode },
    { name: "Cloud", icon: FaCloud },
    { name: "ML", icon: FaBrain },
    { name: "AI", icon: FaBrain },
    { name: "Software Engineering", icon: FaCode },
    { name: "Other", icon: FaEllipsisH },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));
  return (
    <ResumeContainer>
      <ContentWrapper>
        <Section>
          <SectionTitle>
            <FaLaptopCode /> Projects
          </SectionTitle>
          <FilterContainer>
            {filters.map((filter) => (
              <FilterButton
                key={filter.name}
                active={activeFilter === filter.name}
                onClick={() => setActiveFilter(filter.name)}
              >
                <filter.icon /> {filter.name}
              </FilterButton>
            ))}
          </FilterContainer>
          {filteredProjects.map((project) => (
            <ExperienceItem key={project.name}>
              <h3>
                {project.name}
                {project.github && (
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </ProjectLink>
                )}
              </h3>
              <div className="date">{project.date}</div>
              <ul>
                {project.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </ExperienceItem>
          ))}
        </Section>
      </ContentWrapper>
    </ResumeContainer>
  );
};

export default Resume;
