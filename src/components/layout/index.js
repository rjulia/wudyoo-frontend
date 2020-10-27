import React from "react";
import { Helmet } from "react-helmet";
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../../theme/typography'
import Nav from "../nav";

const Layout = ({ children }) => {
  return (
    <div>
      <GoogleFont typography={typography} />
      <TypographyStyle typography={typography} />
      <div>
        {/* <Nav /> */}
      </div>
      {children}
      <p>Footer</p>
    </div>
  )
}

export default Layout
