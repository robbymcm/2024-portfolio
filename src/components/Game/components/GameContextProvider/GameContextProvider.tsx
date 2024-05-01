import { createContext, useState, useCallback } from "react";
import useGameTimer from "@components/Game/hooks/useGameTimer/useGameTimer";
import { DropdownItemProps } from "../Dropdown/Dropdown.d";

export const GameContext = createContext<GameContextType | null>(null);

export type GameContextType = {
    gameMethods: {
        startGame: () => void;
        pauseGame: () => void;
        restartGame: () => void;
        updateScore: () => void;
        createItems: () => DropdownItemProps[];
        highlightItem: (id: string) => void;
    };
    gameData: {
        sec: number;
        playing: boolean;
        paused: boolean;
        items: DropdownItemProps[];
        numberOfItems: number;
        score: number;
        // attempts: number;
    }
}



export function GameContextProvider({ children }: { children: JSX.Element; }) {
    const NUMBER_OF_ITEMS = 10;
    const [items, setItems] = useState<DropdownItemProps[]>([]);
    const [playing, setPlaying] = useState(false);
    const [paused, setPaused] = useState(false);
    const [score, setScore] = useState(0);
    const [sec, setSec] = useState(0);
    const MAX_TIME = 30;

    const timeExpired = sec > MAX_TIME - 1;

    // Start timer when playing is true
    useGameTimer({ playing, paused, timeExpired, setSec, highlightItem });

    const startGame = useCallback(() => {
        setItems(createItems(NUMBER_OF_ITEMS));
        setPlaying(true);
    }, []);

    const updateScore = useCallback(() => {
        setScore(prev => prev + 1);
    }, []);

    const pauseGame = useCallback(() => {
        setPaused(!paused);
    }, [paused]);

    const restartGame = useCallback(() => {
        setSec(0);
        setScore(0);
        setPlaying(false);
        setItems(createItems(NUMBER_OF_ITEMS));
    }, []);

    function createItems(number = 10) {
        const arr = [];
        for (let i = 0; i <= number; ++i) {
            arr.push({
                id: i.toString(),
                label: i.toString(),
                onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
                    console.log(e.currentTarget.dataset);
                },
                highlighted: false
            });
        }

        return arr;
    }


    function highlightItem(value: string) {
        const item = items.find((item) => item.id === value);

        if (item) {
            const nextItems = items.map((item) => {
                if (item.id === value) {
                    return { ...item, highlighted: true };
                }
                return { ...item, highlighted: false };
            });

            setItems(nextItems);
        }
    }

    const gameMethods = {
        startGame,
        pauseGame,
        restartGame,
        updateScore,
        createItems,
        highlightItem
    };

    const gameData = {
        sec,
        playing,
        paused,
        items,
        numberOfItems: items.length,
        score,
        // attempts
    };


    return <GameContext.Provider value={{ gameData, gameMethods, }}>
        {children}
    </GameContext.Provider>;
}