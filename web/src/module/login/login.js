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
        let name = this.state.user_info.name;
        if(!name){
            name = '奥利爸爸/妈妈请登录';
        } else {
            name = `你好，${name}`;
        }
        return (
            <div>
                <h3>{name}</h3>
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
        axios.post('/login',this.state.form).then((res)=>{
            if(res.data.code===0){
                let user_info={
                    name: res.data.data.name,
                    id: res.data.data.id
                }
                this.setState({
                    user_info: user_info
                })
            }
        })
    }
}