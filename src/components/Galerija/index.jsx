import React, {useState} from "react";

import krevet1 from '../../assets/images/krevet1.webp';
import krevet2 from '../../assets/images/krevet2.webp';
import krevet3 from '../../assets/images/krevet3.webp';
import krevet4 from '../../assets/images/krevet4.webp';
import krevet5 from '../../assets/images/krevet5.webp';
import krevet6 from '../../assets/images/krevet6.webp';

import kuhinja1 from '../../assets/images/kuhinja1.webp';
import kuhinja2 from '../../assets/images/kuhinja2.webp';
import kuhinja3 from '../../assets/images/kuhinja3.webp';
import kuhinja4 from '../../assets/images/kuhinja4.webp';
import kuhinja5 from '../../assets/images/kuhinja5.webp';
import kuhinja6 from '../../assets/images/kuhinja6.webp';

import kupaonica1 from '../../assets/images/kupaonica1.webp';
import kupaonica2 from '../../assets/images/kupaonica2.webp';
import kupaonica3 from '../../assets/images/kupaonica3.webp';
import kupaonica4 from '../../assets/images/kupaonica4.webp';
import kupaonica5 from '../../assets/images/kupaonica5.webp';
import kupaonica6 from '../../assets/images/kupaonica6.webp';

import ormar1 from '../../assets/images/ormar1.webp';
import ormar2 from '../../assets/images/ormar2.webp';
import ormar3 from '../../assets/images/ormar3.webp';
import ormar4 from '../../assets/images/ormar4.webp';
import ormar5 from '../../assets/images/ormar5.webp';
import ormar6 from '../../assets/images/ormar6.webp';

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
        <Wrapper id="galerija">
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
                        <Slika key={index} src={object.src} />
                    )))
                    }
                </Grid>
            </Content>
        </Wrapper>
    );
}

export default Galerija;