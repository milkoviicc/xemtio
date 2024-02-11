import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #252525;
    padding: 20px 0;
`;

export const Content = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;

    span {
        display: block;
        width: 150px;
        border-top: 2px solid #f0f0f0;
        position: relative;

        @media screen and (max-width: 1350px) {
            margin: 0 50px;
        }
    }

    h1 {
        font-size: 64px;
        position: relative;
        font-family: 'Trebuchet MS', serif;
        font-weight: 700;
        color: #f0f0f0;

        @media screen and (max-width: 1350px) {
            padding: 0 50px;
        }
    }

    select {
        display: block;
        margin: 0 auto;
        width: 350px;
        background-color: #feb61d;
        color: #000;
        padding: 8px 12px;
        font-family: 'Trebuchet MS', serif;
        font-weight: bold;
        font-size: 18px;
        border: 1px solid #feb61d;
        border-radius: 5px;

        &:focus {
            outline: none;
        }

    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

    button {
        padding: 8px 12px;
        background-color: #ab7c1b;
        font-family: 'Trebuchet MS', serif;
        color: #fff;
        outline: none;
        transition: 0.2s ease;
        
        &:hover {
            border: 1px solid hsl(256, 26%, 20%);
        }

        @media screen and (max-width: 650px) {
            width: 75%;
        }
    }

    @media screen and (max-width: 650px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        place-items: center;
        margin: 0 60px;
    }

    @media screen and (max-width: 500px) {
        margin: 0 10px;
    }
`;

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 2em;
    justify-items: center;
    align-items: center;
    padding: 50px 0;

    @media screen and (max-width: 1350px) {
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    }

    @media screen and (max-width: 500px) {
        margin: 0 -27px;
    }
`;