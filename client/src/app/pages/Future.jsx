import styled from "styled-components"
import plc from "../../../static/plc.jpeg"



export default function Future(){
    return(
        <AllImage>
            <ImgGG src={plc}/>

        </AllImage>
    )
}
const ImgGG = styled.img`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const AllImage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`