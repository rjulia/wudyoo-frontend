import {createUseStyles } from 'react-jss' 

const useStyles = createUseStyles((theme)=>({
  containerLayout :{
    width: theme.widthScreen,
    margin: '0 auto',
    minHeight: 'calc(100vh - 200px)'
  },
}))

export default useStyles