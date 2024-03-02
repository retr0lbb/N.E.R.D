import React, { useState } from "react";
import games from "./games.json";
import { Game, gameDatasContext } from "./index";

interface GameProviderProps {
    children: React.ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
    const [gameData, setGameData] = useState<Game[]>([...games]);


    return (
        <gameDatasContext.Provider value={gameData}>
            {children}
        </gameDatasContext.Provider>
    );
};
