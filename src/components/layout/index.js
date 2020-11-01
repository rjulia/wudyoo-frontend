import React from "react";
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../../theme/typography'
import Header from '../header'
import Footer from "../footer"
import useStyles from './layout-style'

const Layout = ({ children }) => {
  const styles = useStyles()
  return (
    <div>
      <GoogleFont typography={typography} />
      <TypographyStyle typography={typography} />
      <Header/>
      <div className={styles.containerLayout}>
        {children}

      </div>
      <Footer />
    </div>
  )
}

export default Layout
