import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  IconButton,
  Link,
  Modal,
  Typography,
} from "@mui/material";
import axios from "axios"
import React, { useState, useEffect } from "react";
import red from "../shared/assets/img/red.jpg";
import { useModal } from "../shared/components/ModalProvider";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

export default function GameCart({ cartItems, removeItem, handlePayment, userTopay}) {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [game, SetGame] = useState(null)
  useEffect(()=>{
    if(cartItems){
      const fetchData = async()=>{
        const stringconnection = `https://3000-retr0lbb-nerd-9poa79tp0d0.ws-us106.gitpod.io/games/findId/${cartItems[0]}`
        await axios.post(stringconnection)
        .then(response=>{console.log(response)
          const gameData = response.data.Data;
          SetGame(gameData)
        })

      }

      fetchData()
    }else{
      console.log("marrom")
    }
  }, [cartItems])

  const generateCart = ()=>{
    

    const httpEndpoint = "https://3000-retr0lbb-nerd-9poa79tp0d0.ws-us106.gitpod.io/pay"
    const variables = {
      userId: userTopay,
      products: cartItems
    }
    axios.post(httpEndpoint, variables)
    .then((response)=>{
      const toHttp = response.data.url;
      window.location.href = toHttp
    })

    if(cartItems.length > 0){
      cartItems.map((item, index)=>{
        console.log(item)
      })
    }
  }
  const generateBody =() =>{

    if(game){

      const imgString = game.GameImage.BannerImage.src;
      const stringSemPrefixo = imgString.replace(/^(\.\.\/)+/, "");
      const GameImgSrc = `https://3000-retr0lbb-nerd-9poa79tp0d0.ws-us106.gitpod.io/${stringSemPrefixo}`;

      return(
        <Box
        marginBottom={5}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          bgcolor: "#3F059E",
          height: "200px",
          width: "900px",
        }}
      >
        <img
          src={GameImgSrc}
          alt="hello"
          style={{
            maxWidth: "300px",
            marginRight: "10px",
            marginLeft: "20px",
          }}
        />
        <Box>
          <Typography variant="h6">
            {game.name}
          </Typography>
          <Typography variant="subtitle1">Preço: R$ {game.price}</Typography>
          <Button onClick={() => {
            SetGame("")
            cartItems = ""
            console.log("o que era do carrinho", cartItems)
          }  
            } variant="outlined" color="secondary">
            remover
          </Button>
        </Box>
      </Box>
  
      )
    }
    

  }

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAgreeToTerms = () => {
    setAgreedToTerms(!agreedToTerms);
  };

  const handlePaymentAndClose = () => {
    if (agreedToTerms && cartItems !="") {
      console.log(cartItems)
      generateCart()
    } else {
      alert(
        "Você deve concordar com os termos para prosseguir com o pagamento. e adicionar um jogo ao se carrinho"
      );
    }
  };

  return (
    <Box>
      <IconButton
        onClick={openModal}
        sx={{ ":hover": { backgroundColor: "transparent" } }}
        size="small"
        edge="end"
      >
        <ShoppingCart fontSize="large" />
      </IconButton>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "95vw",
            bgcolor: "linear-gradient(to right, #330057, #2A018C, #941DE8)",
            p: 4,
          }}
        >
          <Card>
            <CardContent
              sx={{
                background:
                  "linear-gradient(to right, #330057, #2A018C, #941DE8)",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Carrinho de Compras
              </Typography>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Box>
                  {" "}
                  {/* box das imagens do jogo e tals */}
                  
                  
                 {generateBody()}
                </Box>
                <Box
                  sx={{
                    minHeight: "100vh",
                    marginLeft: 5,
                  }}
                >
                  Termos e Condições Por favor, leia atentamente os seguintes
                  termos e condições antes de adquirir e fazer o download do/s
                  jogos.
                  <br />
                  1. Licença de Uso
                  <br />
                  1.1 Ao adquirir o jogo digital "Exemplo de Jogo", você recebe
                  uma licença limitada, não exclusiva e não transferível para
                  usar o jogo apenas para fins pessoais e não comerciais. Você
                  não adquire propriedade do jogo.
                  <br />
                  2. Preço e Pagamento
                  <br />
                  2.1 O preço do jogo é estabelecido pela loja ou plataforma
                  onde a compra é realizada.
                  <br />
                  2.2 O pagamento deve ser efetuado de acordo com os métodos de
                  pagamento disponibilizados pela loja ou plataforma.
                  <br />
                  3. Requisitos de Sistema
                  <br />
                  3.1 O jogo requer um sistema compatível com as especificações
                  mínimas e recomendadas fornecidas pelo desenvolvedor. É
                  responsabilidade do comprador garantir que seu sistema atenda
                  a esses requisitos.
                  <br />
                  4. Downloads e Atualizações
                  <br />
                  4.1 O jogo estará disponível para download após a conclusão da
                  compra.
                  <br />
                  LER MAIS
                  <Box sx={{ marginTop: 5 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={agreedToTerms}
                          onChange={handleAgreeToTerms}
                        />
                      }
                      label="Eu concordo com os termos e condições."
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: 2, width: "300px", ml: 2, mb: 3 }}
                      onClick={handlePaymentAndClose}
                    >
                      Pagar
                    </Button>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </Box>
  );
}
