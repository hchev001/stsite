import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface Props {
  className?: string
  imgStyle?: any
}
const AffiliatesImg = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      AffiliatesImg: file(relativePath: { eq: "affiliates.png" }) {
        childImageSharp {
          fixed(width: 3715) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  if (!data?.AffiliatesImg?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return <Img {...props} fixed={data.AffiliatesImg.childImageSharp.fixed} />
}

export default AffiliatesImg
