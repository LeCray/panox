import React, { Component} from 'react';
import { Input,Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal, Table, TableHead } from 'mdbreact';


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





export default class SavingsAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            width: window.innerWidth,
            mobile: false,  
            accounts: [],
            withdrawModal: false,
            withdrawID: 1,
        };
        this.toggle = this.toggle.bind(this);
        //this.withdrawID = this.withdrawID.bind(this);
        
    }

    componentWillMount() {
        window.scrollTo(0, 0)

        const Accounts = [{
                id: 1,
                balance: 20000,                
            }, {
                id: 2,
                balance: 40000,                
            }, {
                id: 3,
                balance: 10000,
        }];
        this.setState({accounts: Accounts})
        
    }

    componentDidMount() {
        console.log(this.state.accounts)
    }

    async withdraw(id){
        await this.setState({withdrawID: id})
        this.setState({withdrawModal: true})
        
    }
    deposit(id){
        
        console.log({id})
    }

    toggle(){
        this.setState({withdrawModal: !this.state.withdrawModal});
    }

	render() {		
        

        const savingsTable = this.state.accounts.map((row) =>
            <tr >                 
                <td key={row.id}>{row.id}</td>
                <td key={row.balance}>{row.balance}</td>
                <td key={row.id}>
                    <p className="action withdraw" onClick={() => this.withdraw(row.id)}>Withdraw</p> | 
                    <p className="action deposit" onClick={() => this.deposit(row.id)}>Deposit</p>
                </td>
            </tr>  
        );

        //const withdrawID = this.state.withdrawID.id


        return(
            <div>      
                <h3 className="savings-header">Savings Accounts</h3>     
                 
                   <Table striped >
                        <tr >
                            <th className="table-head-styling">ID</th>
                            <th className="table-head-styling">Balance</th>
                            <th className="table-head-styling"></th>                
                        </tr>                                                            
                        {savingsTable}  
                    </Table>
                    

                    <Modal isOpen={this.state.withdrawModal} toggle={this.toggle} size="lg">
                        <ModalHeader toggle={this.toggle}>Withdraw</ModalHeader>
                        <ModalBody className="modal-body">

                            <Row>
                                <Col className="balance-container" lg={6}>
                                    <h5 className="balance-details">Current Balance:</h5>
                                    <h5 className="balance-details">Max Withdrawal: </h5>
                                </Col>
                                <Col className="balance-container-2" lg={6}>
                                    <h5 className="balance-details-2">{this.state.accounts[this.state.withdrawID - 1].balance}</h5>
                                    <h5 className="balance-details-2">081 741 2792</h5>
                                </Col>
                            </Row>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                            <Button color="primary">Save changes</Button>
                        </ModalFooter>
                    </Modal>
            </div>
		)
	}

}

