import React, { useEffect } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../assets/images/icon-hammer.svg';
import img2 from '../../assets/images/icon-furniture.svg';
import img3 from '../../assets/images/icon-car.svg';

import Usluga from '../Usluga';

import {Wrapper, Content, Grid} from './Usluge.styles';

const listaUsluga = [
    {
        'img': img1,
        'header': 'Izrada namještaja',
        'text': 'Nudimo uslugu izrade namještaja po mjeri, klasičnog ili modernog izgleda, po vašem izboru.'
    },
    {
        'img': img2,
        'header': 'Montaža namještaja',
        'text': 'Nudimo uslugu montaže namještaja i ugradnje stolarije raznih proizvođača.'
    },
    {
        'img': img3,
        'header': 'Prijevoz robe',
        'text': 'Nudimo usluge prijevoza robe, selidbe...'
    }
]

const Usluge = () => {

    return (
        <Wrapper id="usluge">
            <Content data-aos="fade-up" data-aos-duration={1000}>
                <span></span>
                <h1>Naše usluge</h1>
                <Grid>
                    {listaUsluga.map((obj, index) => (
                        <Usluga key={index} img={obj.img} header={obj.header} text={obj.text}/>
                    ))}  
                </Grid>
            </Content>
        </Wrapper>
        
    );
}

export default Usluge;