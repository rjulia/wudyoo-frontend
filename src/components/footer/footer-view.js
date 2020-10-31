import _ from 'lodash'
import React from 'react'
import {
  Link
} from "react-router-dom";
import useStyles from './footer-style'

const FooterView = ({pages}) => {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <ul>
        {
          _.map(pages, (page) => <Link to={`/pages/${page.slug}`} key={page.id}>{page.title}</Link>)
        }
      </ul>
      Footer
    </div>
  )
}

export default FooterView
