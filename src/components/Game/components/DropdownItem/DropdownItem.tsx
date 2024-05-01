import { DropdownItemProps } from "../Dropdown/Dropdown.d";
import '../Dropdown/Dropdown.scss';

export default function DropdownItem({ id, label, onClick, highlighted, extendedClass }: DropdownItemProps) {
    return <li id={id} key={id} className={`dropdown__list-item${extendedClass}`}>
        <button
            style={{ backgroundColor: highlighted ? 'red' : 'inherit' }}
            className={`dropdown__list-item-button${highlighted ? '__dismiss' : ''}`}
            type='button'
            onClick={(e) => {
                onClick?.(e);
            }}
            data-value={label}
        />
    </li>;
}