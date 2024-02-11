import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    margin-top: 120px;
    position: relative;
    max-height: 100vh;
    height: 860px;
    background: url("https://xemtio.netlify.app/assets/kuhinja4-z7vsBTpO.webp");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;
        background-color: rgba(0,0,0, 0.8);
        object-fit: cover;
    }

    @media screen and (max-width: 880px) {
        background-size: 100vh;
    }
`;

export const Content = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    position: relative;
`;

export const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h1 {
        color: #fff;
        font-family: 'Trebuchet MS', serif;
        font-weight: 400;
        font-size: 95px;
        line-height: 90px;

        @media screen and (max-width: 1200px) {
            font-size: 64px;
        }

        @media screen and (max-width: 768px) {
            font-size: 48px;
        }

        @media screen and (max-width: 575px) {
            font-size: 40px;
        }
    }

    p {
        color: hsl(0, 0%, 98%);
        font-family: 'Trebuchet MS', serif;
        font-size: 20px;
        font-weight: 400;
        padding: 0 15em;
        text-align: center;

        @media screen and (max-width: 1200px) {
            font-size: 18px;
        }

        @media screen and (max-width: 968px) {
            padding: 0 9em;
        }

        @media screen and (max-width: 768px) {
            font-size: 16px;
            padding: 0 6em;
        }

        @media screen and (max-width: 575px) {
            font-size: 14px;
            padding: 0 3em;
        }

    }

    ul {
        padding: 0;
        width: fit-content;
        list-style: none;

        a {
            padding: 6px 22px;
            border: 2px solid #feb61d;
            color: #fff;
            background-color: transparent;
            text-transform: uppercase;
            font-size: 14px;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            transition: 0.2s ease;
            

            &:hover {
                background-color: #feb61d;
                color: hsl(256, 26%, 20%);
            }
        }

    }
`;