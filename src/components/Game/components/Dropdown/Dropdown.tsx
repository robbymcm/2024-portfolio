import DropdownItem from '../DropdownItem/DropdownItem';
import { DropdownProps } from './Dropdown.d';
import './Dropdown.scss';

export default function Dropdown({
    id,
    title,
    items,
}: DropdownProps) {
    const isHard = true;

    return <div id={id} className='dropdown__container'>
        <div className='dropdown__title-container'>
            {title}
        </div>

        <div className='dropdown__list-container'>
            <ul className='dropdown__list'>
                {items.map((item, idx) => {
                    let extendedClass = '';

                    // Random placement on each render, bug or feature?
                    if (isHard && Math.floor(Math.random() * 10) < 5) {
                        extendedClass = idx % 2 === 0 ? '__hard-even' : '__hard-odd';
                    }

                    return <DropdownItem extendedClass={extendedClass} key={item.id} {...item} />;
                })}
            </ul>
        </div>
    </div>;
}