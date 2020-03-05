import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../forminput/forminput'
import CustomButton from '../CustomButton/custombutton'
import {SignInWithGoogle} from '../../firebase/firebase.utils'



 class SignIn extends React.Component {
    constructor (props){
        super(props);
        this.state={
            email:'dayitisaacamos3@gmail.com',
            password:'07062197098'
        }
}
handleSubmit =event =>{
    event.preventDefault()
    this.setState({email:'', password:''})
}
handleChange = event =>{
    const {value, name} = event.target;
    this.setState({[name]:value})
}


    render() {
        return (
        <div className='sign-in'>
         <h2>I already have an account</h2>  
         <p>Sign in with email and password</p>
         <form onSubmit={this.handleSubmit}>
             
             <FormInput type='email' value={this.state.email} onClick={this.handleChange} label='Email' required />
             
             
             <FormInput type='password' value={this.state.password}onClick={this.handleChange} label='Password'  required />

           <div className='buttons'>
           <CustomButton type ='submit' value='submit' >
                 Sign In
             </CustomButton>

             <CustomButton  onClick={SignInWithGoogle} signInWithGoogle>
                 SIGN IN WITH GOOGLE
             </CustomButton>
           </div>
         </form>
        </div>
        )
    }

 }


export default SignIn
