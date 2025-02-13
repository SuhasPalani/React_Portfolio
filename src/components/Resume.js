import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaTrophy,
  FaLaptopCode,
  FaDownload,
  FaGithub,
  FaFileAlt,
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
  }

  .company {
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  .date {
    color: #e0ffff;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  ul {
    list-style-type: none;
    padding: 0;
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
  }
`;

const SkillsContainer = styled.div`
  background: rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: 15px;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #e0ffff;
    }
  }
`;

const DownloadButton = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 100;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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

const Resume = () => {
  return (
    <ResumeContainer>
      <ContentWrapper>
        <Section>
          <SectionTitle>
            <FaFileAlt /> Professional Summary
          </SectionTitle>
          <ExperienceItem>
            Results-driven Computer Science professional with expertise in ✦
            full-stack development ✦ data analysis ✦machinelearning.Recognized
            for ► winning OraHacks hackathon ► Top 12 Finalist at TikTok Tech
            Jam 2024. Proven track record of ✦boosting website performance by
            20% ✦ improving data processing efficiency by 50%. Developed
            innovative dashboards and applications that ✦ enhanced mobile user
            engagement by 28%. Seeking to leverage ✦ technical expertise
            ✦innovative problem-solving in a challenging full-time role.
          </ExperienceItem>
        </Section>
        <Section>
          <SectionTitle>
            <FaBriefcase /> Professional Experience
          </SectionTitle>
          <ExperienceItem>
            <h3>Software Engineer Intern</h3>
            <div className="company">Hamilton Digital Assets, Chicago, IL</div>
            <div className="date">Oct 2024 - Present</div>
            <ul>
              <li>
                Managed user data and built a pipeline for database
                authentication using MongoDB, Kafka, and Key cloak, enhancing
                security and data integrity
              </li>
              <li>
                Conducted client meetings to perform market research and
                collaborated on technical design documents, aligning project
                goals with client needs
              </li>
              <li>
                Developed both mobile and web applications utilizing React,
                React Native, and Django frameworks, improving cross-platform
                functionality
              </li>
              <li>
                Researched and implemented agent-based solutions for chatbots,
                enhancing user interaction and support efficiency
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem>
            <h3>Full Stack Software Engineer Intern</h3>
            <div className="company">Varcons' Tech Pvt Ltd, IND</div>
            <div className="date">Aug 2022 - Sept 2022</div>
            <ul>
              <li>
                Engineered and integrated seamless front-end/back-end solutions,
                boosting application responsiveness by 15%
              </li>
              <li>
                Optimized an online tea-selling platform, increasing website
                speed by 20% and enhancing user experience
              </li>
              <li>
                Leveraged HTML, CSS, JavaScript, and Django to streamline
                development workflow
              </li>
              <li>
                Implemented responsive design, increasing website traffic by 35%
              </li>
              <li>
                Collaborated with cross-functional teams of 5+ members to
                deliver 3 high-quality solutions
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem>
            <h3>Project Manager Intern</h3>
            <div className="company">
              Excelerate, Saint Louis University, MO
            </div>
            <div className="date">Jun 2023 - Jul 2023</div>
            <ul>
              <li>
                Led and managed projects, ensuring seamless collaboration and
                timely delivery, demonstrating strong project oversight and
                effective coordination.
              </li>
              <li>
                Utilized PowerBI to transform complex statistical data into
                clear, visually appealing dashboards, reducing complexity by
                10%.
              </li>
              <li>
                Focused on analyzing Facebook engagement metrics, gaining
                valuable insights into evolving social media patterns.
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem>
            <h3>Software Engineer Intern</h3>
            <div className="company">
              VOIS for Tech University Engagement, IND
            </div>
            <div className="date">Jul 2022 - Sept 2022</div>
            <ul>
              <li>
                Developed and implemented a user-friendly website chatbot,
                utilizing machine learning algorithms to enhance user
                interaction, resulting in a 30% increase in user engagement.
              </li>
              <li>
                Integrated a dialer gateway with machine learning tools,
                optimizing communication processes, which led to a 20% reduction
                in automated response time.
              </li>
              <li>
                Collaborated with cross-functional teams to streamline workflows
                and improve system efficiency.
              </li>
            </ul>
          </ExperienceItem>
        </Section>

        <Section>
          <SectionTitle>
            <FaLaptopCode /> Projects
          </SectionTitle>
          <ExperienceItem>
            <h3>
              SUMMARAIZE
              <ProjectLink
                href="https://github.com/SuhasPalani/summaraize-native"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </ProjectLink>
            </h3>
            <div className="date">Apr 2024 - Sept 2024</div>
            <ul>
              <li>
                Developed a multimodal AI platform with web and mobile apps
                using Python Flask, MongoDB, HTML, CSS, JavaScript, and React
                Native
              </li>
              <li>
                Enhanced mobile user engagement by 28% through optimized design
                and chatbot integration
              </li>
              <li>
                Led API testing and validation using Postman, covering 25+
                endpoints
              </li>
              <li>
                Achieved top recognition at OraHacks and TikTok tech jam
                finalist status
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem>
            <h3>
              AIRBNB DATA PIPELINE OPTIMIZATION
              <ProjectLink
                href="https://github.com/SuhasPalani/DBT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </ProjectLink>
            </h3>
            <div className="date">Jun 2024 - Jul 2024</div>
            <ul>
              <li>
                Built a robust data pipeline using DBT, ensuring clean datasets
                and optimized query performance in Snowflake
              </li>
              <li>
                Automated ETL process, cutting manual data processing time by
                50%
              </li>
              <li>
                Implemented rigorous testing strategies for data quality and
                integrity
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem>
            <h3>
              GitHub Analytics Dashboard
              <ProjectLink
                href="https://github.com/SuhasPalani/spm-assignment-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </ProjectLink>
            </h3>
            <div className="date">Mar 2024 - Apr 2024</div>
            <ul>
              <li>
                Developed a React-based web application to display real-time
                data (issues, pull requests, commits, etc.) from popular GitHub
                repositories (e.g., OpenAI, PyMilvus, OpenAI Cookbook, Autogen,
                Langchain, Langgraph, Elasticsearch), allowing users to analyze
                repository activity.
              </li>
              <li>
                Deployed the application on Google Cloud Platform (GCP),
                ensuring reliable hosting for consistent availability.
              </li>
              <li>
                Built a Flask backend server to handle API requests and process
                data, optimizing the response time by 20% for efficient data
                retrieval.
              </li>
              <li>
                Integrated machine learning models (LSTM, FB/Prophet, and
                Statsmodels) to predict and forecast repository activity trends,
                improving predictive accuracy by 15%.
              </li>
              <li>
                Created interactive data visualizations using Plotly and
                Matplotlib, providing clear insights into repository performance
                and trends.
              </li>
              <li>
                Designed a user-friendly, responsive interface to enhance the
                user experience, increasing user engagement by 25%.
              </li>
              <li>
                Optimized data processing and model execution, reducing
                processing time by 30% and improving overall efficiency.
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem>
            <h3>
              Parking Lot Management System
              <ProjectLink
                href="https://github.com/SuhasPalani/parking_lot_management_system"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </ProjectLink>
            </h3>
            <div className="date">Oct 2023 - Dec 2023</div>
            <ul>
              <li>
                Led frontend design and database creation, integrating the Faker
                module to accelerate dataset generation, reducing database
                creation time by 30%.
              </li>
              <li>
                Developed a robust Parking Lot Management System using HTML,
                CSS, JS, and Flask, seamlessly integrating frontend aesthetics
                with backend functionality for enhanced performance.
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem>
            <h3>
              API CONTRACT TESTING TOOL FOR MICROSERVICES
              <ProjectLink
                href="https://github.com/SuhasPalani/final-year-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </ProjectLink>
            </h3>
            <div className="date">Sep 2022 - Apr 2023</div>
            <ul>
              <li>
                Led development of a web-based API contract testing tool,
                reducing contract creation time by 30%
              </li>
              <li>
                Designed intuitive UI, increasing user satisfaction by 20%
              </li>
              <li>
                Boosted user engagement by 45% through seamless functionality
              </li>
            </ul>
          </ExperienceItem>
        </Section>

        <Section>
          <SectionTitle>
            <FaGraduationCap /> Education
          </SectionTitle>
          <ExperienceItem>
            <h3>Illinois Institute of Technology, Chicago, IL</h3>
            <div className="date">Expected May 2025</div>
            <p>Master of Science, Computer Science</p>
            <p>GPA: 3.66</p>
          </ExperienceItem>
          <ExperienceItem>
            <h3>Global Academy of Technology, IND</h3>
            <div className="date">Aug 2019 - Jul 2023</div>
            <p>Bachelors of Engineering, Computer Science</p>
            <p>GPA: 3.70</p>
          </ExperienceItem>
        </Section>

        <Section>
          <SectionTitle>
            <FaTrophy /> Honors and Achievements
          </SectionTitle>
          <ExperienceItem>
            <ul>
              <li>Top 12 Finalist team at TikTok Tech Jam out of 600+ teams</li>
              <li>Graduate Teaching Assistant, Software Project Management</li>
              <li>
                Winner at OraHacks Hackathon - Text to Video/Audio News Platform
              </li>
              <li>
                'API Contract Driven Testing' at International Conference on
                Advanced Engineering and Technology
              </li>
              <li>College Ambassador - Represented the college at events</li>
              <li>
                Awarded Outstanding Contribution from the Department of Computer
                Science and Engineering
              </li>
            </ul>
          </ExperienceItem>
        </Section>

        <Section>
          <SectionTitle>
            <FaTools /> Technical Skills
          </SectionTitle>
          <SkillsContainer>
            <ul>
              <li>
                Programming Languages: Python, C++, Shell-Scripting, HTML, CSS,
                JavaScript
              </li>
              <li>
                Frameworks: Django, Flask, React, React Native, Node.js,
                TensorFlow, Keras, Pandas, NumPy
              </li>
              <li>
                Databases and Tools: PostgreSQL, MongoDB, SQL, Snowflake, DBT
                Labs, Redis, UiPath, Postman
              </li>
              <li>
                Cloud and DevOps: AWS, Docker, Kubernetes, Jenkins, Ansible,
                GCP, Unix, Git & GitHub, Kafka, Key cloak, Zookeeper
              </li>
            </ul>
          </SkillsContainer>
        </Section>
      </ContentWrapper>

      <DownloadButton
        href="https://drive.google.com/file/d/1Bi9OfF6YrQepgcrMyLhWx-c6SObh9XdZ/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDownload /> View PDF Version
      </DownloadButton>
    </ResumeContainer>
  );
};

export default Resume;
