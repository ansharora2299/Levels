import React,{Component} from 'react'
import {CheckLogin} from '../context/CheckLogin'
import CreateUser from './CreateUser'
import StoreValue from './StoreValue'
class Start extends Component
{
  static contextType=CheckLogin
  render(){
    console.log(this.context)
    const isLogin=this.context.isLogin
    var didLogin;
    if(!isLogin)
    {
      didLogin=<CreateUser/>
    }
    else
    {
      didLogin=<StoreValue/>
    }
    
    return(
      <div>
        {didLogin}
     </div>
    )
}
}

export default Start