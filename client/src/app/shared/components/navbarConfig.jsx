import styled from "styled-components"

export default function NavbarConfig({showSettings}){
    return (
        <NavWrapper>
            <ListStyle>
                <ULLIStyled><ButtonsConfig onClick={() => showSettings("profile")}>perfil</ButtonsConfig></ULLIStyled>
                <ULLIStyled><ButtonsConfig onClick={() => showSettings("device")}>dispositivo</ButtonsConfig></ULLIStyled>
            </ListStyle>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
    width: 25vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: purple;
`
const ListStyle = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 10px;
    align-items: center;
    justify-content: space-evenly;
`
const ULLIStyled = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ButtonsConfig = styled.button`
    border: none;
`