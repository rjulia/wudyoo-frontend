import React from "react";
import { Helmet } from "react-helmet";
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../../theme/typography'
import {
  Link
} from "react-router-dom";

const Layout = ({children}) => {
  return (
    <div>
      <Helmet>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
      </Helmet>
     <div>
     <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/privacity">Privacity</Link>
            </li>
          </ul>
        </nav>
     </div>
      {children}
      <p>Footer</p>
    </div>
  )
}

export default Layout
