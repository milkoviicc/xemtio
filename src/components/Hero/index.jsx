import React, { useEffect } from "react";
import { Wrapper, Content, LeftSide, TextAnimate } from "./Hero.styles";

import {HashLink as Link} from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

import Aos from "aos";
import 'aos/dist/aos.css';

const Hero = () => {

    useEffect(() => {
        Aos.init(300);
    }, [])
    return (
        <BrowserRouter>
            <Wrapper id="home" data-aos="fade" data-aos-duration={2000}>
                <Content>
                    <LeftSide>
                        <TextAnimate>
                            <h1>NAMJEŠTAJ PO MJERI</h1>
                        </TextAnimate>
                        
                        <p>Ukoliko vam treba novi dio namještaja ili jednostavno želite promijeniti ugođaj u vašem domu, a ne znate kako, kontaktirajte nas.</p>
                        <h2>Vaše želje naša su misija</h2>
                        <ul>
                            <li><Link to="#kontakt" smooth>KONTAKTIRAJTE NAS</Link></li>
                        </ul>
                    </LeftSide>
                </Content>
            </Wrapper>
        </BrowserRouter>

    );
}

export default Hero;