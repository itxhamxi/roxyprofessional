import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import '../App.css'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
   const[Navigation,SetNavigation] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const Changebg=()=>{
    if(window.scrollY>=80){
      SetNavigation(true);
    }else{
      SetNavigation(false);
    }
   }
   
   window.addEventListener('scroll',Changebg)

  return (
    <div>
      <Navbar className={Navigation ? 'navbar active' : 'navbar'} fixed="top" light expand="md">
          <div className="container">
              <div className="brand">
        <NavbarBrand style={{color: 'black',fontSize:'24px',fontWeight:'700'}} href="/">Roxy<span className="logo">Professionals</span></NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem style={{padding:'5px' ,marginRight:'80px' ,fontSize:'20px'}}>
              <NavLink  href="/components/">Home</NavLink>
            </NavItem>
            <NavItem style={{padding:'5px' ,marginRight:'80px'  ,fontSize:'20px'}}>
              <NavLink href="https://github.com/reactstrap/reactstrap">Services</NavLink>
            </NavItem >
            <NavItem style={{padding:'5px' ,marginRight:'80px'  ,fontSize:'20px'}}>
              <NavLink href="https://github.com/reactstrap/reactstrap">About Us</NavLink>
            </NavItem>
            <NavItem style={{padding:'5px'  ,fontSize:'20px'}} >
              <NavLink href="https://github.com/reactstrap/reactstrap">Learn With Us</NavLink>
            </NavItem>
           
          </Nav>
          
        </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;