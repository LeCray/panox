import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';

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
    constructor(props) {
        super(props);
        this.state = {            
            width: window.innerWidth,
            mobile: false,            
            showHpDetail: false,    
            showAppleDetail: false,
            showAcerDetail: false, 
        };

        this.toggleHpDetail = this.toggleHpDetail.bind(this);
        this.toggleAppleDetail = this.toggleAppleDetail.bind(this);
        this.toggleAcerDetail = this.toggleAcerDetail.bind(this);
    }
    
    async toggleHpDetail() {
        this.setState({showHpDetail: !this.state.showHpDetail})        
    } 
    async toggleAppleDetail() {
        this.setState({showAppleDetail: !this.state.showAppleDetail})        
    }
    async toggleAcerDetail() {
        this.setState({showAcerDetail: !this.state.showAcerDetail})        
    }


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
                        <h5 style={{color: "#ea804a"}}>We offer only the best to help define your image</h5>
                        <hr/>
                        <div class="row" style={{marginTop: 100, height: 200}}>
                            <div  class="col-lg-4" style={{textAlign: "center"}}>                                
                                <img 
                                    onMouseEnter={this.toggleHpDetail} 
                                    onMouseLeave={this.toggleHpDetail}                                     
                                    style={{height: 150, cursor: "pointer"}} 
                                    src={require("../Resources/hp.png")} /> 
                                {
                                  this.state.showHpDetail &&
                                  <div style={{textAlign: "left", 
                                                backgroundColor: "#ea804a", 
                                                height: 200, 
                                                padding: 20, 
                                                borderRadius: 3, 
                                                color: "#fff"}}>
                                    <div style={{display: "inline-block"}}>
                                        <h6>
                                            Premium design<br/> 
                                            Power and performance<br/> 
                                            High Specifications
                                        </h6>
                                        <hr style={{borderColor: "#fff"}}/>
                                        <p style={{fontSize: 15, marginTop: -10}}>What we got</p>
                                        <ul style={{fontSize: 12, marginTop: -10}}>
                                            <li>HP Pavilion 15 i5</li>
                                            <li>HP Celeron Notebook i7</li>
                                            <li>HP Elite Book 820 G4</li>
                                        </ul>
                                    </div>
                                    <img class="align-top pull-right" style={{height: 100, marginLeft: 30}} src={require("../Resources/hp_emotion.png")} />
                                  </div>
                                }

                            </div>
                            <div class="col-lg-4" style={{textAlign: "center"}}>
                                <img 
                                    onMouseEnter={this.toggleAppleDetail} 
                                    onMouseLeave={this.toggleAppleDetail}
                                    style={{height: 150, cursor: "pointer"}} 
                                    src={require("../Resources/apple.png")} />                                  
                                {
                                  this.state.showAppleDetail &&
                                  <div style={{textAlign: "left", backgroundColor: "#ea804a", height: 200, padding: 20, borderRadius: 3, color: "#fff"}}>
                                        <div style={{display: "inline-block"}}>
                                            <h6>
                                                Premium design<br/> 
                                                Power and performance<br/> 
                                                High Specifications
                                            </h6>
                                            <hr style={{borderColor: "#fff"}}/>
                                            <p style={{fontSize: 15, marginTop: -10}}>What we got</p>
                                            <ul style={{fontSize: 12, marginTop: -10}}>
                                                <li>Apple MacBook Pro</li>
                                                <li>Apple MacBook Air 11.6"</li>
                                                <li>Apple MacBook Air 12"</li>
                                            </ul>
                                        </div>
                                        <img class="align-top pull-right" style={{height: 100, marginLeft: 20}} src={require("../Resources/apple_emotion.png")} />
                                    </div>
                                }
                            </div>
                            <div class="col-lg-4" style={{textAlign: "center"}}>
                                <img 
                                    onMouseEnter={this.toggleAcerDetail} 
                                    onMouseLeave={this.toggleAcerDetail}
                                    style={{height: 150, cursor: "pointer"}} 
                                    src={require("../Resources/acer.png")} />                                     
                                {
                                  this.state.showAcerDetail &&
                                    <div style={{textAlign: "left", backgroundColor: "#ea804a", height: 200, padding: 20, borderRadius: 3, color: "#fff"}}>                                    
                                        <div style={{display: "inline-block"}}>
                                            <h6>
                                                Premium design<br/> 
                                                Power and performance<br/> 
                                                High Specifications
                                            </h6>
                                            <hr style={{borderColor: "#fff"}}/>
                                            <p style={{fontSize: 15, marginTop: -10}}>What we got</p>
                                            <ul style={{fontSize: 12, marginTop: -10}}>
                                                <li>Acer Aspire S5</li>
                                                <li>Swift 7</li>
                                                <li>Nitro 5 Spin</li>
                                            </ul>
                                        </div>                                   
                                        <img class="align-top pull-right" style={{height: 100, marginLeft: 20}} src={require("../Resources/acer_emotion.png")} />
                                     </div>
                                }
                            </div>

                        </div>

                        <div class="row" style={{marginTop: 50}}>
                            <div class="col-lg-4" style={{textAlign: "center"}}>  
                                <img style={{height: 150, }} src={require("../Resources/asus.png")} class="img" /> 
                            </div>
                            <div class="col-lg-4" style={{textAlign: "center"}}>
                                <img style={{height: 150}} src={require("../Resources/dell.png")} class="img"/> 
                            </div>
                            <div class="col-lg-4" style={{textAlign: "center"}}>
                                <img style={{height: 150}} src={require("../Resources/samsung.png")} class="img"/> 
                            </div>
                        </div>

                        <div class="row" style={{marginTop: 50}}>
                            <div class="col-lg-4" style={{textAlign: "center"}}>                                
                                <img style={{height: 150}} src={require("../Resources/lg.png")} /> 
                            </div>
                            <div class="col-lg-4" style={{textAlign: "center"}}>
                                <img style={{height: 150}} src={require("../Resources/lenovo.png")} class="img"/> 
                            </div>
                        </div>
                    </div>
                        
                    

                </div>
              
            </div>
		)
	}

}

