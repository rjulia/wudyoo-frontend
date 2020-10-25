import {createUseStyles } from 'react-jss' 


const useStyles = createUseStyles((theme)=>({
  container : {
    backgroundColor: "#ccc"
  },
  title: {
    fontFamily: theme.typo.fontFamilyBody,
    fontSize: 40
  }
}))

export default useStyles