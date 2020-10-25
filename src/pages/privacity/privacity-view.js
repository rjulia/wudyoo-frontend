import React from 'react'
import { Layout } from '../../components'
import useStyles from './privacity-style'

const PrivacityView = () => {
  const styles = useStyles()
  return (
    <Layout>
      <div className={styles.container}>
        Privacity View
      </div>
    </Layout>
  )
}

export default PrivacityView
