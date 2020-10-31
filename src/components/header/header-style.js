import {createUseStyles } from 'react-jss' 


const useStyles = createUseStyles((theme)=>({
  containerFluid : {
    width: '100%',
    backgroundColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'column',

    
  },
  container: {
    width: 1240,
    margin: '0 auto',
    color: theme.colors.secondary,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    
    
  }
}))

export default useStyles