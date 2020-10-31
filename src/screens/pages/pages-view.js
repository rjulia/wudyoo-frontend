import _ from 'lodash'
import React from 'react'
import { Layout } from '../../components'
import useStyles from './pages-style'

const PagesView = ({data, settings}) => {
  const { pageBySlug } = data
  const styles = useStyles()
  const { language } = settings
  console.log([`title_${language}`])
  console.log(pageBySlug[`title_${language}`])
  return (
    <Layout>
      <div className={styles.container}>
        <h1>{_.get(pageBySlug, `title_${language}`)}</h1>
        {_.get(pageBySlug, 'slug', '')} 
        <p>
          {_.get(pageBySlug, 'content', '')}
        </p>
      </div>
    </Layout>
  )
}

export default PagesView
