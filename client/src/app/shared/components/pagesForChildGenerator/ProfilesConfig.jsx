import InputForms from "../InputForms";
import PersonalizedButtons from "../ButtonsForms";
import styled from "styled-components";
import backgroundImage from "../../assets/img/mario.webp"

export default function ProfilesConfig() {
  return (
    <TheDiv>
      <HeaderImageHolder></HeaderImageHolder>
      <InputsContainer>
        <InputForms text="Foto de perfil" type="file" />
        <InputForms text="Esquema de cores" type="toggle" />
        <InputForms text="Usuário" type="text" placeHolder="Usado em URLs personalizadas" />
        <InputForms text="Nome no Site" type="text" />
        <InputForms text="Pronomes" type="text" placeHolder="escreva como Ele/Dele" />
        <InputForms text="Biografia" type="text" placeHolder="Descrição do perfil" />
        <InputForms text="Permitir pedidos de amizade?" type="toggle" />
        <InputForms text="Você é desenvolvedor?" type="toggle" />
        <PersonalizedButtons text="Salvar Dados" />
      </InputsContainer>
      
    </TheDiv>
  );
}

const HeaderImageHolder = styled.header`
  width: 100%;
  height: 120px;
  border-radius: 15px;
  background-color: gray;
  background-image: url(${backgroundImage});
  background-size: cover; /* Para cobrir todo o espaço do contêiner */
  background-position: center; /* Para centralizar a imagem */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TheDiv = styled.div`
  width: 1000px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: blueviolet;
`;

const InputsContainer = styled.div`
padding: 35px;
  overflow-y: auto;
  flex: 1
   /* Para que o contêiner de inputs cresça e utilize o espaço disponível */
`;
