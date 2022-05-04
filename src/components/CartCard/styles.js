import styled from "styled-components";

export const CartCardStyle = styled.div`
    background-color:var(--lightGreen);
    border:2px solid #FF7096;
    width:250px;
    height:300px;
    border-radius: 10px;
    /* padding:20px; */
    margin:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding:20px;
    
    img{
        max-width:220px;
        max-height:220px;
        border-radius:7px;
        
    }
    div{
        display:flex;
        flex-direction:column;
        width:100%;
        height:100%;
        align-items:;
        justify-content:space-evenly;
        color:var(--darkGreen);
        
        font-size:18px;

    }
    .price{
        font-size:22px;
        font-weight:500;
    }
    .name{
        font-size:15px;
        font-weight:500;
    }
    button{
        /* height:; */
        /* width:; */
        padding:12px;
        font-size:15px;
        border:2px solid #FF7096;

    }
    button:hover{
        background-color:var(#1E6685);
        transition:0.3s;
        cursor:pointer;
        font-weight:750;
        color:#fbffeb;
        border:3.5px solid var(--pink);
        font-size:15.5px;
        padding:12.5px;
        
    }
`;