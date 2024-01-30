
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import NavigationBar from './NavigationBar';

describe('<NavigationBar />', () => {
    it('Should render the component', () => {
        render(<NavigationBar />);

        expect(screen.getByTestId('navigation-bar')).toBeInTheDocument();
    });
});