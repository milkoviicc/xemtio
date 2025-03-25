import React, {useEffect, useState} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import krevet1 from '../../assets/images/krevet1.webp';
import krevet2 from '../../assets/images/krevet2.webp';
import krevet3 from '../../assets/images/krevet3.webp';
import krevet4 from '../../assets/images/krevet4.webp';
import krevet5 from '../../assets/images/krevet5.webp';
import krevet6 from '../../assets/images/krevet6.webp';
import krevet7 from '../../assets/images/krevet7.webp';
import krevet8 from '../../assets/images/krevet8.webp';

import kuhinja1 from '../../assets/images/kuhinja1.webp';
import kuhinja2 from '../../assets/images/kuhinja2.webp';
import kuhinja3 from '../../assets/images/kuhinja3.webp';
import kuhinja4 from '../../assets/images/kuhinja4.webp';
import kuhinja5 from '../../assets/images/kuhinja5.webp';
import kuhinja6 from '../../assets/images/kuhinja6.webp';
import kuhinja7 from '../../assets/images/kuhinja7.webp';
import kuhinja8 from '../../assets/images/kuhinja8.webp';
import kuhinja9 from '../../assets/images/kuhinja9.webp';
import kuhinja10 from '../../assets/images/kuhinja10.webp';
import kuhinja11 from '../../assets/images/kuhinja11.webp';
import kuhinja12 from '../../assets/images/kuhinja12.webp';
import kuhinja13 from '../../assets/images/kuhinja13.webp';
import kuhinja14 from '../../assets/images/kuhinja14.webp';
import kuhinja15 from '../../assets/images/kuhinja15.webp';
import kuhinja16 from '../../assets/images/kuhinja16.webp';
import kuhinja17 from '../../assets/images/kuhinja17.webp';
import kuhinja18 from '../../assets/images/kuhinja18.webp';
import kuhinja19 from '../../assets/images/kuhinja19.webp';
import kuhinja20 from '../../assets/images/kuhinja20.webp';
import kuhinja21 from '../../assets/images/kuhinja21.webp';
import kuhinja22 from '../../assets/images/kuhinja22.webp';
import kuhinja23 from '../../assets/images/kuhinja23.webp';
import kuhinja24 from '../../assets/images/kuhinja24.webp';

import kupaonica1 from '../../assets/images/kupaonica1.webp';
import kupaonica2 from '../../assets/images/kupaonica2.webp';
import kupaonica3 from '../../assets/images/kupaonica3.webp';
import kupaonica4 from '../../assets/images/kupaonica4.webp';
import kupaonica5 from '../../assets/images/kupaonica5.webp';
import kupaonica6 from '../../assets/images/kupaonica6.webp';
import kupaonica7 from '../../assets/images/kupaonica7.webp';
import kupaonica8 from '../../assets/images/kupaonica8.webp';

import ormar1 from '../../assets/images/ormar1.webp';
import ormar2 from '../../assets/images/ormar2.webp';
import ormar3 from '../../assets/images/ormar3.webp';
import ormar4 from '../../assets/images/ormar4.webp';
import ormar5 from '../../assets/images/ormar5.webp';
import ormar6 from '../../assets/images/ormar6.webp';
import ormar7 from '../../assets/images/ormar7.webp';
import ormar8 from '../../assets/images/ormar8.webp';
import ormar9 from '../../assets/images/ormar9.webp';
import ormar10 from '../../assets/images/ormar10.webp';
import ormar11 from '../../assets/images/ormar11.webp';
import ormar12 from '../../assets/images/ormar12.webp';
import ormar13 from '../../assets/images/ormar13.webp';
import ormar14 from '../../assets/images/ormar14.webp';
import ormar15 from '../../assets/images/ormar15.webp';
import ormar16 from '../../assets/images/ormar16.webp';
import ormar17 from '../../assets/images/ormar17.webp';
import ormar18 from '../../assets/images/ormar18.webp';

import predsoblje1 from '../../assets/images/predsoblje1.webp';
import predsoblje2 from '../../assets/images/predsoblje2.webp';
import predsoblje3 from '../../assets/images/predsoblje3.webp';
import predsoblje4 from '../../assets/images/predsoblje4.webp';
import predsoblje5 from '../../assets/images/predsoblje5.webp';
import predsoblje6 from '../../assets/images/predsoblje6.webp';

import {Wrapper, Content, Menu, Grid} from './Galerija.styles';

import Slika from '../Slika';

