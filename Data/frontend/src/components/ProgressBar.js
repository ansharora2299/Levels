import React,{ useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import {CheckLogin} from '../context/CheckLogin'
import "../index.css";
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    width: '14.7%',
    '& > * + *': {
      marginTop: theme.spacing(50),
     
    },
  },
}));

export default function ProgessBar({props}) {
    let contextType=CheckLogin
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);
   let currentLevel=props
   const user = useContext(CheckLogin)


    const progress=() => {
      setCompleted(100);
       
      const changeLevel=user.changeLevel
      console.log(user)
    changeLevel(currentLevel)
    setTimeout(()=>{
      console.log("....")},20000);
    
      

      }

    
    


  return (
  <div> 
    <Button variant='contained' color='primary' style={{marginLeft:140,marginTop:20}} onClick={progress}>Play</Button>
      <div className={classes.root}>
    
     < div id="trans">
     <LinearProgress variant="determinate"  value={completed} color="secondary" />
     
     </div>
     </div>
     
     </div>
  );
}