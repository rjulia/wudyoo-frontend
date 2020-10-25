import React from 'react'
import { useTheme} from 'react-jss' 
import useStyles from './button-style'

const Button = ({children, ...props}) => {
  const theme = useTheme()
  const classes = useStyles({...props, theme})
  return (
    <button className={classes.button}>
      <span className={classes.label}>{children}</span>
    </button>
  )
}

export default Button
