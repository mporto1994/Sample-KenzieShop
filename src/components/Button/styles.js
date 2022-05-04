import styled from "styled-components";

export const ButtonStyle = styled.button`
    background-color:var(--darkGreen);
    border:3px solid var(--pink);
    font-weight:700;
    padding:15px;
    border-radius:5px;
    font-size:16px;
    color:var(--lightGreen);
    :hover{
        background-color:var(#1E6685);
        transition:0.3s;
        cursor:pointer;
        font-weight:750;
        color:#fbffeb;
        border:3.5px solid var(--pink);
        font-size:16.5px;
        padding:15.5px;
    }
`