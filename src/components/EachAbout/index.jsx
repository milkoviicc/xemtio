import React from "react";

import {Wrapper} from './EachAbout.styles';

const EachAbout = ({header,text}) => {
    return (
        <Wrapper>
            <h3>{header}</h3>
            <p>{text}</p>
        </Wrapper>
    );
}

export default EachAbout;