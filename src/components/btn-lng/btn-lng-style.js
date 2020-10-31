import {createUseStyles } from 'react-jss' 


const useStyles = createUseStyles({
  languageContianer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '20px 50px',
    "& ul": {
      display: 'flex',
      flexDirection: 'row',
      listStyle: 'none',
  
      li :{
        color: "#fff",
        margin:'0 2px',
        cursor: 'pointer',
        fontSize: 11,
        fontWeight: 300,
        lineHeight: 13.2,
  
        '&.active': {
          fontWeight: 700,
        }
      }
    }
  },
  label: {
    fontWeight: 'bold'
  }
})

export default useStyles