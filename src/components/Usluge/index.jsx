import React from "react";

import img1 from '../../assets/images/icon-snappy-process.svg';
import img2 from '../../assets/images/icon-affordable-prices.svg';
import img3 from '../../assets/images/icon-people-first.svg';

import Usluga from '../Usluga';

import {Wrapper, Content, Grid} from './Usluge.styles';

const listaUsluga = [
    {
        'img': img1,
        'header': 'Izrada namještaja',
        'text': 'Nudimo uslugu izrade namještaja po mjeri, klasičnog ili modernog izgleda, po vašem izboru'
    },
    {
        'img': img2,
        'header': 'Montaža namještaja',
        'text': 'Nudimo uslugu montaže namještaja i ugradnje stolarije raznih proizvođača ili našeg rada.'
    },
    {
        'img': img3,
        'header': 'Prijevoz robe',
        'text': 'Ukoliko vam samo treba gotov namještaj, a sami ćete ga ugraditi, možete naručiti i u što kraćem roku ćete dobit gotov rad.'
    }
]

const Usluge = () => {
    return (
        <Wrapper id="usluge">
            <Content>
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