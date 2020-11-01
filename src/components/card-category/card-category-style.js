import {createUseStyles } from 'react-jss' 


const useStyles = createUseStyles((theme)=>({
  container :{
    position: 'relative',
    borderRadius: 20,
    backgroundColor: 'transparent',
    flex: '1 0 25%',
    height: 200,
    padding: 20,
    margin: '0 10px',
    overflow: 'hidden'
  },
  title: {
    fontSize: 36,
    color: theme.colors.background,
    fontWeight: 300,
    textTransform: 'uppercase'
  },
  imageBackground: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: ' translate(-50%, -50%)',
    zIndex: '-10'
  }
}))

export default useStyles