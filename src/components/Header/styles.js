import styled from "styled-components";


export const HeaderStyle = styled.div`


header{
    background-color:var(--cream);
    color:var(--darkGreen);
    font-size:20px;
    display:flex;
    width: 100vw;
    height:50px;
    padding:40px 20px 30px 40px;
    justify-content: space-between;
    align-items: center;
}
    div{
        display:flex;
    }
    button{
        border:none;
        background-color:var(--cream);
        color:var(--pink);
        padding:10px;
        font-size:16px;
        font-weight:700;
    }
    button:hover{
        background-color:var(--lightGreen);
        transition:1s;
        cursor:pointer;
        border-radius:2px;
        font-weight:900;
        color:var(#F50041)
    }

`;