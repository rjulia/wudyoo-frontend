import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => {
  return {
  container: {
    backgroundColor: theme.colors.bgDark,
    color: theme.colors.background,
    width: '100vw',
    height: 250
  }
  
}})

export default useStyles