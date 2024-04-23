type ToggleProps = {
    onClick: (e: React.MouseEvent) => void;
    label?: string;
}

export default function Toggle({
    onClick,
    label,
}: ToggleProps) {
    return <>
        <button onClick={onClick}>{label}</button>
    </>;
}