import { NavigationBarProps, NavigationBarItemProps } from './NavigationBar.d';
import './NavigationBar.scss';

function NavigationBarItem({ id, value, onClick }: NavigationBarItemProps) {
    return <button
        id={id}
        className='navigation-bar__item'
        type="button"
        onClick={onClick}
    >{value}</button>;
}

export default function NavigationBar({ id, title, items }: NavigationBarProps) {
    return <div id={id} className='navigation-bar__container' data-testid='navigation-bar'>
        <div className='navigation-bar__title'>{title}</div>
        <div className='navigation-bar__items-container'>
            {items?.map((item) => <NavigationBarItem key={item.id} {...item} />)}
        </div>
    </div>;
}