import React from 'react'
import useStyles from './header-style'
import Nav from "../nav"
import BtnLng from "../btn-lng"

const HeaderView = () => {
  const styles = useStyles()

  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
       <h1>Wudyoo</h1> <BtnLng/>
      </div>
      <Nav />
    </div>
  )
}

export default HeaderView