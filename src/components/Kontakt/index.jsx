import React from "react";

import img1 from '../../assets/images/icons/phone.svg';
import img2 from '../../assets/images/icons/envelope.svg';
import img3 from '../../assets/images/icons/location-dot.svg';

import whatsapp from '../../assets/images/icons/whatsapp.svg';
import gmail from '../../assets/images/icons/envelope.svg';

import {Wrapper, Content, Grid, Each, Icon, Phone, Whatsapp, Gmail} from './Kontakt.styles';

const Kontakt = () => {
    return (
        <Wrapper id="kontakt">
            <Content>
                <span></span>
                <h1>Kontakt</h1>
                <Grid>
                    <Each>
                        <Icon>
                            <img src={img1} alt="phone svg" width="24" height="24" />
                        </Icon>
                        <p>Kontaktirajte nas putem mobitela.</p>
                        <Phone>
                            <img src={img1} alt="phone svg" type="image/svg+xml" width="24" height="24" />
                            <a href="tel:+3810921829070">+385 092 182 9070</a>
                        </Phone>
                        <Whatsapp>
                            <img src={whatsapp} alt="phone svg" type="image/svg+xml" width="24" height="24" />
                            <a href="https://wa.me/+3810921829070">+385 092 182 9070</a>  
                        </Whatsapp>
                    </Each>

                    <Each>
                        <Icon>
                            <img src={img2} alt="email svg" width="24" height="24" />
                        </Icon>
                        <p>Pošaljite nam poruku putem gmaila.</p>
                        <Gmail>
                            <img src={gmail} alt="email svg" type="image/svg+xml" width="24" height="24" />
                            <a href="mailto:#">xemtiocontact@gmail.com</a>
                        </Gmail>
                    </Each>

                    <Each>
                        <Icon>
                            <img src={img3} alt="location svg" width="24" height="24"/>
                        </Icon>
                        <p>Pronađite nas uživo na našoj lokaciji.</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183.61246592316357!2d18.2179038389878!3d42.58077894347872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c0d990c74e155%3A0xb85e70c677603ceb!2sKneza%20Domagoja%207%2C%2020210%2C%20Cavtat!5e0!3m2!1sen!2shr!4v1704988557779!5m2!1sen!2shr" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokacija na google mapsu"></iframe>
                    </Each>
                </Grid>
            </Content>
        </Wrapper>
    );
}

export default Kontakt;