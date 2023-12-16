import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Container } from "../../shared/components/Container/Container";
import PrimarySearchAppBar from "../../shared/components/appBar";
import style from "./gamedetail.module.css";
import CustomizedAccordions from "../../shared/components/lermais";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);


  

  const addToCart = (gameId) => {
    if(!game){
      return
    }

    const httpEndpoint = "https://3000-retr0lbb-nerd-9poa79tp0d0.ws-us106.gitpod.io/pay"
    const variables = {
      userId: localStorage.getItem("userId"),
      products: new Array(game._id)
    }
    axios.post(httpEndpoint, variables)
    .then((response)=>{
      const toHttp = response.data.url;
      window.location.href = toHttp
    })
  };

  useEffect(() => {
    const axiosFetch = async () => {
      if (!id) {
        return;
      }
      await axios
        .post(`https://3000-retr0lbb-nerd-9poa79tp0d0.ws-us106.gitpod.io/games/findId/${id}`)
        .then((response) => {
          const gams = response.data.Data;
          setGame(gams);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    axiosFetch();
  }, [id]);

  const returnGameMapping = (game) => {
    if (!game) {
      return null;
    }

    const imgString = game.GameImage.BannerImage.src;
    const stringSemPrefixo = imgString.replace(/^(\.\.\/)+/, "");
    const GameImgSrc = `https://3000-retr0lbb-nerd-9poa79tp0d0.ws-us106.gitpod.io/${stringSemPrefixo}`;

    return (
      <Container>
        <div className={style.topwindow}>
          <img src={GameImgSrc} alt="erro" />
          <div className={style.list}>
            <h2>{game.name}</h2>
            <h3>preço: R${game.price}</h3>
            <button onClick={() => addToCart(game._id)} className={style.botao}>
              Comprar
            </button>
            <button className={style.botao}>Favoritar</button>
            <button className={style.botao}>Compartilhar</button>
            <button className={style.botao}>Bloquear</button>
            <button className={style.botao}>Denunciar</button>
          </div>
        </div>

        <CustomizedAccordions description={game.description} />

        <div className={style.bottomwindow}>
          <div className={style.topo}>
            <h2>Informações adicionais:</h2>
          </div>
          <div className={style.esquerda}>
            <h4>Data de Lançamento: <br /> Não Há dados</h4>
            <h4>Desenvolvedora: <br /> {game.developer}</h4>
            <h4>Conquistas: <br /> {game.achievements.length}</h4>
            <h4>Idiomas Disponíveis: <br /> Português Brasil</h4>
          </div>
          <div className={style.direita}>
            <h4>Requisitos do Sistema: <br /> Não há dados</h4>
            <h4>Minimo: <br /> Não há dados</h4>
            <h4>Recomendado: <br /> Não há dados</h4>
          </div>
        </div>
      </Container>
    );
  };

  return (
    <Box
      sx={{
        width: "100vw",
        background: "linear-gradient(to right, #330057, #2A018C, #941DE8)",
      }}
    >
      <PrimarySearchAppBar />

      {returnGameMapping(game)}
    </Box>
  );
}
