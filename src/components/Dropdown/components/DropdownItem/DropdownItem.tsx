import { DropdownItemProps } from "@components/Dropdown/Dropdown.d";

export default function DropdownItem({ id, label, onClick }: DropdownItemProps) {
    return <li key={id} className='dropdown__list-item'>
        <button
            className='dropdown__list-item-button'
            type='button'
            onClick={(e) => {
                onClick?.(e);
            }}
            data-value={label}
        >
            {label}
        </button>
    </li>;
}