const objects = [
    {
        'src': krevet1,
        'type': 'krevet'
    },
    {
        'src': krevet2,
        'type': 'krevet'
    },
    {
        'src': krevet3,
        'type': 'krevet'
    },
    {
        'src': krevet4,
        'type': 'krevet'
    },
    {
        'src': krevet5,
        'type': 'krevet'
    },
    {
        'src': krevet6,
        'type': 'krevet'
    },
    {
        'src': krevet7,
        'type': 'krevet'
    },
    {
        'src': krevet8,
        'type': 'krevet'
    },
    {
        'src': kuhinja1,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja2,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja3,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja4,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja5,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja6,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja7,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja8,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja9,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja10,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja11,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja12,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja13,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja14,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja15,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja16,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja17,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja18,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja19,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja20,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja21,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja22,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja23,
        'type': 'kuhinja'
    },
    {
        'src': kuhinja24,
        'type': 'kuhinja'
    },
    {
        'src': kupaonica1,
        'type': 'kupaonica'
    },
    {
        'src': kupaonica2,
        'type': 'kupaonica'
    },
    {
        'src': kupaonica3,
        'type': 'kupaonica'
    },
    {
        'src': kupaonica4,
        'type': 'kupaonica'
    },
    {
        'src': kupaonica5,
        'type': 'kupaonica'
    },
    {
        'src': kupaonica6,
        'type': 'kupaonica'
    },
    {
        'src': kupaonica7,
        'type': 'kupaonica'
    },
    {
        'src': kupaonica8,
        'type': 'kupaonica'
    },
    {
        'src': ormar1,
        'type': 'ormar'
    },
    {
        'src': ormar2,
        'type': 'ormar'
    },
    {
        'src': ormar3,
        'type': 'ormar'
    },
    {
        'src': ormar4,
        'type': 'ormar'
    },
    {
        'src': ormar5,
        'type': 'ormar'
    },
    {
        'src': ormar6,
        'type': 'ormar'
    },
    {
        'src': ormar7,
        'type': 'ormar'
    },
    {
        'src': ormar8,
        'type': 'ormar'
    },
    {
        'src': ormar9,
        'type': 'ormar'
    },
    {
        'src': ormar10,
        'type': 'ormar'
    },{
        'src': ormar11,
        'type': 'ormar'
    },
    {
        'src': ormar12,
        'type': 'ormar'
    },
    {
        'src': ormar13,
        'type': 'ormar'
    },
    {
        'src': ormar14,
        'type': 'ormar'
    },
    {
        'src': ormar15,
        'type': 'ormar'
    },
    {
        'src': ormar16,
        'type': 'ormar'
    },
    {
        'src': ormar17,
        'type': 'ormar'
    },
    {
        'src': ormar18,
        'type': 'ormar'
    },
    {
        'src': predsoblje1,
        'type': 'predsoblje'
    },
    {
        'src': predsoblje2,
        'type': 'predsoblje'
    },
    {
        'src': predsoblje3,
        'type': 'predsoblje'
    },
    {
        'src': predsoblje4,
        'type': 'predsoblje'
    },
    {
        'src': predsoblje5,
        'type': 'predsoblje'
    },
    {
        'src': predsoblje6,
        'type': 'predsoblje'
    },
]

const Galerija = () => {
    const [state, setState] = useState('ormar');

    const handleOption = (event) => {
        setState(event.target.value);
    }




    return (
        <Wrapper id="galerija" data-aos="fade-up" data-aos-duration={1500}>
            <Content>
                <span></span>
                <h1>Slike</h1>
                {
                    window.innerWidth > 768
                    ?                
                    (
                    <Menu>
                        <button onClick={() => setState('kuhinja')}>Kuhinje</button>
                        <button onClick={() => setState('ormar')}>Ormari</button>
                        <button onClick={() => setState('predsoblje')}>Predsoblja</button>
                        <button onClick={() => setState('krevet')}>Kreveti</button>
                        <button onClick={() => setState('kupaonica')}>Kupaonice</button>
                    </Menu>
                    )
                    :
                    (
                        <select onChange={handleOption} value={state}>
                            <option value="kuhinja">Kuhinje</option>
                            <option value="ormar">Ormari</option>
                            <option value="predsoblje">Predsoblja</option>
                            <option value="krevet">Kreveti</option>
                            <option value="kupaonica">Kupaonice</option>
                        </select>
                    )
                }


                <Grid>
                    {
                    (objects.filter(obj => obj.type === state).map((object, index) => (
                        <Slika key={index} src={object.src} data-aos="slide-up" data-aos-duration={5000} />
                    )))
                    }
                </Grid>
            </Content>
        </Wrapper>
    );
}

export default Galerija;