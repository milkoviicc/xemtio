import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 175px 0;
    position: relative;
    background-color: #f0f0f0;
`;

export const Content = styled.div`
    max-width: 100vw;
    padding: 0 200px;

    span {
        display: block;
        width: 150px;
        border-top: 2px solid hsl(256, 26%, 20%);
        position: relative;

        @media screen and (max-width: 768px) {
            margin: 0 30px;
        }
    }

    h1 {
        font-size: 64px;
        position: relative;
        font-family: 'Trebuchet MS', serif;
        font-weight: 700;
        color: hsl(256, 26%, 20%);

        @media screen and (max-width: 768px) {
            padding: 0 30px;
        }

        @media screen and (max-width: 600px) {
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

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    place-items: center;
    width: 100%;

    @media screen and (max-width: 1325px) {
        grid-gap: 3rem;
    }
    
    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;