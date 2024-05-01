import { SetStateAction, useEffect } from "react";

type UseGameTimerProps = {
    playing: boolean;
    timeExpired: boolean;
    paused: boolean;
    setSec: React.Dispatch<SetStateAction<number>>;
    highlightItem: (id: string) => void;
}

const onInterval = (setSec: React.Dispatch<SetStateAction<number>>, highlightItem: (id: string) => void) => {
    setSec(prev => prev + 1);
    const index = Math.floor(Math.random() * 10) + 1;
    console.log('onInterval index: ', index);
    highlightItem(index.toString());
};

export default function useGameTimer({
    playing,
    timeExpired,
    paused,
    setSec,
    highlightItem
}: UseGameTimerProps) {

    useEffect(() => {
        const interval =
            playing &&
                !timeExpired &&
                !paused ? setInterval(() => onInterval(setSec, highlightItem), 1000) : undefined;

        return () => interval && clearInterval(interval);
    }, [playing, timeExpired, paused, setSec, highlightItem]);
}
