import React,{ useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProgressBar from './ProgressBar'
import { makeStyles } from '@material-ui/core/styles';
import {CheckLogin} from '../context/CheckLogin'
import SimpleModal from './SimpleModal';


function Movie({movie,icount}){
  let contextType=CheckLogin
  const user = useContext(CheckLogin)
  const useStyles = makeStyles(theme => ({
    paper: {
      opacity:0.2
    }
  }));

  const useStyles1 = makeStyles(theme => ({
    paper: {
      opacity:1
    }
  }));

  const classes = useStyles();
  const classes1 = useStyles1();

  var check
  let isNotcomplete
  var useSplash

  const currentLevel=user.currentLevel
  const splashDisplay=user.splashDisplay
  
  console.log(currentLevel)
  console.log(splashDisplay)

  if(splashDisplay===1 && currentLevel===movie.level){
    useSplash=<SimpleModal props={movie.level-1}/> 
  }
  else{
    useSplash=""
  }

  if(movie.level===1 || movie.level<=currentLevel){
    isNotcomplete=false
    console.log("inside")
  }
  else{
    isNotcomplete=true
  }
    
  if(icount<=movie.level){
    console.log("progress bar",movie.level)
    check=<ProgressBar props={movie.level}/>
    icount=icount+1
    console.log("count",icount)
  }
  else{
    console.log("not the progress bar!",movie.level)
    check=""
  }

  return (  
    <div>
      <div style={{marginBottom:60, marginTop:115}} className={isNotcomplete ? classes.paper : classes1.paper}>
        <Card style={{maxWidth: '500px', marginBottom: '10px'}}>
          <CardMedia style={{height: 0, paddingTop: '56.25%'}}image={movie.poster}/>
          <CardContent>
            <Typography component="h2">{ movie.moviename }</Typography>
            <Typography component="h2" color="textSecondary">LEVEL:{ movie.level }</Typography>
            <br/>
          </CardContent>
        </Card>
      </div>
      <div>
        {check}
      </div>
      <div>
        {useSplash}
      </div>
    </div>
  )
}
function MovieList({props}) {
  let allData=props
  return (
    <center>
      <div>
          {allData.map((movie,icount) => (<Movie movie={movie} icount={icount}/>))}
      </div>
    </center>
  )
}

export default MovieList