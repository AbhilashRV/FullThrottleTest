import React, { Component } from 'react';   
import { render } from '@testing-library/react';
import Input from './input';
import Joi, { errors } from 'joi-browser'

class Login extends Component {
    state = { 
        account : { username :'' , password:''},
        errors :{}
     }

    schema = {
        username: Joi.string().required().email(),
        password: Joi.string().required()
    }

     validate = () =>{
        const result =  Joi.validate(this.state.account,this.schema, {abortEarly:false});
        
          if(!result.error) return null;
           
         const  errors ={};
         for(let item of result.error.details)
         errors[item.path[0]] =item.message;
         return errors

     }

    handleSubmit =e =>{
  e.preventDefault();

   const errors = this.validate();
   this.setState({errors :errors||{}});
  
   if(this.state.account.username==='admin' && this.state.account.password==='admin')
   {
      this.props.history.push("/")
   }
   else
   {
     alert("Invalid User or Password")
   }
   if (errors) return
  
    }

    validateProperty = ({name , value})=>{
        if(name==='username'){
            
            if(value.trim()==='' ) return "username is required";
            
        }
        if(name==='password'){
            if(value.trim()==='') return "password is required"
        }
    }

    handleChange = ({currentTarget:input}) =>{
const errors ={...this.state.errors}
const errorMessage =this.validateProperty(input);
if(errorMessage) errors[input.name]=errorMessage;
else delete errors[input.name]

   const account = {...this.state.account};
   account[input.name] = input.value;
   this.setState({account,errors});

    }

    render() { 
        const {account} = this.state;
        return ( 
        <div>
            <form onSubmit={this.handleSubmit}>
                <Input name="username" value={account.username} error={this.state.errors.username} type="email" label="Username" onChange={this.handleChange}></Input>
                <Input name="password" value={account.password} error={this.state.errors.password}  label="Password" onChange={this.handleChange}></Input>
                <button disabled={this.validate()} className=" btn btn-primary">Login</button>
            </form>
        </div> );
    }
}
 
export default Login;