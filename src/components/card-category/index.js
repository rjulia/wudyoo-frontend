import _ from 'lodash'
import React from 'react'
import useStyles from './card-category-style'
const CardCategory = ({category, settings}) => {
  const { language } = settings
  const styles = useStyles()
  const urlImge = _.head(_.get(category, 'picture'))
  console.log(_.get(urlImge, 'formats.small'))
  const urlApi = 'http://localhost:1337'
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{_.get(category, `title_${language}`)}</h4>
      <img className={styles.imageBackground} src={urlApi + _.get(urlImge, 'formats.small.url')} alt=''></img>
    </div>
  )
}

export default CardCategory
