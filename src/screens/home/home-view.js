import React from 'react'
import { Layout } from '../../components'
import useStyles from './home-style'
const HomeView = () => {
  const styles = useStyles()
  return (
    <Layout>
      <div className={styles.container}>
        <h1>HomeView</h1>
        <p className={styles.title}>HomeView</p>
      </div>
    </Layout>
  )
}

export default HomeView
