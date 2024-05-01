export type SelectItem = {
    id: string;
    value: string;
    label: string;
};

export type SelectProps = {
    id: string;
    title: string;
    items: SelectItem[];
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};