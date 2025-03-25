import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 120px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #252525;
    box-shadow: 0 4px 5px 0 rgba(0,0,0, 0.75);
    z-index: 999;
`;

export const Content = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 120px;
    margin: 0 auto;

    img {
        float: left;
        cursor: pointer;

        @media screen and (max-width: 1350px) {
            padding: 0 100px;
        }

        @media screen and (max-width: 968px) {
            padding: 0 50px;
        }

        @media screen and (max-width: 500px) {
            width: 140px;
            height: 100px;
        }

        @media screen and (max-width: 375px) {
            margin: 0 -30px;
        }

        @media screen and (max-width: 325px) {
            width: 100px;
            height: 80px;
            margin: 15px -30px;
        }
    }
`;

export const Menu = styled.ul`
    float: right;
    list-style: none;
    font-family: 'Trebuchet MS', serif;

    li {
        display: inline-block;
        line-height: 80px;
        margin: 0 5px;
        text-transform: uppercase;
    }

    a {
        color: #f0f0f0;
        font-size: 20px;
        transition: 0.3s ease;

        &:hover {
           color: #feb61d;
        }
    }

    
    @media screen and (max-width: 1350px) {
        padding: 0 100px;
    }

    @media screen and (max-width: 968px) {
        padding: 0 50px;
    }
`;

export const MobileMenu = styled.div`
    display: flex;
    float: right;
    padding: 40px 100px;

    svg {
        width: 32px;
        height: 32px;
        cursor: pointer;

        path {
            fill: #f0f0f0;
        }

        &:hover path {
            fill: #aaa;
            transition: all 0.3s ease;
        }
    }

    button {
        background-color: transparent;
    }

    @media screen and (max-width: 768px) {
        padding: 30px 50px;
    }

    @media screen and (max-width: 425px) {
        padding: 30px 10px;
    }

`;

export const MenuActive = styled.ul`
    display: inline-block;
    text-align: center;
    margin: 0 auto;
    background-color: #252525;
    width: 100%;
    height: 50px;
    transition: 0.3s ease;
    font-family: 'Karla', serif;
    padding: 0;

    li {
        display: inline-block;
        margin: 0 15px;
        text-transform: uppercase;
        height: 100%;

        a {
            display: flex;
            margin: 10px 0;
            color: #f0f0f0;
            font-size: 20px;
            transition: 0.3s ease;
            font-family: 'Trebuchet MS', serif;

            @media screen and (max-width: 500px) {
                font-size: 14px;
            }

            &:hover {
                color: #feb61d;
            }
        }

        @media screen and (max-width: 375px) {
            margin: 0 7px;
        }
    }

`;