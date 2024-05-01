
import useGameContext from "@components/Game/hooks/useGameContext/useGameContext";
import Dropdown from "../Dropdown/Dropdown";
import { DropdownProps } from "../Dropdown/Dropdown.d";
import './GameContainer.scss';

export default function GameContainer() {
    const { gameData, gameMethods } = useGameContext();
    const { playing, sec, paused, items } = gameData;
    const { startGame, pauseGame, restartGame, } = gameMethods;

    const dropDownProps: DropdownProps = {
        id: 'game',
        title: 'Whack a button',
        items,
    };

    return <>
        <div className='game-container'>
            <div className='game-container__controls'>
                {!playing && <div className='game-container__start-button-container'>
                    <button className='game-container__start-button' type='button' onClick={startGame}>Click to start</button>
                </div>}
                <div className='game-container__control-buttons'>
                    {playing &&
                        <button
                            className='game-container__control-button'
                            type='button'
                            onClick={pauseGame}
                        >
                            {!paused ? 'Pause' : 'Resume'}</button>}
                    {playing &&
                        <button
                            className='game-container__control-button'
                            type='button'
                            onClick={restartGame}
                        >Restart</button>}
                </div>
            </div>
            <div className='game-container__seconds'>Seconds: {sec}</div>
            <div className='game'>
                <Dropdown {...dropDownProps} />
            </div>
        </div>
    </>;
}