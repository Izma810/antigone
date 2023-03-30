import Image from 'next/image';
import Event from '../public/img/events.svg';
import SlantArrow from '../public/icons/slant_arrow.svg';

function Events(){
    return(
        <section className='events-section'>
            <div className='event-sec__img-div'>
                <Image src={Event} alt='helo' className='img-div__img'/>
            </div>
            <div className='events-sec__text'>
                <div className='etext__box'>

                    <div className='box__mini-text'>

                        <div className='mini-text__title'>
                            <p className='title__bold'>Lorem Ipsum</p>
                            <p className='title__date'>October 2, 2022</p>
                        </div>

                        <div className='mini-text__arrow'>
                            <Image src={SlantArrow} height={40} width={40} alt='i sighed i need to clean again'/>
                        </div>

                    </div>

                    <div className='mini-text__para'>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non eleifend orci, ac dignissim dolor. Nunc feugiat erat purus, sed imperdiet mi placerat quis.

                    </div>

                </div>

                <div className='etext__box'>

                    <div className='box__mini-text'>

                        <div className='mini-text__title'>
                            <p className='title__bold'>Lorem Ipsum</p>
                            <p className='title__date'>October 2, 2022</p>
                        </div>

                        <div className='mini-text__arrow'>
                            <Image src={SlantArrow} height={40} width={40} alt='i sighed i need to clean again'/>
                        </div>

                    </div>

                    <div className='mini-text__para'>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non eleifend orci, ac dignissim dolor. Nunc feugiat erat purus, sed imperdiet mi placerat quis.
                        
                    </div>

                </div>

            </div>

            <div className='box__see-more'>
                        See More...
            </div>
            
        </section>
    )
}

export default Events;