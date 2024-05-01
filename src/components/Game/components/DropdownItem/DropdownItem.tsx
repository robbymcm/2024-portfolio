import { DropdownItemProps } from "../Dropdown/Dropdown.d";

export default function DropdownItem({ id, label, onClick, highlighted }: DropdownItemProps) {
    return <li id={id} key={id} className='dropdown__list-item'>
        <button
            style={{ backgroundColor: highlighted ? 'green' : 'inherit' }}
            className='dropdown__list-item-button'
            type='button'
            onClick={(e) => {
                onClick?.(e);
            }}
            data-value={label}
        />
    </li>;
}