import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.project.nodes
  const posts2 = data.projects.nodes
  const {numPages } = pageContext;
  const getPageNumberPath = (currentIndex) => {
        if (currentIndex === 0) {
            return '/';
        }

        return 'content/blog/' + (currentIndex + 1);
    }

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <table className="table">
      <tr style={{ listStyle: `none` }} className="row">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (          
              <td key={post.fields.slug} className="column">  
               <article
                className="card"
                itemScope
                itemType="http://schema.org/Article"
               >                   
                <header>
                <GatsbyImage image={post.frontmatter.image.childImageSharp.gatsbyImageData}              
                    alt="blog images"/> 
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.frontmatter.image.relativePath || post.excerpt,
                    }}
                    itemProp="description"
                  />   
                </section>
              </article>
            </td>         
          )
        })}       
      </tr>  
      <tr>
      {posts2.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (          
              <td key={post.fields.slug} className="column">  
               <article
                //className="post-list-item"
                className="card"
                itemScope
                itemType="http://schema.org/Article"
               >                   
                <header>
                <GatsbyImage image={post.frontmatter.image.childImageSharp.gatsbyImageData}              
                    alt="blog images"/> 
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.frontmatter.image.relativePath || post.excerpt,
                    }}
                    itemProp="description"
                  />   
                </section>
              </article>
            </td>         
          )
        })}
      </tr>   
      <div>
      {Array.from({ length: numPages }, (_, i) => {
                    return (
                        <Link className="Pagination" key={i + 1} to={getPageNumberPath(i)}>
                        {i + 1}
                        </Link>
                    )
                  })}
      </div>          
      </table>
    </Layout>)
    }

export default BlogIndex

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  project: allMarkdownRemark(limit: 3, skip: 3) {
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        date
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 550, width: 420)
          }
        }
      }
    }
  }
  projects: allMarkdownRemark(limit: 3) {
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        date
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 550, width: 420)
          }
        }
      }
    }
  }
}
`
