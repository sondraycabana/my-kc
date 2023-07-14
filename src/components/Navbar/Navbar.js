import React,{useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import { Button } from '../../globalStyles';
import Logo from '../../../src/images/Kct-logo2.png'
import {Nav, NavbarContainer, NavLogo,
  NavIcon,
  MobileIcon, 
  NavItem, 
  NavMenu,
  NavLinks,

NavBtnLink,
NavItemBtn} from './Navbar.elements'
import { IconContext } from 'react-icons/lib';
const Navbar = () => {
const [click, setClick] = useState(false)
const [button, setButton] = useState(true)

const handleClick = () => setClick(!click)

const showButton = () => {
  if(window.innerWidth <= 960){
    setButton(false)
  }else {
    setButton(true)
   }
}

useEffect(() => {
  showButton()
}, []);

window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
      <Nav >
          <NavbarContainer>
            <NavLogo to="/">
            <img src={Logo} height={40} />
              
              
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
              <NavMenu onClick={handleClick} click={click}>
                  <NavItem>
                      <NavLinks to='/'>
                            Home
                      </NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to='/services'>
                            Service
                      </NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to='/products'>
                            Contact 
                      </NavLinks>
                  </NavItem>
                    <NavItemBtn>
                      {button ? ( <NavBtnLink to="/products">
                        <Button primary>Sign Up</Button></NavBtnLink> ):
                        <NavBtnLink to="/products"><Button  fontBig primary>sign-up</Button>
                        </NavBtnLink>
                        }
                    </NavItemBtn>
              </NavMenu>
          </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;