import React from 'react'
import PropTypes from 'prop-types'
import { Head, useSiteData } from 'react-static'

function Title({ children }) {
  const { siteTitle } = useSiteData()

  return (
    <Head>
      <title>{children ? `${children} | ${siteTitle}` : siteTitle}</title>
    </Head>
  )
}

Title.propTypes = {
  children: PropTypes.string,
}

export default Title
