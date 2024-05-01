// import { useState, useEffect } from 'react';
import { NavigationBarProps } from '@components/NavigationBar/NavigationBar.d';

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