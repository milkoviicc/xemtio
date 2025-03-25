import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

import { Wrapper, Icon } from './Usluga.styles';

const Usluga = ({img, header, text}) => {
    return (
        <Wrapper data-aos="fade-up" data-aos-duration={2000}>
            <Icon>
                <img src={img} alt="Slika za uslugu" />
            </Icon>
            <h2>{header}</h2>
            <p>{text}</p>
        </Wrapper>
    );
}

export default Usluga;