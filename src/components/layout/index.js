import React from "react";
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../../theme/typography'
import BtnLng from "../btn-lng";
import Footer from "../footer";
import Nav from "../nav";

const Layout = ({ children }) => {
  return (
    <div>
      <GoogleFont typography={typography} />
      <TypographyStyle typography={typography} />
      <div>
        <BtnLng/>
        <Nav />
      </div>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
