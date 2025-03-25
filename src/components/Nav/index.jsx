import React, {useState, useRef} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import {Wrapper, Content, Menu, MobileMenu, MenuActive} from './Nav.styles';

import { BrowserRouter } from "react-router-dom";
import {HashLink as Link } from "react-router-hash-link";

import logo from '../../assets/images/logo.png';

const Nav = () => {
    const [active, setActive] = useState(false);


    return (
        <BrowserRouter>
            <Wrapper>
                <Content>
                    <Link to="#home" smooth><img src={logo} width="160px" alt="Home"/></Link>

                    {window.innerWidth > 768
                    ? 
                    (
                    <Menu>
                        <li><Link to="#usluge" smooth>Usluge</Link></li>
                        <li><Link to="#galerija" smooth>Galerija</Link></li>
                        <li><Link to="#about" smooth>O nama</Link></li>
                        <li><Link to="#kontakt" smooth>Kontakt</Link></li>
                    </Menu>
                    )
                    :
                    (
                    <MobileMenu>
                        <button aria-label="Menu Button" onClick={() => {active ? setActive(false) : setActive(true)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>

                    </MobileMenu>
                    )
                    }
                    
                    {
                        active === true 
                        ? (<MenuActive><li><Link to="#usluge" smooth onClick={() => {setActive(false)}}>Usluge</Link></li><li><Link to="#galerija" smooth onClick={() => {setActive(false)}}>Galerija</Link></li><li><Link to="#about" smooth onClick={() => {setActive(false)}}>O nama</Link></li><li><Link to="#kontakt" smooth onClick={() => {setActive(false)}}>Kontakt</Link></li></MenuActive>)
                        : null
                        }
                
                </Content>
            </Wrapper>
        </BrowserRouter>
    );
}

export default Nav;