import styled from "styled-components";
import { useEffect, useState } from "react";
import PrimarySearchAppBar from "../app/shared/components/appBar";
import MicroGames from "../app/shared/components/MicroGamesLibModelPageExample";
import GameSlick from "../app/shared/components/GameSlick";
import axios from "axios";

const BuscarLibDeUsuario = async(token, userId, setUser)=>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    await axios.get(`https://3000-retr0lbb-nerd-9poa79tp0d0.ws-us106.gitpod.io/users/userFindId/${userId}`, config)
    .then((response) =>{
        setUser(prevUser => ({ ...prevUser, ...response.data.Data }));
    })
}

export default function LibPage(){
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const fetchData = async() =>{
            const token =  localStorage.getItem("Token")
            const userId =  localStorage.getItem("userId")
            await BuscarLibDeUsuario(token, userId, setUser)
        };
        fetchData();
    }, []);

    const returnThegamesThatUserHave = () => {
        let UserdataArray = [];
    
        if (user && user.lib && user.lib.games) {
          user.lib.games.forEach((game, index) => {
            if (game) {
              const MongoUri = game[0].GameImage.BannerImage.src;
              const stringSemPrefixo = MongoUri.replace(/^(\.\.\/)+/, '');
              const imageUrl = `https://3000-retr0lbb-nerd-9poa79tp0d0.ws-us106.gitpod.io/${stringSemPrefixo}`;
    
              const UserGameData = {
                name: game[0].name,
                urlImage: imageUrl,
                file: {name: game[0].name, src: game[0].GameFiles.src}
              };
    
              UserdataArray.push(UserGameData);
            }
          });
        }
    
        return UserdataArray;
      };
    
      const PrintGameList = () => {
        const games = returnThegamesThatUserHave();
    
        if (games.length > 0) {
          return games.map((game, key) => (
            <GameSlick key={key} name={game.name} src={game.urlImage} />
          ));
        }
    
        return null;
      };

      const PrintGameObject = () => {
        const games = returnThegamesThatUserHave();
      
        if (games.length > 0) {
          return games.map((game, key) => (
            <MicroGames key={key} name={game.name} src={game.urlImage} gameFiles={game.file}/>
          ));
        }
      
        return null;
      };
      const handleGameClick =(e) =>{
        console.log(e)
      }
      

    return(
        <MainWrapper>
            <PrimarySearchAppBar />
            <BodyFlex>
                <SideGamesMenu>
                    {PrintGameList()}
                </SideGamesMenu>
                <LibMainDiv>
                    {PrintGameObject()}
                </LibMainDiv>
            </BodyFlex>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
`
const LibMainDiv = styled.div`
    width: 80%;
    height: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`
const SideGamesMenu = styled.div`
    width: 20%;
    height: 100%;
    background: linear-gradient(180deg, #432F6E, #201D47);
`
const BodyFlex = styled.div`
    width: 100%;
    height: 90vh;
    gap: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(-90deg, #7209B7, #7D8CC4);
`