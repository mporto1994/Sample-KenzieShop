import styled from "styled-components";

export const ProdCardStyle = styled.div`
    background-color:var(--cream);
    border:3px solid var(--pink);
    width:400px;
    height:500px;
    border-radius: 10px;
    /* padding:20px; */
    margin:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding:20px;
    
    img{
        max-width:350px;
        max-height:350px;
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
`;