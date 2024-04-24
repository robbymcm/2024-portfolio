// import { useState, useEffect } from 'react';
import { NavigationBarProps } from '../../NavigationBar.d';

export function useNavigationBar() {
    const items: NavigationBarProps['items'] = [{
        id: 'test',
        value: 'Test',
    }];

    const result: NavigationBarProps = {
        id: 'navigation-bar',
        title: 'Portfolio',
        items,
    }

    return result;
}