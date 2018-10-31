import React, { Component} from 'react';
import { Input,Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';


//import Ionicon from 'react-ionicons'
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//import scrollToComponent from 'react-scroll-to-component';
    
import { Link } from 'react-router-dom'

import {
    FormGroup,
    FormControl,
    Form,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'react-bootstrap';

import './Landing.css'


export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            width: window.innerWidth,
            mobile: false,            
            showHpDetail: false,    
            showAppleDetail: false,
            showAcerDetail: false, 
        };
    }

    componentDidMount() {
      window.scrollTo(0, 0)
    }


	render() {		
		return(
            <div>              
                <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet"/>
                <div className="landing-container" style={{fontFamily: 'Slabo 27px'}}> 
                    
                    <div className="landing-left-container"> 
                         <div className="heading-container">
                            <h2>ACME BANK</h2>
                            <p>Simple, Secure, Reliable</p>
                         </div>
                    </div>
                    <div className="landing-right-container"> 
                         <div className="login-container">
                            <h4 className="login-header">Login</h4>
                            <hr/>

                            <Form>
                                <FormGroup>
                                    <FormControl
                                        autocomplete="off"
                                        class="input-style"
                                        type="text"
                                        name="email"                                        
                                        placeholder='Trevor@Noah.com'                                        
                                        disabled={true}
                                    />                                
                                </FormGroup>
                                <FormGroup>
                                    <FormControl
                                        autocomplete="off"
                                        class="input-style"
                                        type="password"
                                        name="password"                                        
                                        placeholder='Password'                                        
                                        disabled={true}
                                    />                                    
                                </FormGroup>
                            </Form>
                            <div style={{textAlign: "right"}}>
                                <Link to="Account"><Button bsStyle="danger">Login</Button></Link>
                            </div>
                        

                            
                         </div>
                    </div>
                    
                </div>
              
            </div>
		)
	}

}

