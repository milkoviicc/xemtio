import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 175px 0;
    position: relative;
    background-color: #f0f0f0;
`;

export const Content = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;

    span {
        display: block;
        width: 150px;
        border-top: 2px solid hsl(256, 26%, 20%);
        position: relative;
    }

    h1 {
        font-size: 64px;
        position: relative;
        font-family: 'Trebuchet MS', serif;
        font-weight: 700;
        color: hsl(256, 26%, 20%);
    }

    @media screen and (max-width: 1350px) {
        padding: 0 50px;
    }
`;

export const Grid = styled.div`
    margin-top: 50;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;

    @media screen and (max-width: 1325px) {
        grid-gap: .5rem;
    }
    
    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;