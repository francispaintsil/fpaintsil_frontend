import React from 'react'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

export function Login (){
  const history = useHistory();

  const handlelogin = () =>{
    Axios.post('http://localhost:5000/admin/login',{
      email:'ffagence0@ning.com',
      pword:'qaibMv'
    }).then(res=>{
      console.log(res.data.rows)
      if(res.data.rows){
        console.log(res.data.rows[0])
        history.push('/dashboard');
      }else{
        console.log(res)
        alert('Incorrect credentials')
      }
    })
  }

  return(
    <div id="loginform">
      <FormHeader title="Login" />
      <Form login = {handlelogin}/>
      {/* <OtherMethods /> */}
    </div>
  )
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton login = {props.login} title="Log in"/>
   </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button onClick={props.login}>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);
