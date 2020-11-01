import {createUseStyles } from 'react-jss' 


const useStyles = createUseStyles((theme)=>({
  container : {
    padding: [[20,0]]
  },
  title: {
    fontFamily: theme.typo.fontFamilyBody,
    fontSize: 40
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
}))

export default useStyles