import Image from 'next/image';
import Announcements from '../public/img/announcements.svg';
import AnnounceData from '../data/announce.json';

function Announcement(){
    return(
        <section className='announce-section'>

            <div className='announce-sec__img-div'>
                <Image src={Announcements} alt='helo' className='img-div__img'/>
            </div>

            <div className='announce-sec__boxes'>
                {
                    AnnounceData.map((data) => {
                        return(

                            <div className='annboxes__indibox' key={data.id}>
                                <div className='indibox__text'>
                                    <div className='intext__title'>
                                        {data.title}
                                    </div>
                                    <div className='intext__para'>
                                        {data.para}
                                    </div>
                                </div>
                                <div className='indibox__digit'>
                                    {data.no}
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <div className='box__see-more'>
                        See More...
            </div>
        </section>
    )
}

export default Announcement; 