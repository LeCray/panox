import React, { Component} from 'react';
import { Input,Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal, Table, TableHead } from 'mdbreact';
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

import {SavingsTransactionsHistory} from './SavingsTransactionsHistory'
//import {pushTransations} from './SavingsTransactionsHistory'



export default class SavingsAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            width: window.innerWidth,
            mobile: false,  
            accounts: [],

            withdrawModal: false,
            withdrawID: "",
            maxWithdrawal: "",
            withdrawAmount:"",
            withdrawLimit: false,

            depositModal: false,
            depositID: "",                      
            depositAmount:"",
        };

        

        this.withdrawToggle = this.withdrawToggle.bind(this);
        this.depositToggle = this.depositToggle.bind(this);
        this.handleWithdraw = this.handleWithdraw.bind(this);
        this.handleDeposit = this.handleDeposit.bind(this);
        this.processWithdraw = this.processWithdraw.bind(this);
        this.processDeposit = this.processDeposit.bind(this);
        
    }

    componentWillMount() {        
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

    async withdraw(id){
        await this.setState({withdrawID: id})
        this.setState({withdrawModal: true})
        console.log("Row ID is: ", id)
        const maxWithdrawal = this.state.accounts[id-1].balance - 1000
        this.setState({maxWithdrawal: maxWithdrawal})    
    }
    handleWithdraw(e) {
        this.setState({ withdrawAmount: e.target.value});
    }
    processWithdraw(){
        const withdrawAmount = this.state.withdrawAmount
        const accounts = this.state.accounts
        const id = this.state.withdrawID - 1 

        if (accounts[id].balance - withdrawAmount < 1000) {
            this.setState({withdrawLimit: true})
        } else {
            if (window.confirm("Are you sure?")) {
                accounts[id].balance = accounts[id].balance - withdrawAmount            
                this.setState({withdrawModal: !this.state.withdrawModal})
                this.state.withdrawLimit?this.setState({withdrawLimit: false}):null            

                this.setState({
                    id: id,
                    balance: accounts[id].balance,
                    withdrawAmount: withdrawAmount
                })
                //console.log("id:",id,"balance:",accounts[id].balance,"withdrawAmount:",withdrawAmount)                
            }            
        }
    }
    
    async deposit(id){
        await this.setState({depositID: id})
        this.setState({depositModal: true})                     
    }
    handleDeposit(e){
        this.setState({ depositAmount: e.target.value});        
    }
    processDeposit() {
        const depositAmount = this.state.depositAmount
        const accounts = this.state.accounts
        const id = this.state.depositID - 1 
        if (window.confirm("Are you sure?")) {
            accounts[id].balance = accounts[id].balance + +depositAmount            
            this.setState({depositModal: !this.state.depositModal})            
        }                    
    }

    withdrawToggle(){
        this.setState({withdrawModal: !this.state.withdrawModal});
        this.state.withdrawLimit?this.setState({withdrawLimit: false}):null
    }
    depositToggle(){
        this.setState({depositModal: !this.state.depositModal});        
    }

	render() {		    
        const savingsTable = this.state.accounts.map((row) =>
            <tr >                 
                <td key={row.id}>{row.id}</td>
                <td key={row.balance}>R {row.balance}</td>
                <td key={row.id}>
                    <p className="action withdraw" onClick={() => this.withdraw(row.id)}>Withdraw</p> | 
                    <p className="action deposit" onClick={() => this.deposit(row.id)}>Deposit</p>
                </td>
            </tr>  
        );        
        

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

                    <SavingsTransactionsHistory 
                        id={this.state.withdrawID?this.state.withdrawID:null} 
                        balance={this.state.balance?this.state.balance:null} 
                        withdrawAmount={this.state.withdrawAmount?this.state.withdrawAmount:null}/>

                    {/*WITHDRAWAL MODAL*/}
                    <Modal isOpen={this.state.withdrawModal} toggle={this.withdrawToggle} size="lg" style={{paddingLeft: 50, paddingRight: 50}}>
                        <ModalHeader toggle={this.withdrawToggle}>
                            Withdraw<br/>
                            <p style={{fontSize: 15, marginBottom: -5}}>
                                You need to have a min of R1000 in this account<br/>
                                Savings Account ID: {this.state.withdrawID}
                            </p>
                        </ModalHeader>
                        <ModalBody className="modal-body">

                            <Row>
                                <Col className="balance-container" lg={4}>
                                    <h6 className="balance-details">Current Balance:</h6>
                                    <h6 className="balance-details">Max Withdrawal: </h6>
                                </Col>
                                <Col className="balance-container-2" lg={6}>
                                    <h6 className="balance-details-2">R {this.state.withdrawID?this.state.accounts[this.state.withdrawID - 1].balance:null}</h6>
                                    <h6 className="balance-details-2">R {this.state.maxWithdrawal}</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <p>Amount to withdraw R:</p>
                                </Col>
                                <Col lg={4}>
                                    <Form>
                                        <FormGroup>
                                            <FormControl
                                                autocomplete="off"
                                                class="input-style"
                                                type="number"
                                                name="withdrawAmount"                                        
                                                placeholder='Enter amount'
                                                onChange={this.handleWithdraw}                                            
                                            />                                
                                        </FormGroup>                                
                                    </Form>
                                </Col>
                            </Row>
                            {this.state.withdrawLimit?
                                <Row>
                                    <Col lg={4}>                                    
                                    </Col>
                                    <Col lg={4}>
                                        <p style={{color: "red"}}>Insufficient Funds</p>
                                    </Col>
                                </Row>
                            :null}

                        </ModalBody>
                        <ModalFooter>
                            <Button bsStyle="info" onClick={this.withdrawToggle}>Cancel</Button>
                            <Button bsStyle="danger" onClick={this.processWithdraw}>Process Withdraw</Button>
                        </ModalFooter>
                    </Modal>
                    {/*DEPOSIT MODAL*/}
                    <Modal isOpen={this.state.depositModal} toggle={this.depositToggle} size="lg" style={{paddingLeft: 50, paddingRight: 50}}>
                        <ModalHeader toggle={this.depositToggle}>
                            Deposit<br/>
                            <p style={{fontSize: 15, marginBottom: -5}}>
                                You need to have a min of R1000 in this account<br/>
                                Savings Account ID: {this.state.withdrawID}
                            </p>
                        </ModalHeader>
                        <ModalBody className="modal-body">

                            <Row>
                                <Col className="balance-container" lg={4}>
                                    <h6 className="balance-details">Current Balance:</h6>                                    
                                </Col>
                                <Col className="balance-container-2" lg={6}>
                                    <h6 className="balance-details-2">R {this.state.depositID?this.state.accounts[this.state.depositID - 1].balance:null}</h6>                                    
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <p>Amount to deposit R:</p>
                                </Col>
                                <Col lg={4}>
                                    <Form>
                                        <FormGroup>
                                            <FormControl
                                                autocomplete="off"
                                                class="input-style"
                                                type="number"
                                                name="withdrawAmount"                                        
                                                placeholder='Enter amount'
                                                onChange={this.handleDeposit}                                            
                                            />                                
                                        </FormGroup>                                
                                    </Form>
                                </Col>
                            </Row>                      

                        </ModalBody>
                        <ModalFooter>
                            <Button bsStyle="info" onClick={this.depositToggle}>Cancel</Button>
                            <Button bsStyle="danger" onClick={this.processDeposit}>Process Deposit</Button>
                        </ModalFooter>
                    </Modal>


            </div>
		)
	}

}

