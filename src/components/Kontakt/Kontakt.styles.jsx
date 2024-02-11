import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px 0;
    background-color: #f0f0f0;
    position: relative;
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

        @media screen and (max-width: 1200px) {
            margin: 0 50px;
        }

        @media screen and (max-width: 991px) {
            margin: 0 100px;
        }

        @media screen and (max-width: 700px) {
            margin: 0 75px;
        }

        @media screen and (max-width: 650px) {
            margin: 0 50px;
        }
    }

    h1 {
        font-size: 64px;
        position: relative;
        font-family: 'Trebuchet MS', serif;
        font-weight: 700;
        color: hsl(256, 26%, 20%);

        @media screen and (max-width: 1200px) {
            padding: 0 50px;
        }

        @media screen and (max-width: 991px) {
            padding: 0 100px;
        }

        @media screen and (max-width: 700px) {
            padding: 0 75px;
        }

        @media screen and (max-width: 650px) {
            padding: 0 50px;
        }
    }

    @media screen and (max-width: 1350px) {
        width: 100vw;
        padding: 0 100px;
    }

    @media screen and (max-width: 1200px) {
        padding: 0;
    }
`;

export const Grid = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;

    @media screen and (max-width: 1350px) {
        width: 1100px;
        grid-gap: .5rem;
        justify-items: center;
    }

    @media screen and (max-width: 1200px) {
        width: 1000px;
        padding: 0 75px;
    }

    @media screen and (max-width: 1100px) {
        width: 900px;
        padding: 0 40px;
    }

    @media screen and (max-width: 991px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
    }

    @media screen and (max-width: 700px) {
        padding: 0;
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

        @media screen and (max-width: 991px) {
            width: 70%;
        }

        @media screen and (max-width: 768px) {
            width: 65%;
        }

        @media screen and (max-width: 575px) {
            width: 45%;
        }
    }

    @media screen and (max-width: 1350px) {
        width: 85%;
    }

    @media screen and (max-width: 991px) {
        text-align: left;
    }

    @media screen and (max-width: 650px) {
        position: relative;
        top: 0;
        left: -25px;
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



