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
                        <div style={{marginTop: "17%", marginLeft: "20%"}}>
                            <h2 style={{color: "#ea804a"}}>PANOX ELECTRONICS</h2>
                            <h5>Take your studies further</h5>
                        </div>
                    </div>

                    <div class="container" style={{height: 500}}>
                    </div>
                        
            </div>
                    }
                    }
        </div>
		)
	}

}

