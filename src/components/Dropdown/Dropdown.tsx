import { useState } from 'react';
import DropdownItem from './components/DropdownItem/DropdownItem';
import { DropdownProps, DropdownItemProps } from './Dropdown.d';
import './Dropdown.scss';

export default function Dropdown({
    id,
    title,
    items,
}: DropdownProps) {
    const [selected, setSelected] = useState<DropdownItemProps | null>(null);
    const [hidden, setHidden] = useState(false);

    return <div id={id} className='dropdown__container'>
        <div className='dropdown__title-container'>
            <button className='dropdown__title' onClick={() => setHidden(!hidden)}>{title}</button>
        </div>

        <div className='dropdown__list-container'>
            <ul className='dropdown__list' style={{ display: hidden ? 'none' : 'flex' }}>
                {items.map(item => {
                    return <DropdownItem key={item.id} {...item} />;
                })}
            </ul>
        </div>

        <div>{selected?.label}</div>
    </div>;
}