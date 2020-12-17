import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import TemplateLayout from "../components/Layout/template-layout"
import styled from "styled-components"

//@ts-ignore
import peterclarkes from "../images/research-team/peterclarkes.webp"
//@ts-ignore
import allen from "../images/research-team/allen.jpg"
//@ts-ignore
import barnes from "../images/research-team/barnes.jpg"
//@ts-ignore
import condly from "../images/research-team/condly.jpg"
//@ts-ignore
import davis from "../images/research-team/debraDavis.webp"
//@ts-ignore
import duke from "../images/research-team/duke.jpg"
//@ts-ignore
import fu from "../images/research-team/fu.jpg"
//@ts-ignore
import hakam from "../images/research-team/hakam.jpg"
//@ts-ignore
import ingrid from "../images/research-team/ingrid.jpg"
//@ts-ignore
import jones from "../images/research-team/Jones.png"
//@ts-ignore
import kiper from "../images/research-team/kiper-jim.jpg"
//@ts-ignore
import mourya from "../images/research-team/mourya.jpg"
//@ts-ignore
import potvin from "../images/research-team/potvin.jpg"
//@ts-ignore
import thiru from "../images/research-team/thiru.jpg"
//@ts-ignore
import walia from "../images/research-team/walia.jpg"
//@ts-ignore
import viji from "../images/research-team/viji.jpg"

import { bp } from "../utils/breakpoints"

const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 376.8px;
  justify-content: center;

  h4 {
    margin-top: 8px;
  }

  .img-wrapper {
    display: flex;
    margin-bottom: 8px;
    max-height: 300px;

    .image {
      height: 100%;
      padding-top: auto;
      width: 200px;
      max-width: 200px;
    }
  }

  @media ${bp.md} {
    flex-direction: column;
    margin-bottom: 8px;

    .img-wrapper {
      margin-right: 13px;
      margin-bottom: 0px;
    }
  }
`

const ResearchTeam = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "ffdaac9f-7ce0-5cc4-9551-3fd1e3c2459f" } }
      ) {
        nodes {
          id
          frontmatter {
            title
            subtitle
          }
          html
        }
      }
    }
  `)

  const { frontmatter, html } = data.allMarkdownRemark.nodes[0]
  const { title } = frontmatter

  return (
    <TemplateLayout title={title}>
      <Container style={{ paddingTop: "65px", paddingBottom: "65px" }}>
        <h2 style={{ marginBottom: 19 }}>Current Research Team Members</h2>
        <h3 style={{ marginBottom: 14 }}>Florida International University</h3>
        <Row>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={peterclarkes} className="image" />
              </div>

              <div>
                <h4>Peter J. CLarke</h4>
                <p>Principal Investigator (Lead)</p>
              </div>
            </TeamCard>
          </Col>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={davis} className="image" />
              </div>
              <div>
                <h4>Debra Davis</h4>
                <p>Co-Principal Investigator</p>
              </div>
            </TeamCard>
          </Col>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={potvin} className="image" />
              </div>
              <div>
                <h4>Geoff Potvin</h4>
                <p>Co-Principal Investigator</p>
              </div>
            </TeamCard>
          </Col>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={thiru} className="image" />
              </div>
              <div>
                <h4>M. O. Thirunarayanan</h4>
                <p>Co-Principal Investigator</p>
              </div>
            </TeamCard>
          </Col>
        </Row>

        <h3 style={{ marginBottom: 14 }}>Alabama A&M University</h3>
        <Row>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={fu} className="image" />
              </div>
              <div>
                <h4>Yujian Fu</h4>
                <p>Principal Investigator</p>
              </div>
            </TeamCard>
          </Col>

          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={barnes} className="image" />
              </div>
              <div>
                <h4>Nelson Barnes</h4>
                <p>Senior Personnel</p>
              </div>
            </TeamCard>
          </Col>
        </Row>

        <h3 style={{ marginBottom: 14 }}>Florida A&M University</h3>
        <Row>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={jones} className="image" />
              </div>
              <div>
                <h4>Edward Jones</h4>
                <p>Principal Investigator</p>
              </div>
            </TeamCard>
          </Col>
        </Row>

        <h3 style={{ marginBottom: 14 }}>Florida Gulf Coast University</h3>
        <Row>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={ingrid} className="image" />
              </div>
              <div>
                <h4>Ingrid Buckley</h4>
                <p>Principal Investigator</p>
              </div>
            </TeamCard>
          </Col>
        </Row>

        <h3 style={{ marginBottom: 14 }}>Georgia Southern University</h3>
        <Row>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={allen} className="image" />
              </div>
              <div>
                <h4>Andrew Allen</h4>
                <p>Principal Investigator</p>
              </div>
            </TeamCard>
          </Col>
        </Row>

        <h3 style={{ marginBottom: 14 }}>Virginia Commonwealth University</h3>
        <Row>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={duke} className="image" />
              </div>
              <div>
                <h4>Debra Duke</h4>
                <p>Principal Investigator</p>
              </div>
            </TeamCard>
          </Col>
        </Row>

        <h3 style={{ marginBottom: 14 }}>Miami University</h3>
        <Row>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={kiper} className="image" />
              </div>
              <div>
                <h4>James Kiper</h4>
                <p>Principal Investigator</p>
              </div>
            </TeamCard>
          </Col>

          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={hakam} className="image" />
              </div>
              <div>
                <h4>Hakam Alomari</h4>
                <p>Investigator</p>
              </div>
            </TeamCard>
          </Col>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={viji} className="image" />
              </div>
              <div>
                <h4>Vijayalakshmi Ramasamy</h4>
                <p>Investigator</p>
              </div>
            </TeamCard>
          </Col>
        </Row>

        <h3 style={{ marginBottom: 14 }}>North Dokota State Universtiy</h3>
        <Row>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={walia} className="image" />
              </div>
              <div>
                <h4>Gursimran Walia</h4>
                <p>Principal Investigator</p>
              </div>
            </TeamCard>
          </Col>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={mourya} className="image" />
              </div>
              <div>
                <h4>Mourya Reddy</h4>
                <p>North Dokota State University</p>
              </div>
            </TeamCard>
          </Col>
        </Row>

        <h3 style={{ marginBottom: 14 }}>United States Military Academy</h3>
        <Row>
          <Col md={6}>
            <TeamCard>
              <div className="img-wrapper">
                <img src={condly} className="image" />
              </div>

              <div>
                <h4>Steven Condly</h4>
                <p>External Evaluator</p>
              </div>
            </TeamCard>
          </Col>
        </Row>

        <h3>Affiliated Students</h3>
        <ul>
          <li>
            <p>Abigail Byram, VCU</p>
          </li>
        </ul>
        <h3>Past Research Team Members</h3>
        <ul>
          <li>
            <p>
              Tariq M. King, Director of Testing Engineering, Ultimate Software
            </p>
          </li>
          <li>
            <p>Yali Wu, Senior Software Engineer, Twilio, Inc</p>
          </li>
          <li>
            <p>
              Prathiba Natesan, Associate Professor, University of North Texas
            </p>
          </li>
          <li>
            <p>Anurag Goswami</p>
          </li>
        </ul>
        <h3>Past Students</h3>
        <ul>
          <li>
            <p>Kate Zaback, MU</p>
          </li>
        </ul>
      </Container>
    </TemplateLayout>
  )
}

export default ResearchTeam
