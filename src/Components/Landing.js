import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';

//import Ionicon from 'react-ionicons'
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//import scrollToComponent from 'react-scroll-to-component';
    
import { Link } from 'react-router-dom'

import {
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
  //Button
} from 'react-bootstrap';



export default class Landing extends Component {
    

    componentDidMount() {
      window.scrollTo(0, 0)
    }


	render() {		
		return(
            <div>              
                <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>			
                <div style={{overflow: "hidden", fontFamily: "Quicksand", paddingTop: 50}}> 
                    <div class="landing" style={{height: "100vh"}}>
                        <div style={{paddingTop: "17%", paddingLeft: "20%"}}>
                            <h2 style={{color: "#ea804a"}}>PANOX ELECTRONICS</h2>
                            <h5>Take your studies further</h5>
                        </div>
                    </div>

                    <div class="container" style={{height: 2000, paddingTop: 100}}>
                        <h2>Choose your brand</h2>
                        <h5>We offer only the best to help define your image</h5>
                        <hr/>
                        <div class="row" style={{marginTop: 100, height: 200}}>
                            <div class="col-lg-4" style={{textAlign: "center"}}>                                
                                <img style={{height: 150}} src={require("../Resources/hp.png")} /> 
                            </div>
                            <div class="col-lg-4" style={{textAlign: "center"}}>
                                <img style={{height: 150}} src={require("../Resources/apple.png")} class="img-fluid"/> 
                            </div>
                            <div class="col-lg-4" style={{textAlign: "center"}}>
                                <img style={{height: 150}} src={require("../Resources/acer.png")} class="img-fluid"/> 
                            </div>
                        </div>

                        <div class="row" style={{marginTop: 50}}>
                            <div class="col-lg-4" style={{textAlign: "center"}}>                                
                                <img style={{height: 150}} src={require("../Resources/asus.png")} /> 
                            </div>
                            <div class="col-lg-4" style={{textAlign: "center"}}>
                                <img style={{height: 150}} src={require("../Resources/lg.png")} class="img-fluid"/> 
                            </div>
                            <div class="col-lg-4" style={{textAlign: "center"}}>
                                <img style={{height: 150}} src={require("../Resources/samsung.png")} class="img-fluid"/> 
                            </div>
                        </div>

                        <div class="row" style={{marginTop: 50}}>
                            <div class="col-lg-4" style={{textAlign: "center"}}>                                
                                <img style={{height: 150}} src={require("../Resources/dell.png")} /> 
                            </div>
                            <div class="col-lg-4" style={{textAlign: "center"}}>
                                <img style={{height: 150}} src={require("../Resources/lenovo.png")} class="img-fluid"/> 
                            </div>
                        </div>
                    </div>
                        
            </div>
              
        </div>
		)
	}

}

