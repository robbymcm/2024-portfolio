import { useState, useEffect } from 'react';

function defaultCallback(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;
    const _position = `X: ${x}<br>Y: ${y}`;

    const infoElement = document.getElementById('info') as HTMLElement;
    infoElement.innerHTML = _position;
    infoElement.style.top = y + 'px';
    infoElement.style.left = (x + 20) + 'px';
    console.log('Position', _position);
}

// const target = {} as HTMLDivElement;
// target.addEventListener('mousemove', defaultCallback);

export default function useMouseEvent(targetId: string) {
    // const target = document.getElementById(elementId);
    const [target, setTarget] = useState<HTMLElement|null>();
    setTarget(document.getElementById(targetId));

    useEffect(() => {
        if (target) {
            target?.addEventListener('mousemove', (e) => defaultCallback(e));
            console.log('useMouseEvent added event listener');
        }
        
        return () => {
            target && target.removeEventListener('mousemove', defaultCallback);
            console.log('useMouseEvent removed event listener');
        };
    }, [target]);
}