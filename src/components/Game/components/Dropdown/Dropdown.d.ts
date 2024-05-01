export type DropdownItemProps = {
    id: string;
    label: string;
    highlighted: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    extendedClass?: string;
};

export type DropdownProps = {
    id: string;
    title: string;
    items: DropdownItemProps[];
};