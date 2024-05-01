import { GameContext, GameContextType } from "@components/Game/components/GameContextProvider/GameContextProvider";
import { useContext } from "react";

export default function useGameContext() {
    const context = useContext(GameContext);

    if (context) { return context; }

    return {} as GameContextType;
}