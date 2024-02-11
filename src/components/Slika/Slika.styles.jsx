import styled from "styled-components";

export const NewImage = styled.img`
    width: 100%;
    height: 300px;
    transition: 0.2s ease;
    object-fit: cover;
    border-radius: 7px;

    &:hover {
        opacity: 0.7;
    }

    @media screen and (max-width: 1350px) {
        width: 85%;
        height: 500px;
    }

    @media screen and (max-width: 768px) {
        width: 75%;
        height: 400px;
    }
`;