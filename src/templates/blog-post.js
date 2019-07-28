import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function PageTemplate({ data: { mdx: post } }) {
  return (
    <Layout>
      <SEO
        description={post.frontmatter.description || post.excerpt}
        title={post.frontmatter.title}
      />

      <article class='row'>
        <section class='cell well well--l'>
          <div class='mv-g mv-g--centered_l'>
            <div class='mv-g-b mv-g-b--4of5_m mv-g-b--5of5_l'>
              <h1 class='title tac_l'>{post.frontmatter.title}</h1>
            </div>
          </div>

          <div class='mv-g mv-g--centered_l'>
            <div class='mv-g-b mv-g-b--4of5_m mv-g-b--3of5_l'>
              <div class='mbm mbl_l tw7'>{post.frontmatter.description}</div>
            </div>
          </div>

          <div class='article'>
            <div class='mv-g mv-g--centered_l'>
              <div class='mv-g-b mv-g-b--4of5_m mv-g-b--3of5_l'>
                <MDXRenderer>{post.body}</MDXRenderer>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
      }
      body
    }
  }
`
