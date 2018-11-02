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


export class SavingsTransactionsHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            width: window.innerWidth,
            mobile: false,  
            transactionHistory:[],     
            transactionDetails:[],  
            addRow: false
        };
        
       // this.pushTransations = this.pushTransations.bind(this);
               
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Next Props: ", nextProps.balance)
        console.log("Current Prop: ", this.props.balance)

        return nextProps.balance != this.props.balance
    }


    render() {
        const transactionHistory = this.state.transactionHistory
        const transactionDetails = {
            id: this.props.id,
            balance: this.props.balance,
            withdrawAmount: this.props.withdrawAmount
        }                
        transactionDetails.balance?transactionHistory.push(transactionDetails):null
        
        const transactionsTable = transactionHistory.map((row) =>                        
            <tr >                 
                <td key={row.id}>{row.id}</td>
                <td key={row.withdrawAmount}>R -{row.withdrawAmount}</td>                                    
                <td key={row.balance}>R {row.balance}</td>                
            </tr>
        );
        

 
        return(

            <div>      
                <h3 className="savings-header">Account History</h3>     
                 
                   <Table striped >
                        <tr >
                            <th className="table-head-styling">ID</th>
                            <th className="table-head-styling">Amount</th>
                            <th className="table-head-styling">Balance</th>
                        </tr>                                                            
                        {this.props.balance?transactionsTable:null}
                    </Table>
                    
            </div>
        )
    }
}


/*
export default SavingsTransactionsHistory() {
    constructor(props) {
        super(props);
        this.state = {            
            width: window.innerWidth,
            mobile: false,  
            transactionHistory: [],
        };
        
    }

    componentWillMount() {        
        this.state.transactionHistory.push[{id: this.props.id, balance: this.props.balance, withdrawAmount: this.props.withdrawAmount}]
    }

    componentDidMount() {
        
    }

	render() {		    
        const transactionsTable = this.state.transactionHistory.map((row) =>
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
                    
            </div>
		)
	}

}
*/
