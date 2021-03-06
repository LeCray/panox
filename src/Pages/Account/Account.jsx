import React, { Component} from 'react';
import { Input,Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';


//import Ionicon from 'react-ionicons'
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//import scrollToComponent from 'react-scroll-to-component';
    
import { Link } from 'react-router-dom'
import SavingsAccount from '../../Components/SavingsAccount'
//import {SavingsTransactionsHistory} from '../../Components/SavingsTransactionsHistory'
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

import './Account.css'

const SavingsAccounts = [{
      name: "onion",
      price: ".99",
      id: 1
    }, {
      name: "pepper",
      price: "1.25",
      id: 2
    }, {
      name: "broccoli",
      price: "3.00",
      id: 3
}];

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            width: window.innerWidth,
            mobile: false,            
        };

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
                <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet"/>
                <div className="account-container" style={{fontFamily: 'Slabo 27px'}}> 
                    <div>  
                        <div className="left-navigation"> 
                            <h3>Trevor Noah</h3>
                            <hr className="account-line"/>
                            <p style={{cursor: "pointer"}}>Savings Accounts</p>
                            <p style={{cursor: "pointer"}}>Current Accounts</p>
                        </div>
                        
                        <div className="right-container"> 
                            <div className="right-inner-container">
                                <div className="account-table-container">

                                    <SavingsAccount />
                                    
                                </div>
                            </div>
                        </div>       
                             
                    </div>
                    
                </div>
              
            </div>
		)
	}

}

