import React from "react";

import EachAbout from '../EachAbout';

import {Wrapper, Content, Grid} from './About.styles';

const objects = [
    {
        'header': 'Ideja',
        'text': 'Sve počinje od ideje, nakon toga planiranje projekta, crtanje, izrada te se tako dolazi do realizacije i gotovog projekta. Naša cijena uspjeha je posvećenost poslu i odlučnost.'
    },
    {
        'header': 'O izradi',
        'text': 'Namještaj je srce svakog doma, a mi ćemo vam pomoći da sav namještaj i stolarija budu funkcionalni, a uz to i da odiše stilom i elegancijom.'
    },
    {
        'header': 'Naš tim',
        'text': 'Naš tim nije samo grupa ljudi koji rade zajedno, to je grupa ljudi koji vjeruju jedni drugima i tako zajedno izvršavamo svaki zadatak na vrijeme.'
    }
]

const About = () => {
    return (
        <Wrapper id="about">
            <Content>
                <span></span>
                <h1>O nama</h1>
                    <Grid>
                    {objects.map((obj, index) => (
                        <EachAbout key={index} header={obj.header} text={obj.text} />
                    ))}
                </Grid>
            </Content>
        </Wrapper>
    );
}

export default About;