import { createUseStyles } from 'react-jss'
import Color from 'color'

const useStyles = createUseStyles((theme) => {
  console.log(theme)
  return {
  spinnerContainer: {
    backgroundColor: Color('#fff').alpha(0.1),
    position: 'fixed',
    width: '100%',
    height: '100vh',
  },
  '@keyframes dual-ring': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  dualRing: {
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: ['translate(-50%, -50%)'],
    width: 64,
    height: 64,
    '&:after':{
        content: '" "',
        display: 'block',
        width: 46,
        height: 46,
        margin: 1,
        borderRadius: '50%',
        border: `5px solid ${theme.colors.alert}`,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        animation: 'dual-ring 1200ms linear infinite',
    }
  },
  
}})

export default useStyles