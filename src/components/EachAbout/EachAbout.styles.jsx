import styled from "styled-components";

export const Wrapper = styled.div`

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

        @media screen and (max-width: 1300px) {
            font-size: 16px;
        }

        @media screen and (max-width: 1100px) {
            padding: 0 100px;
        }

        @media screen and (max-width: 768px) {
            padding: 0 25px;
        }

        @media screen and (max-width: 500px) {
            padding: 0;
            font-size: 16px;
        }
    }

    @media screen and (max-width: 1325px) {
        width: 80%;
    }

    @media screen and (max-width: 1100px) {
        text-align: center;
    }
`;