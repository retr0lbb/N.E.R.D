import styled from "styled-components"

export default function MicroGames(props){
    return(
        <GameWrapper>{props.name}</GameWrapper>
    )
}

const GameWrapper = styled.div`
    width: 400px;
    height: 225px;
    border-radius: 20px;
    border: 1px solid black;
`