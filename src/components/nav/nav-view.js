import React from 'react'
import {
  Link
} from "react-router-dom";
import useStyles from './nav-style'
const NavView = () => {
  const styles = useStyles()
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pages/terms-and-conditions">Terms & conditions</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavView