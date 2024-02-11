import React from "react";

import { NewImage } from "./Slika.styles";


const Slika = ({src}) => {
    return (
        <NewImage src={src} />
    );
}

export default Slika;