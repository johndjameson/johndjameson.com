import { Link } from 'gatsby'
import React from 'react'

import logo from '../images/logo-johndjameson.svg'

const Header = () => (
  <header className='mv-header' role='banner'>
    <div className='row'>
      <div className='cell well'>
        <div className='mv-g aife'>
          <div className='mv-g-b mv-g-b--3of5 mv-g-b--4of5_m'>
            <div className='aife df'>
              <Link className='db mrm' href='/'>
                <img className='db logo' src={logo} alt='' />
              </Link>
              <div class='dn db_m'>
                <p class='mbf tss tw7'>John D. Jameson</p>
                <p class='mbf tsi tss'>Blog posts on web typography</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
