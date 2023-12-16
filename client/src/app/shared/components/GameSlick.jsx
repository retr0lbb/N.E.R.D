import styled from "styled-components"

export default function GameSlick({name, src}){
    return (
        <SlickWrapper>
            <SlickImg src = {src} />
            <SlickName>{name}</SlickName>

        </SlickWrapper>
    )
}

const SlickImg = styled.img`
    height: 50px;
    width: 50px;
    padding: 5px;
    border-radius: 10px;
`
const SlickName = styled.p`
    height: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
`

const SlickWrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 15px;
    border-bottom: 2px solid white;
`