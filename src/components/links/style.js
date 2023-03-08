import styled from "styled-components";


export const StyleLinks = styled.a`
    color: var(--azul);
    padding: 10px 25px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    display: block;
    background: var(--verde);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    text-decoration: none;
    transition: .2s ease-in-out;

    :hover{
        background: var(--white);
        box-shadow: 0 0px 15px var(--white);
        transform: translateX(.5px) scale(1.05);
    }

`