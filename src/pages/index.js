import React from 'react'
import { Link, graphql } from 'gatsby'
import ExternalLink from 'components/ExternalLink'
import Layout from 'components/layout'
import SEO from 'components/seo'

import manicule from 'images/manicule.svg'
import typeSpecimens from 'images/type-specimens.jpg'
import typeStudies from 'images/type-studies.png'

function IndexPage({
  data: {
    allMdx: { edges: posts },
  },
}) {
  const latestPost = posts[0].node

  return (
    <Layout>
      <SEO title='Home' />

      <main role='main'>
        <section className='row'>
          <div className='cell well well--l mbf'>
            <div className='mv-strikeAround mbl'>
              <h2 className='heading--uppercase'>Projects</h2>
            </div>
            <div className='mv-g has-cropHeight'>
              <div className='mv-g-b mv-g-b--3of5_m mbm mbf--m'>
                <ExternalLink className='db' href='https://typestudies.com'>
                  <p className='srt'>Type Specimens</p>
                  <img
                    alt=''
                    className='mv-thumbnail'
                    height='365'
                    src={typeStudies}
                    width='584'
                  />
                </ExternalLink>
              </div>
              <div className='mv-g-b mv-g-b--2of5_m has-cropHeight'>
                <ExternalLink
                  className='mv-cropHeight_m mv-thumbnail'
                  href='https://typespecimens.io'
                >
                  <p className='srt'>Type Studies</p>
                  <img
                    alt=''
                    className='mv-thumbnail-media w100p'
                    height='404'
                    src={typeSpecimens}
                    width='366'
                  />
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <section className='row mbm--m'>
          <div className='cell well well--l'>
            <div className='mv-strikeAround mbl'>
              <h2 className='heading--uppercase'>Blog Posts</h2>
            </div>

            <div className='mv-g'>
              <div className='mv-g-b mv-g-b--3of5_m mbl_M'>
                <h3 className='heading heading--2'>Latest Post</h3>
                <div className='has-manicule mbl'>
                  <div className='mv-manicule dn_1180'>
                    <img alt='' className='mv-manicule-image' src={manicule} />
                    <p className='mv-manicule-text'>New</p>
                  </div>
                  <Link
                    className='link link--underlined'
                    to={latestPost.fields.slug}
                  >
                    {latestPost.frontmatter.title}
                  </Link>
                  <p className='mbs'>{latestPost.frontmatter.description}</p>
                  <Link
                    className='link link--underlined tss'
                    to={latestPost.fields.slug}
                  >
                    Continue Reading
                  </Link>
                </div>

                <h3 className='heading heading--2'>More Posts</h3>
                <ul className='list'>
                  {posts.slice(1).map(({ node: post }) => (
                    <li className='list-item' key={post.fields.slug}>
                      <Link
                        className='link link--underlined'
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mv-g-b mv-g-b--2of5_m'>
                <h3 className='heading heading--2'>Guest Posts</h3>
                <ul className='list mbm'>
                  <li className='list-item'>
                    <p className='mbf'>
                      <ExternalLink
                        className='link link--underlined'
                        href='https://medium.com/type-thursday/type-specimens-on-the-web-59a4335c1a3'
                      >
                        Type Specimens on the Web
                      </ExternalLink>
                    </p>
                  </li>

                  <li className='list-item'>
                    <p className='mbf'>
                      <ExternalLink
                        className='link link--underlined'
                        href='https://css-tricks.com/styling-underlines-web'
                      >
                        Styling Underlines on the Web
                      </ExternalLink>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { archived: { ne: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            title
          }
        }
      }
    }
  }
`
