import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { useNavigationBar } from "../../components/NavigationBar/hooks/useNavigationBar/useNavigationBar";

export default function Home() {
    const navProps = useNavigationBar();

    return <>
        <NavigationBar {...navProps} />
    </>
}