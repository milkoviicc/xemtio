import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background-color: #252525;
    position: relative;
    color: #f0f0f0;
    padding-top: 100px;

    span {
        display: block;
        margin: 20px auto;
        border-top: 1px solid hsl(0, 1%, 26%);
        width: 1280px;
        
    }
`;

export const Content = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-around;
    gap: 30rem;

    h1 {
        margin: 0;
        display: block;
        width: fit-content;
        font-size: 2em;
        font-family: 'Trebuchet MS', serif;
        color: #feb61d;
    }

    @media screen and (max-width: 768px) {
        gap: 10rem;
    }
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
    height: 40px;
    width: fit-content;

    svg {
        &:hover path {
            fill: #feb61d;
            transition: 0.3s ease;
        }
    }
`;

export const MiniFooter = styled.div`
    text-align: center;
    font-size: 11px;
    color: #fff;
    background-color: #252525;
    display: flex;
    align-items: bottom;
    justify-content: center;
`;