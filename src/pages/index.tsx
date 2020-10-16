import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "reactstrap"
import styled, { keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCubes, faUsers, faChartBar } from "@fortawesome/free-solid-svg-icons"
import Banner from "../images/affiliates.png"
import Footer from "../components/footer"

const HeaderSection = styled.section`
  background: #18bc9c;
  text-align: center;

  hr {
    width: 60%;
    border: 1px solid white;
  }

  h2 {
    font-size: 2em;
  }
  .padding {
    padding-top: 100px;
    padding-bottom: 50px;
  }

  .skills {
    font-size: 17px;
  }
`

const AboutSection = styled.section`
  padding: 75px 0px;
  h2 {
    text-align: center;
    font-size: 3em;
  }
`

const FeaturesSection = styled.section`
  background: #2c3e50;
  color: white;
  padding: 75px 0px;

  hr {
    width: 60%;
    border: 1px solid white;
  }

  h2 {
    font-size: 3em;
    text-align: center;
  }

  .feature {
    text-align: center;
    margin-top: 20px;
  }
`

const LineageSection = styled.section`
  padding: 75px 0px;
  text-align: center;

  h2 {
    text-align: center;
    font-size: 3em;
  }
`
const translate = keyframes`
100% {
  transform: translateX(-78.44%)
}
`

const AffiliateSection = styled.section`
  background: #18bc9c;
  color: #fff;
  padding: 75px 0px;

  hr {
    width: 60%;
    border: 1px solid white;
  }
  h2 {
    text-align: center;
    font-size: 3em;
  }

  .tech-slideshow {
    height: 200px;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);

    .affsld {
      background-image: url(${Banner});
      height: 200px;
      width: 3715px;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      transform: translate3d(0, 0, 0);

      animation: ${translate} 18s linear infinite;x
    }
  }
`

const StyledFA = styled(FontAwesomeIcon)`
  color: #5397da;
  font-size: 3em;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderSection>
      <Container className="padding">
        <Row>
          <Col style={{ color: "#fff" }}>
            <h2>STEM-CyLE</h2>
            <span style={{ fontSize: "18px" }}>
              The domain configurable learning management system
            </span>
            <hr />
            <p className="skills">
              Providing students and instructors with guided access to vetted
              digital learning content in all areas of STEM
            </p>
          </Col>
        </Row>
      </Container>
    </HeaderSection>

    <AboutSection>
      <Container>
        <Row>
          <Col>
            <h2>About</h2>
            <br />
            <br />
            <Row>
              <Col sm={6}>
                <p>
                  STEM-CyLE is a configurable learning and engagement
                  cyberlearning environment that contains digital learning
                  content in all areas of STEM. Currently the learning content
                  is mainly on Software Engineering and Programming and is
                  expected to expand in the coming years. Unlike other learning
                  management systems, STEM-CyLE uses embedded learning and
                  engagement strategies (ELESs) to get student more involved in
                  the learning process.
                </p>
              </Col>
              <Col sm={6}>
                <p>
                  These ELESs currently include: Collaborative Learning,
                  Gamification, Problem-Based Learning and Social Interaction.
                  The learning content in STEM-CyLE is in the form of Digital
                  Learning Objects (DLOs) and Tutorials. DLOs are chunks of
                  multimedia learning content that should take the learners
                  between 5 to 15 minutes to complete and contains both a
                  practice assessment and a recorded assessment.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </AboutSection>

    <FeaturesSection>
      <Container>
        <Row>
          <Col>
            <h2>Features</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="feature">
            <StyledFA icon={faCubes} />
            <hr />
            <h4>Configurable Domains</h4>
            <p>
              STEM-CyLE provides the instructor with the ability to configure
              the learning content for a specific class in a given subject
              domain. This involves assigning DLOs and Tutorials from the
              learning content repository to the class either for browsing
              purposes or as class assignments.
            </p>
          </Col>
          <Col md={4} className="feature">
            <StyledFA icon={faUsers} />
            <hr />
            <h4>Learning and Engagement</h4>
            <p>
              The learning and engagement component of the system are provided
              through a configurable set of ELESs. These ELESs currently
              include: Collaborative learning, e.g., use of virtual teams;
              Gamification, e.g., use of virtual points; Problem-based learning,
              e.g., solving problems using the virtual problem-based
              environments; and Social interaction, e.g., user profiles, forums,
              chats, ratings and comment of learning content.
            </p>
          </Col>
          <Col md={4} className="feature">
            <StyledFA icon={faChartBar} />
            <hr />
            <h4>Powerful Reports</h4>
            <p>
              Instructors and learners are provided with detailed reports
              regarding their progress. These reports include items such as,
              progress to completion of DLOS, scores for DLO quizzes, and class
              averages, among others.
            </p>
          </Col>
        </Row>
      </Container>
    </FeaturesSection>

    <LineageSection>
      <Container>
        <Row>
          <Col>
            <h2>Lineage</h2>
            <br />
            <br />
          </Col>
          <Row>
            <Col lg={12}>
              <p>
                STEM-CyLE extends the capabilities of SEP-CyLE (Software
                Engineering and Programming Cyberlearning Environment) which
                extended the capabilities of WReSTT-CyLE (Web-Based Repository
                of Software Testing Tutorials: A Cyberlearning Environment).
                STEM-CyLE will contain learning content for various STEM
                disciplines.
              </p>
              <p>
                SEP-CyLE is currently being funded by a collaborative NSF IUSE
                Engaged Student Learning - Design and Development Level II
                project. This project is a collaborative effort between the
                following institutions: Florida International University
                (DUE-1525112), Alabama AM University (DUE-1525120), Florida A&M
                University (DUE-1525555), Florida Gulf Coast University
                (DUE-1562773), Georgia Southern University (DUE-1525208), Miami
                University (DUE-1525131), North Dakota State University
                (DUE-1525414), and Virginia Commonwealth University
                (DUE-1525125). Dates: 09/01/15 – 08/31/19.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </LineageSection>

    <AffiliateSection>
      <Container>
        <Row>
          <Col lg={12}>
            <h2>Affiliates</h2>
          </Col>
          <hr />
          <br />
          <Col lg={12}>
            <div className="tech-slideshow">
              <picture className="affsld" />
            </div>
          </Col>
        </Row>
      </Container>
    </AffiliateSection>
  </Layout>
)

export default IndexPage
