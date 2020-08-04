import React from 'react';
import FormInput from '../form-input/form-input.component';
import {ReactComponent as Logo } from '../../assets/wattpad.svg';
import { 
    WrapperContainer,
    HeaderContainer,
    FormContainer,
    TableContainer,
    ButtonLogin
} from './sign-in.styles';
class SignIn extends React.Component {
    constructor(props) { 
        super(props);

        this.state = {
            email : "",
            password : ""
        }
    }
    handleChange = (e) => {
        const {value , name} = e.target;

        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
    }
    render(){ 
        return( 
            <HeaderContainer >
                <WrapperContainer >
                    <Logo width={160} height={70}   />
                    <FormContainer action="./login/home.html" onSubmit= {this.handleSubmit} className="loginuser">
                        <TableContainer className="login">
                            <tbody>
                                <tr style={{height: '20px'}}>
                                    <td>
                                        <label htmlFor="email">Email</label>
                                    </td>
                                    <td>
                                        <label htmlFor="logpassword">Password</label>
                                    </td>
                            
                                    
                                </tr>
                                <tr>
                                    <td>
                                        <FormInput  
                                            handleChange = {this.handleChange}
                                            type="text" 
                                            id="email" 
                                            className="inputtext" 
                                            required 
                                            name = "email"/>
                                    </td>
                                    
                                    <td>
                                        <FormInput 
                                            handleChange = {this.handleChange}
                                            type="password" 
                                            id="logpassword" 
                                            className="inputtext" 
                                            name = "password"
                                            required />
                                    </td>
                                    <td >
                                        <ButtonLogin type ="submit" className="loginbutton" >Login </ButtonLogin>
 
                                    </td>
                                </tr>
                            </tbody>
                        </TableContainer>
                    </FormContainer>
                </WrapperContainer>
            </HeaderContainer>
        );
    }
}
export default SignIn;