import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #f0f0f0;
    position: relative;
    padding: 50px 0;
`;

export const Content = styled.div`
    max-width: 100vw;
    padding: 0 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
        display: block;
        width: 150px;
        border-top: 2px solid hsl(256, 26%, 20%);
        position: relative;
        margin: 0;

        @media screen and (max-width: 991px) {
            margin: 0 80px;
        }

        @media screen and (max-width: 768px) {
            margin: 0 50px;
        }

        @media screen and (max-width: 425px) {
            margin: 0 30px;
        }
    }

    h1 {
        font-size: 64px;
        position: relative;
        font-family: 'Trebuchet MS', serif;
        font-weight: 700;
        color: hsl(256, 26%, 20%);

        @media screen and (max-width: 991px) {
            padding: 0 80px;
        }

        @media screen and (max-width: 768px) {
            padding: 0 50px;
        }

        @media screen and (max-width: 425px) {
            padding: 0 30px;
        }
    }

    @media screen and (max-width: 1550px) {
        padding: 0 150px;
    }

    @media screen and (max-width: 1400px) {
        padding: 0 75px;
    }

    @media screen and (max-width: 991px) {
        padding: 0;
    }
`;

export const Grid = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    text-align: center;
    padding: 100px 0;

    @media screen and (max-width: 991px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
        place-items: center;
        width: 100vw;
    }
`;

export const Each = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    p { 
        margin-top: 20px;
        padding-right: 20px;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Karla', serif;
        color: hsl(0, 1%, 26%);
    }

    a {
        color: hsl(0, 1%, 26%);
        font-weight: 400;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        padding: 0 10px;
        transition: 0.2s ease;
        font-size: 14px;
        cursor: pointer;
        
        &:hover {
            text-decoration: underline;
        }
    }

    iframe {
        width: 400px;
        height: 250px;
        
        @media screen and (max-width: 1350px) {
            width: 100%;
        }
    }

    @media screen and (max-width: 1350px) {
        width: 85%;
    }

    @media screen and (max-width: 991px) {
        text-align: left;
    }

    @media screen and (min-width: 991px) {
        place-items: center;
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
    margin: 0 auto;

    @media screen and (max-width: 991px) {
        margin: 0;
    }
`;

export const Phone = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;

    @media screen and (max-width: 1100px) {
        margin: 0 auto;
    }

    @media screen and (max-width: 991px) {
        margin: 0;
    }
`;

export const Whatsapp = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;

    @media screen and (max-width: 1100px) {
        margin: 0 auto;
    }

    @media screen and (max-width: 991px) {
        margin: 0;
    }
`;

export const Gmail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;

    @media screen and (max-width: 1100px) {
        margin: 0 auto;
    }

    @media screen and (max-width: 991px) {
        margin: 0;
    }
`;



