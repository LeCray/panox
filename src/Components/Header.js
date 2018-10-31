import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Ionicon from 'react-ionicons'
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'





export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false, 
            home: true           
        };
    this.onClick = this.onClick.bind(this);    
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,            
        });        
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet"/>
                <Navbar transparent fixed="top" color="transparent" dark expand="md" scrolling style={{paddingLeft: 50, fontFamily: 'Slabo 27px'}}>
                    <NavbarBrand>
                        <Link to="/" style={{color: "#fff"}}>ACME</Link>                                                 
                    </NavbarBrand>

                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>   
                          <NavItem>
                              <NavLink to="#"  style={{color: "#000"}}>Contact us</NavLink>
                          </NavItem>                                                                     
                          <NavItem>
                              <NavLink to="#" style={{color: "#000"}}>About us</NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret style={{color: "#000"}}>Menu</DropdownToggle>
                              <DropdownMenu>                                  
                                  <DropdownItem><Link to="#"  style={{color: "#000"}}>Careers</Link></DropdownItem>                                  
                                  <DropdownItem><Link to="#"  style={{color: "#000"}}>FAQ</Link></DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>                        
                    </Collapse>
                </Navbar>
            </div>
        );
    }


}

const styles = {
    homeNav: {
        color: "black"
    },
    Nav: {                  
        color: "#fff"
    }
}
