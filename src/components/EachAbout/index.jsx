import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

import {Wrapper} from './EachAbout.styles';

const EachAbout = ({header,text}) => {
    return (
        <Wrapper data-aos="fade-up" data-aos-duration={1000}>
            <h2>{header}</h2>
            <p>{text}</p>
        </Wrapper>
    );
}

export default EachAbout;