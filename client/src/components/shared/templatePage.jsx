import Header from "./Header"
import NavBar from "./navBar"
import React from "react"


export default function TemplatePage(){

    return(
        <TemplateWrapper>
            <Header></Header>
            <NavBar></NavBar>
            <ContentWrapper>dasdasd
                <BorderDiv>
                    <p>aodaoldoasldoadl</p>
                </BorderDiv>
            </ContentWrapper>
        </TemplateWrapper>
    )

}



import styled from "styled-components"


const TemplateWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding-left: 5vw;
    padding-top: 2vh
`

const BorderDiv = styled.div`
    width:100%;
    height: 300vh;
    margin: 50px;
    border: 1px solid black;
    background-color: red;
`

