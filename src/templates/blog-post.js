/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

import Layout from 'components/layout'
import SEO from 'components/seo'
import SmartLink from 'components/SmartLink'

// Breaks Sharp if imported 🙃
function BlogImage(props) {
  return <img loading='lazy' {...props} />
}

function PageTemplate({ data: { mdx: post } }) {
  return (
    <Layout>
      <SEO
        description={post.frontmatter.description || post.excerpt}
        title={post.frontmatter.title}
      />

      <article className='row'>
        <section className='cell well well--l'>
          <div className='mv-g mv-g--centered_l'>
            <div className='mv-g-b mv-g-b--4of5_m mv-g-b--5of5_l'>
              <h1 className='title tac_l'>{post.frontmatter.title}</h1>
            </div>
          </div>

          <div className='mv-g mv-g--centered_l'>
            <div className='mv-g-b mv-g-b--4of5_m mv-g-b--3of5_l'>
              <div className='mbm mbl_l tw7'>
                {post.frontmatter.description}
              </div>
            </div>
          </div>

          <div className='article'>
            <div className='mv-g mv-g--centered_l'>
              <div className='mv-g-b mv-g-b--4of5_m mv-g-b--3of5_l'>
                <MDXProvider
                  components={{
                    a: SmartLink,
                    img: BlogImage
                  }}
                >
                  <MDXRenderer>{post.body}</MDXRenderer>
                </MDXProvider>
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
