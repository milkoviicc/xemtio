import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 175px 0;
    position: relative;
    background-color: #f0f0f0;
`;

export const Content = styled.div`
    max-width: 100vw;
    padding: 0 250px;
    span {
        display: block;
        width: 150px;
        border-top: 2px solid hsl(256, 26%, 20%);
        position: relative;

        @media screen and (max-width: 600px) {
            margin: 0;
        }
    }

    h1 {
        font-size: 64px;
        position: relative;
        font-family: 'Trebuchet MS', serif;
        font-weight: 700;
        color: hsl(256, 26%, 20%); 

        @media screen and (max-width: 600px) {
            padding: 0;
            font-size: 48px;
        }

        @media screen and (max-width: 425px) {
            font-size: 36px;
        }
    } 

    @media screen and (max-width: 1550px) {
        padding: 0 150px;
    }

    @media screen and (max-width: 1400px) {
        padding: 0 75px;
    }

    @media screen and (max-width: 600px) {
        padding: 0 25px;
    }


`;

export const Grid = styled.div`
    margin-top: 75px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 275px) and (max-width: 1100px) {
        place-items: center !important;
    }
`;