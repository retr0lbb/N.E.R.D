import { IoMdClose } from "react-icons/io";

export default function SlideMenu(){
    return(
        <div className="h-screen fixed top-0 left-0 w-80 bg-purple-500 z-10 flex flex-col py-10">

            <div className="text-text_color text-6xl flex items-center justify-center">
                <IoMdClose />
            </div>
            <ul className="h-full flex items-start justify-evenly flex-col p-10">
                <li>Home</li>
                <li>Jogos</li>
                <li>Musicas</li>
                <li>Amigos</li>
                <li>Comunidade</li>
                <li>Configurações</li>
            </ul>
        </div>
    )
}