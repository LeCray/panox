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
                <link href="https://fonts.googleapis.com/css?family=Quicksand:700" rel="stylesheet"/>
                <Navbar transparent fixed="top" color="transparent" dark expand="md" scrolling style={{paddingLeft: 50, fontFamily: "Quicksand", backgroundColor: "#ea804a"}}>
                    <NavbarBrand>
                        <Link to="/" style={{color: "#fff"}}>PANOX</Link>                                                 
                    </NavbarBrand>

                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>   
                          <NavItem>
                              <NavLink to="/Contact_Us" onClick={this.onClick} style={{fontStyle:"bold"}}>Contact us</NavLink>
                          </NavItem>                                                                     
                          <NavItem>
                              <NavLink to="/About_Us" onClick={this.onClick}>About us</NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>Menu</DropdownToggle>
                              <DropdownMenu>                                  
                                  <DropdownItem><Link to="/Careers" onClick={this.onClick}>Careers</Link></DropdownItem>                                  
                                  <DropdownItem><Link to="/FAQ" onClick={this.onClick}>FAQ</Link></DropdownItem>
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