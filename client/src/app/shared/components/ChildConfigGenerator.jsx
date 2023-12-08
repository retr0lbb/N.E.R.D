import styled from "styled-components"

import DeviceConfig from "./pagesForChildGenerator/DeviceConfig"
import ProfilesConfig from "./pagesForChildGenerator/ProfilesConfig"
export default function ChildConfigGenerator({settingstype}){
    return(
        <ChildConfigGeneratorWrapper>
            {settingstype ==="profile" && <ProfilesConfig />}
            <button onClick={() => console.log(settingstype)}>test</button>
        </ChildConfigGeneratorWrapper>
    )
}

const ChildConfigGeneratorWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;
    padding: 40px 100px 40px 100px;
`