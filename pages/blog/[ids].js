import BlogDat from '../../data/blogs.json'
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';

function BlogPageId(){

    const router = useRouter();
    const ids = router.query.ids;
    parseInt(ids);

    const [data, setData] = useState();

    useEffect(() => {
    }, [router.query.ids]);

    return(
        <div>
            id {ids}
            {BlogDat[ids].title}
        </div>
    )
}

export default BlogPageId;