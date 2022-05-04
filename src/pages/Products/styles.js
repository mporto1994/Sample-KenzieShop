import styled from "styled-components";

export const ProductsStyle = styled.div`
    /* display:flex; */
    width:100vw;
    height:100vh;
    overflow:scroll;
    /* overflow:visible ; */

    background-color:var(--lightGreen);
    
    div{
        /* display:flex; */
    }
`;

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    align-items:;
    justify-content:;
    .productsList{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
    }
    aside{
        background-color:var(--cream);
        display:flex;
        flex-direction:column;
        margin-top: 40px;
        text-align:center;
        border-radius:7px;
        border:2px solid #FF7096;
        
    }
    h3{
        background-color:#59B3D9;
        height:50px;
        border-radius:3px;
        display:flex;
        align-items:center;
        justify-content:center;

    }
`;