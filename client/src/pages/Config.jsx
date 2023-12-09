import styled from "styled-components"
import PrimarySearchAppBar from "../app/shared/components/appBar.jsx"
import NavbarConfig from "../app/shared/components/navbarConfig.jsx"
import { useState, useEffect } from "react"
import ChildConfigGenerator from "../app/shared/components/ChildConfigGenerator.jsx"
export default function ConfigurationPage(){
    const [settingsType, setSettingsType] = useState(null);
    useEffect(()=>{
        setSettingsType("profile")
    },[])
    const showSettings = (type) =>{
        setSettingsType(type)
    }
    return(
        <>
        <PrimalWrapper>
        <PrimarySearchAppBar />
        <ConfigarationWrapper>
            <NavbarConfig showSettings = {showSettings}/>
            <ChildConfigGenerator settingsType ={settingsType}/>
        </ConfigarationWrapper>
        </PrimalWrapper>
        </>
    )
}


const PrimalWrapper = styled.div`
    width: 100%;
    height: 90vh;
`

const ConfigarationWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: orange;
`