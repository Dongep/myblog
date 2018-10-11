import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default class Login extends React.Component{
    constructor(props){
        super();
        this.state={
            login_status: false,
            user_info: {
                name: '',
                id: ''
            },
            input: {
                name: '',
                password: ''
            }
        }
    
    }
    render(){
        return (
            <div>
                <h3>奥利爸爸/妈妈请登录</h3>
                <input type="text" />
                <input type="password"/>
            </div>
        )
    }
    verify(){

    }
    get_data(){

    }
    login(){
        let data = this.get_data();
        axios.post('/login',{

        })
    }
}