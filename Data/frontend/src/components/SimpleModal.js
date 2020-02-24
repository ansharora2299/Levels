import React,{useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
 
function getModalStyle() {
  const top = 50 ;
  const left = 50 ;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
 
const useStyles = makeStyles(theme => ({
  paper: {
    position: 'relative',
    height : 220,
    width: 350,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    backgroundImage: "url(https://www.cardexpert.in/wp-content/uploads/2015/07/credit_card_reward_points-cashback.png)"
  },
  reward: {
    color : "#1A6390",
    paddingLeft : 80,
    paddingTop : 100,
  },
  rewardbutton:{
    
    marginBottom : 30,
    marginLeft :  10
  }
}));
 
export default function SimpleModal({props}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <Modal aria-labelledby="simple-modal-title" open={open}>
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-description" className={classes.reward}><b>{10*props}</b></h2>
            <Button variant="contained" color="primary" onClick={handleClose} className={classes.rewardbutton}>Collect Your Reward</Button>
        </div>
      </Modal>
    </div>
  );
}