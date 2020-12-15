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

const TeamCard = styled.div`
  display: flex;
  flex-direction: column;

  .img-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;

    .image {
      max-width: 200px;
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
        <TeamCard>
          <div className="img-wrapper">
            <img src={peterclarkes} className="image" />
          </div>

          <h3>Peter J. CLarke</h3>
          <p>Principal Investigator (Lead), Florida International University</p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={davis} className="image" />
          </div>

          <h3>Debra Davis</h3>
          <p>
            Co-Principal Investigator, Florida International University (FIU)
          </p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={potvin} className="image" />
          </div>

          <h3>Geoff Potvin</h3>
          <p>
            Co-Principal Investigator, Florida International University (FIU)
          </p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={thiru} className="image" />
          </div>

          <h3>M. O. Thirunarayanan</h3>
          <p>
            Co-Principal Investigator, Florida International University (FIU)
          </p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={fu} className="image" />
          </div>

          <h3>Yujian Fu</h3>
          <p>Principal Investigator, Alabama A&M University (AAMU)</p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={barnes} className="image" />
          </div>

          <h3>Nelson Barnes</h3>
          <p>Senior Personnel, Alabama A&M University (AAMU)</p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={jones} className="image" />
          </div>

          <h3>Edward Jones</h3>
          <p>Principal Investigator, Florida A&M University (FAMU)</p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={ingrid} className="image" />
          </div>

          <h3>Ingrid Buckley</h3>
          <p>Principal Investigator, Florida Gulf Coast University (FGCU)</p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={allen} className="image" />
          </div>

          <h3>Andrew Allen</h3>
          <p>Principal Investigator, Georgia Southern University (GSU)</p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={duke} className="image" />
          </div>

          <h3>Debra Duke</h3>
          <p>Principal Investigator, Virginia Commonwealth University (VCU)</p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={kiper} className="image" />
          </div>

          <h3>James Kiper</h3>
          <p>
            Principal Investigator, Principal Investigator, Miami University
            (MU)
          </p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={hakam} className="image" />
          </div>

          <h3>Hakam Alomari</h3>
          <p>Investigator, Miami University (MU)</p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={walia} className="image" />
          </div>

          <h3>Gursimran Walia</h3>
          <p>Principal Investigator, North Dokota State Universityh (NDSU)</p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={condly} className="image" />
          </div>

          <h3>Steven Condly</h3>
          <p>External Evaluator, United States Military Academy</p>
        </TeamCard>
        <TeamCard>
          <div className="img-wrapper">
            <img src={mourya} className="image" />
          </div>

          <h3>Mourya Reddy</h3>
          <p>North Dokota State University (NDSU)</p>
        </TeamCard>

        <h1>Affiliated Students</h1>
        <ul>
          <li>
            <p>Abigail Byram, VCU</p>
          </li>
        </ul>
        <h1>Past Research Team Members</h1>
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
        <h1>Past Students</h1>
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
