import axios from 'axios';

const getAllGameImagesAndData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/games');
    const gameArray = response.data.data;
    console.log(gameArray);
    return gameArray;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

export default getAllGameImagesAndData;
