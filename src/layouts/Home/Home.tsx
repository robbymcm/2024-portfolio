// import Select from "@components/Select/Select";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import { useNavigationBar } from "@components/NavigationBar/hooks/useNavigationBar/useNavigationBar";
// import Dropdown from "@components/Dropdown/Dropdown";
// import { DropdownProps } from "@components/Dropdown/Dropdown";
import Game from "@components/Game/Game";

export default function Home() {
    const navProps = useNavigationBar();
    // const selectProps = {
    //     id: 'test',
    //     title: 'Test',
    //     items: [
    //         { id: 'test', label: 'Test', value: 'test' },
    //         { id: 'test2', label: 'Test2', value: 'test2' },
    //     ],
    //     onChange: (e: React.ChangeEvent<HTMLSelectElement>) => console.log(e.target.value)
    // };

    // const dropdownProps: DropdownProps = {
    //     id: 'test',
    //     title: 'Test',
    //     items: [{
    //         id: 'test',
    //         label: 'Test 1',
    //         onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.currentTarget.dataset['value'])
    //     }],
    // };

    return <>
        <NavigationBar {...navProps} />
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{ width: '600px' }}>
                <Game />
            </div>

            {/* <Select {...selectProps} /> */}
            {/* <Dropdown {...dropdownProps} /> */}
        </div>

    </>;
}