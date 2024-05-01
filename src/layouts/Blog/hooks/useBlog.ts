import { useParams } from 'react-router-dom';

export default function useBlog() {
    const { blogID } = useParams();

    if (!blogID) {
        return 'Oops, some error occured!';
    }
}