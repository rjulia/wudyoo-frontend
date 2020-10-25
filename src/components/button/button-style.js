import {createUseStyles } from 'react-jss' 


const useStyles = createUseStyles({
  button: {
    background: ({theme}) => theme.colorPrimary
  },
  label: {
    fontWeight: 'bold'
  }
})

export default useStyles