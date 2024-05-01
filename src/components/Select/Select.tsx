import { ChangeEvent, useCallback, useState } from 'react';
import { SelectProps } from './Select.d';
import './Select.scss';


export default function Select({ id, title, items, onChange }: SelectProps) {
    const [selected, setSelected] = useState<string>('');

    const onSelectChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
        console.log('select changed', e.target.value);
        onChange?.(e);
    }, [onChange]);

    return <div className='select__container'>
        <label className='select__title'>{title}</label>
        <select
            id={id}
            data-testid={id}
            name={`select-${id}`}
            onChange={onSelectChange}
            value={selected}
            className='select__select'
        >
            {items.map((item) => <option key={item.id} className='select__item' value={item.value}>{item.label}</option>)}
        </select>
    </div>;
}