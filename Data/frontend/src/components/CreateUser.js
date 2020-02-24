import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {CheckLogin} from '../context/CheckLogin'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class CreateUser extends Component {
  static contextType=CheckLogin
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password:'',
      list:[]
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  
  onSubmit(e) {
    e.preventDefault();
    //console.log(this.state.username)
    let u=this.state.username
    const {changeState}=this.context
    changeState(u)
  }

  render() {
    
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign in</Typography>
        <form className="form" noValidate>
          <TextField variant="outlined" margin="normal" required fullWidth id="email" label="User Name" name="email" autoFocus value={this.state.username} onChange={this.onChangeUsername} />
          <TextField variant="outlined" margin="normal" fullWidth name="password" label="Password" type="password" id="password" value={this.state.password} onChange={this.onChangePassword} />
          <Button type="submit" fullWidth variant="contained" color="primary" onClick={this.onSubmit}>Sign In</Button>
        </form>
      </div>
    </Container>
  )
  }
}