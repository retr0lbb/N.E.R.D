import axios from "axios";

const webUrl = "https://3000-retr0lbb-nerd-9poa79tp0d0.ws-us107.gitpod.io"
const localUrl = "http://localhost:3000/games/"


    const getData = async(url) =>{
        let gamesData;
        if(gamesData){
            return gamesData
        }
        try {
            const response = await axios.get(`${url}`)
            const gamesData = response.data.data
            return gamesData;
        } catch (error) {
            if(error){
                console.log(error)
                return null;
            }
        }
    }
export default getData(localUrl);

