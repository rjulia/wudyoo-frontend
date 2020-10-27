import React from 'react'
import { Layout } from '../../components'
import useStyles from './pages-style'

const PagesView = () => {
  const styles = useStyles()
  return (
    <Layout>
      <div className={styles.container}>
        Privacity View
      </div>
    </Layout>
  )
}

export default PagesView
