export type DropdownItemProps = {
    id: string;
    label: string;
    highlighted: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type DropdownProps = {
    id: string;
    title: string;
    items: DropdownItemProps[];
};