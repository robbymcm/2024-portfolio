import { GameContextProvider } from './components/GameContextProvider/GameContextProvider';
import GameContainer from '@components/Game/components/GameContainer/GameContainer';

export default function Game() {
    return <GameContextProvider>
        <GameContainer />
    </GameContextProvider>;
}