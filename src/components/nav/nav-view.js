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
          <Link to="/pages">Link 1</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavView