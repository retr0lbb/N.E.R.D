import { Box, Divider,  } from "@mui/material";
import { Container } from "../../shared/components/Container/Container";
import PrimarySearchAppBar from "../../shared/components/appBar";
import style from "./gamedetail.module.css"
import redlogo from "../../shared/assets/img/red.jpg"
import learnmore from "../../shared/components/lermais";
import CustomizedAccordions from "../../shared/components/lermais";

export default function GameDetail() {
    return(
        <Box sx={{
            width: '100vw',
            background: 'linear-gradient(to right, #330057, #2A018C, #941DE8)',
          }}>
            <PrimarySearchAppBar />
          
            <Container >
              <div className={style.topwindow}>
                <img src={redlogo} alt="erro" />
                <div className={style.list}>
                    <h2>gamename</h2>
                    <h3>preço</h3>
                    <button className={style.botao}>+Carrinho</button>
                    <button className={style.botao}>Favoritar</button>
                    <button className={style.botao}>Compartilhar</button>
                    <button className={style.botao}>Bloquear</button>
                    <button className={style.botao}>Denunciar</button>
                </div>
              </div>
            
                <CustomizedAccordions/>
    
            
              <div className={style.bottomwindow}>
                <div className={style.topo}>
                  <h2>Informações adicionais:</h2> 
                </div>
                <div className={style.esquerda}>
                  <h4>Data de Lançamento:</h4>
                  <h4>Desenvolvedora</h4>
                  <h4>Conquistas:</h4>
                  <h4>Idiomas Disponiveis:</h4>
                </div>
                <div className={style.direita}>
                  <h4>Requisitos do Sistema:</h4>
                  <h4>Minimo:</h4>
          
                  <h4>Recomendado:</h4>
                  
                </div>
              </div>
            
            </Container>
         
          </Box> 
    );
}