import styled from "styled-components";

export default function PersonalizedButtons({text, onClick}){
    return(
        <ButtonWrapper>
            <ButtonSalvarDados onClick={onClick ?? console.log("hey")}>{text}</ButtonSalvarDados>
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    `
const ButtonSalvarDados = styled.button`
    width: 100%;
    border: none;
    background: none;
    font-size: 32px;
    font-weight: bold;
    border-radius: 15px;
    padding: 20px;
    color: white;
    background-color: darkblue;

    &:hover{
        box-shadow: 2px 2px 10px black;
        background-color: #6586b1;
    }
`