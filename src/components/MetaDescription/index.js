import React from 'react'
import PropTypes from 'prop-types'
import { Head, useSiteData } from 'react-static'

function Title({ children }) {
  const { siteDescription } = useSiteData()

  return (
    <Head>
      <meta name='description' content={children || siteDescription} />
    </Head>
  )
}

Title.propTypes = {
  children: PropTypes.string,
}

export default Title
