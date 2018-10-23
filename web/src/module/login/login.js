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
            form: {
                name: '',
                password: ''
            }
        }
    
    }
    render(){
        return (
            <div>
                <h3>奥利爸爸/妈妈请登录</h3>
                <input type="text" onChange={(e)=>this.set_value('name',e.target.value)}/>
                <input type="password" onChange={(e)=>this.set_value('password',e.target.value)}/>
                <button onClick={(e)=>this.login(e)}>登录</button>
            </div>
        )
    }
    verify(){

    }
    get_data(){

    }
    set_value(key,value){
        let form = this.state.form;
        form[key]=value;
        this.setState({
            form: form
        })
    }
    login(){
        let data = this.get_data();
        console.log(this.state.form)
        axios.post('/login',this.state.form).then(function(res){
            console.log(res)
        })
    }
}