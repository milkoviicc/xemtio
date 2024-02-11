import React from "react";

import { Wrapper } from './Usluga.styles';

const Usluga = ({img, header, text}) => {
    return (
        <Wrapper>
            <img src={img} />
            <h3>{header}</h3>
            <p>{text}</p>
        </Wrapper>
    );
}

export default Usluga;