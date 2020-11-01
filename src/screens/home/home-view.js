import _ from 'lodash'
import React from 'react'
import { Layout, CardCategory } from '../../components'
import useStyles from './home-style'
const HomeView = ({data, settings}) => {
  const styles = useStyles()
  console.log(data)
  const { categories } = data
  return (
    <Layout>
      <div className={styles.container}>
        <h1>HomeView</h1>
        <div className={styles.row}>
          {
            _.map(categories, category => (
              <CardCategory 
                category={category} 
                key={category.id}
                settings={settings}/>
              ))
          }

        </div>
      </div>
    </Layout>
  )
}

export default HomeView
