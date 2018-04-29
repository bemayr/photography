/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { kebabCase } = require('lodash')
const { uniq } = require('ramda')

const extractPictureData = (pictures, metadata) =>
  Object.values(
    [...pictures, ...metadata].reduce((combined, current) => {
      let data = { ...combined }
      data[current.id] = { ...data[current.id], ...current }
      return data
    }, {})
  ).map(picture => ({
    id: picture.id,
    size: picture.prettySize,
    path: picture.absolutePath,
    aspectRatio: picture.image.resolutions.aspectRatio,
    urls: {
      preview: picture.image.preview.src,
      full: picture.image.original.src
    },
    date: picture.markdown.frontmatter.date,
    location: {
      named: picture.markdown.frontmatter.location_named,
      coordinates: picture.markdown.frontmatter.location_coordinates
    },
    story: picture.markdown.html
  }))

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      pictures: allFile(
        filter: {
          sourceInstanceName: { glob: "pictures" }
          ext: { eq: ".jpg" }
        }
      ) {
        edges {
          node {
            id: name
            absolutePath
            prettySize
            image: childImageSharp {
              original {
                width
                height
                src
              }
              resolutions {
                aspectRatio
              }
              preview: resize(width: 300, height: 200, cropFocus: ATTENTION) {
                src
              }
            }
          }
        }
      }
      metadata: allFile(
        filter: { sourceInstanceName: { glob: "pictures" }, ext: { eq: ".md" } }
      ) {
        edges {
          node {
            id: name
            markdown: childMarkdownRemark {
              frontmatter {
                date
                location_named
                location_coordinates
              }
              html
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const pictures = extractPictureData(
      result.data.pictures.edges.map(e => e.node),
      result.data.metadata.edges.map(e => e.node)
    )

    console.log(pictures)
  })
}
