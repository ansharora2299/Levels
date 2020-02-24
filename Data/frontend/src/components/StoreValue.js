import React, { Component } from 'react'
import axios from 'axios';
import {CheckLogin} from '../context/CheckLogin'
import MovieList from './MovieList'
export class StoreValue extends Component {
    static contextType=CheckLogin
    constructor(props) {
        super(props)
    
        this.state = {
             list:[]
        }
    }
    
    componentDidMount()
    {  
        const username=this.context.username
        console.log(username)
        axios.get('http://localhost:5000/getData/name',{params:{name:username}})
        .then(response => {
          this.setState({ list: response.data })
        })
        .catch((error) => {
          console.log(error);
        })  
    }
    
    render() {
        return (
            <div>
                <MovieList props={this.state.list}></MovieList>
            </div>   
        )
    }
}

export default StoreValue