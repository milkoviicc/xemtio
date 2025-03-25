import styled from "styled-components";

export const Wrapper = styled.div`
    width: 400px;
    padding: 10px;
    -webkit-box-shadow: 0 2px 3px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0 2px 3px 0px rgba(0,0,0,0.75);
    box-shadow: 0 2px 3px 0px rgba(0,0,0,0.75);
    border-radius: 10px;

    img {
        width: 36px;
        height: 36px;
    }

    h2 {
        margin-top: 30px;
        font-weight: 700;
        font-family: 'Karla', serif;
        font-size: 24px;
        color: hsl(256, 26%, 20%);
    }

    p {
        margin-top: 20px;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Karla', serif;
        color: hsl(0, 1%, 26%);

        @media screen and (max-width: 1100px) {
            padding-right: 200px;
        }

        @media screen and (max-width: 991px) {
            padding-right: 50px;
        }

        @media screen and (max-width: 375px) {
            padding: 0;
        }
    }

    @media screen and (max-width: 1325px) {
        width: 100%;
    }

`;

export const Icon = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: #96A9C6;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 991px) {
        margin: 0;
    }
`;