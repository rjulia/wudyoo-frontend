import React from "react";
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../../theme/typography'
import Header from '../header'
import Footer from "../footer"


const Layout = ({ children }) => {
  return (
    <div>
      <GoogleFont typography={typography} />
      <TypographyStyle typography={typography} />
      <Header/>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
