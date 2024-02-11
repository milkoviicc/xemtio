import React from "react";
import { Wrapper, Content, LeftSide } from "./Hero.styles";

import {HashLink as Link} from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

const Hero = () => {
    return (
        <BrowserRouter>
                <Wrapper id="home">
            <Content>
                <LeftSide>
                    <h1>NAMJEŠTAJ PO MJERI</h1>
                    <p>Ukoliko vam fali neki dio namještaja ili želite promjeniti ugođaj u vašem domu, kontaktirajte nas i mi ćemo vam u što kraćem roku odgovoriti i ugovoriti posao.</p>
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