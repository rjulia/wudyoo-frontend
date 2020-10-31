import {createUseStyles } from 'react-jss' 


const useStyles = createUseStyles((theme)=>({
  container : {
    width: 1240,
    margin: '0 auto',
    '& ul': {
      display: 'flex',
      flexDirection: 'row',
      listStyle: 'none',
      '& li': {
        margin: '0 20px',
        '& a':{
          color: theme.colors.secondary,
          textDecoration: 'none',
          textTransform: 'uppercase'
        }
      }
    }
  },
}))

export default useStyles