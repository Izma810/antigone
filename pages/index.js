import Image from 'next/image';
import Patriarchy from '../public/img/patriarchy.svg';
import Medusa from '../public/img/medusa.svg';
import Icons from '../data/icons.json';
import Line from '../public/icons/sline.svg';
import Events from '../components/Events';

function Home() {
  return (
    <section className='home-section'>
      <div className='home-section__divider'>
        <div className='divider__text'>
          <div className='text__heading'>
            <Image src={Patriarchy} 
              height={200}
              alt='and you were tossing me the car keys, duck the patriarchy, keychain on the ground'
            />
          </div>
          <div className='text__para'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Mauris non eleifend orci, ac dignissim dolor. Nunc feug
            iat erat purus, sed imperdiet mi placerat quis. Duis orn
            are sit amet urna sed imperdiet. Sed id iaculis mauris. 
          </div>
          <div className='text__icon-line'>
            <div className='icon-line__icons'>
              {
                Icons.map((icon) => {
                  return(
                    <div className='icons__sub' key={icon.id}>
                      <Image 
                        src={icon.imgpath} 
                        alt='save your aasoo for another day'
                        height={30}
                        width={30}
                      />
                    </div>
                  )
                })
              }
            </div>
            <div className='icon-line__line'>
              <Image src={Line} alt='more than fun, you are the sanctuary'/>
            </div>
          </div>
        </div>
        <div className='divider__image'>
          <Image src={Medusa} width={500} alt='nun bhai'/>
        </div>
      </div>
        <Events />
    </section>
  )
}

export default Home;
