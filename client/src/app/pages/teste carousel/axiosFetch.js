import axios from 'axios';

const getAllGameImagesAndData = async () => {
  try {
    const response = await axios.get('https://3000-retr0lbb-nerd-9poa79tp0d0.ws-us106.gitpod.io/games');
    const gameArray = response.data.data;
    console.log(gameArray);
    return gameArray;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

export default getAllGameImagesAndData;
