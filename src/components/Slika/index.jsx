import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

import { NewImage } from "./Slika.styles";


const Slika = ({src}) => {
    return (
        <NewImage src={src} alt="Slika našeg rada" data-aos="slide-up" data-aos-duration={1000} />
    );
}

export default Slika;