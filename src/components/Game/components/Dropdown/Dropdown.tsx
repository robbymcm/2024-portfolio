import DropdownItem from '../DropdownItem/DropdownItem';
import { DropdownProps } from './Dropdown.d';
import './Dropdown.scss';

export default function Dropdown({
    id,
    // title,
    items,
}: DropdownProps) {
    return <div id={id} className='dropdown__container'>
        {/* <div className='dropdown__title-container'>
            {title}
            <button className='dropdown__title'>{title}</button>
        </div> */}

        <div className='dropdown__list-container'>
            <ul className='dropdown__list'>
                {items.map(item => {
                    return <DropdownItem key={item.id} {...item} />;
                })}
            </ul>
        </div>
    </div>;
}