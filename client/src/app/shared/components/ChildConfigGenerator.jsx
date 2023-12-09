import styled from "styled-components"

import DeviceConfig from "./pagesForChildGenerator/DeviceConfig"
import ProfilesConfig from "./pagesForChildGenerator/ProfilesConfig"
export default function ChildConfigGenerator({settingsType}){
    return(
        <ChildConfigGeneratorWrapper>
            {settingsType  ==="profile" && <ProfilesConfig />}
            {settingsType === "device" && <DeviceConfig />}
        </ChildConfigGeneratorWrapper>
    )
}

const ChildConfigGeneratorWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 40px 100px 40px 100px;
`