import Image from 'next/image';
import Blog from '../public/img/blogs.svg';
import BlogData from '../data/blogs.json';
import {useRouter} from 'next/router';

function Blogs(){

    const router = useRouter();
    const ids = router.query.ids;

    return(
        <section className='blogs-section'>
            <div className='blgsec__img-div'>
                <Image src={Blog} alt='fuzzybrain' />
            </div>
            <div className='blgsec__boxes'>
                {
                    BlogData.map((bdata) => {
                        return(

                            <div className='blgbox__indibox' key={bdata.ids} onClick={() => router.replace(`/blog/${bdata.ids}`)}>
                                <div className='blindibox__text'>
                                    <div className='intext__title'>
                                        {bdata.title}
                                    </div>
                                    <div className='blintext__para'>
                                        {bdata.para}
                                    </div>
                                </div>
                                <div className='blindibox__digit'>
                                    {bdata.no}
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </section>
    )
}

export default Blogs;