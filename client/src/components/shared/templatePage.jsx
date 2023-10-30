import Header from "./Header"
import NavBar from "./navBar"
import React from "react"


export default function TemplatePage(){

    return(
        <TemplateWrapper>
            <Header></Header>
            <ContentWrapper>
                <NavBar></NavBar>
                <p>Ola meu caro victor philllips</p>
            </ContentWrapper>
        </TemplateWrapper>
    )

}



import styled from "styled-components"


const TemplateWrapper = styled.div`
    width: 100%;
    height: 150ch;
    display: flex;
    justify-content: center;
    flex-direction: column
`;

const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`