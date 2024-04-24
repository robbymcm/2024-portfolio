type NavigationBarItemProps = {
    id: string;
    value: string;
    onClick?: (e: React.MouseEvent) => void;
}

export type NavigationBarProps = {
    id: string;
    title?: string;
    items: NavigationBarItemProps[];
};