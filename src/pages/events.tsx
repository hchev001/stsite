import React from "react"
import TemplateLayout from "../components/Layout/template-layout"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import SEO from "../components/seo"

const EventCard = styled.div`
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  color: white;
  width: 100%;
  height: 100%;
  background-color: #3498db;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  text-align: center;
  position: relative;
  box-shadow: 1px 1px 3px 0px black;
  .content {
    padding: 15px;
    .title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 35px;
      color: whitesmoke;
    }

    .subtitle {
      color: whitesmoke;
    }
  }
`

const EventDirectory = styled(Container)`
  margin-top: 40px;
`

const EventData = [
  {
    title: "LESSEP - 2019",
    location: "@ Florida International University",
    date: "June 7th and 8th, 2019",
    url: "/events/lessep-2019-1",
  },
  {
    title: "LESSEP - 2018 - 1",
    location: "@ Florida International University",
    date: "June 8th and 9th, 2018",
    url: "/events/lessep-2018-1",
  },
  {
    title: "WCCE - 2018",
    location: "@ Florida International University",
    date: "February 9th and 10th, 2018",
    url: "/events/wcce-2018",
  },
  {
    title: "LESSEP 2017 - 3",
    location: "@ Tapia",
    date: "September 22, 2017: 3:30PM - 5:00PM",
    url: "/events/lessep-2017-3",
  },
  {
    title: "LESSEP 2017 - 2",
    location: "@ ASEE",
    date: "June 28th, 2017: 3:30PM - 5:00PM",
    url: "/events/lessep-2017-2",
  },
  {
    title: "LESSEP 2017 - 1",
    location: "@ Florida International University",
    date: "June 2nd & June 3rd, 2017",
    url: "/events/lessep-2017-1",
  },
  {
    title: "LESSEP 2016",
    location: "@ Florida International University",
    date: "June 10th & 11th, 2016",
    url: "/events/lessep-2016",
  },
  {
    title: "WISTPC 2015",
    location: "@ Florida International University",
    date: "June 12th & 13th, 2015",
    url: "/events/wistpc-2015",
  },
  {
    title: "WISTPC 2014-2",
    location: "@ SIGCSE 2014 - Atlanta, GA",
    date: "March 5th, 2014",
    url: "/events/wistpc-2014-2",
  },
  {
    title: "WISTPC 2014-1",
    location: "@ SIGCSE 2014 - Atlanta, GA",
    date: "March 5th, 2014",
    url: "/events/wistpc-2014-1",
  },
  {
    title: "WISTPC 2013",
    location: "@ Florida International University",
    date: "June 23rd & 24th, 2010",
    url: "/events/wistpc-2013",
  },
  {
    title: "WISTPC 2010",
    location: "@ Florida International University",
    date: "June 23rd & 24th, 2010",
    url: "/events/wistpc-2010",
  },
  {
    title: "WISTPC 2009",
    location: "@ Florida International University",
    date: "March 16th & 17th, 2009",
    url: "/events/wistpc-2009",
  },
]

const StyledMarkdown = styled.div``

const Events = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "11c9f3df-8358-5cf6-a841-15e32d06a160" } }
      ) {
        nodes {
          id
          frontmatter {
            title
          }
          html
        }
      }
    }
  `)

  const { frontmatter, html } = data.allMarkdownRemark.nodes[0]

  const goTo = (e, path: string) => {
    e.preventDefault()

    navigate(path)
  }
  return (
    <TemplateLayout title="Events">
      <SEO title="Events" />
      <EventDirectory>
        <StyledMarkdown>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledMarkdown>
        <Row>
          {EventData.map((event, index) => {
            return (
              <Col sm={4} style={{ margin: "15px 0px" }}>
                <EventCard key={index} onClick={e => goTo(e, event.url)}>
                  <div className="content">
                    <p className="title">{event.title}</p>
                    <p className="subtitle">{event.location}</p>
                    <div>{event.date}</div>
                  </div>
                </EventCard>
              </Col>
            )
          })}
        </Row>
      </EventDirectory>
    </TemplateLayout>
  )
}

export default Events
