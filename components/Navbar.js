import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../public/img/logo.svg';
import Image from 'next/image';

const Links = [
    {
        page:'home', path:'/'
    },
    {
        page:'about us', path:'/about'
    },
    {
        page:'blog', path:'/blog'
    },
    {
        page:'announcements', path:'announcements'
    },
    {
        page:'events', path:'/events',
    },
    {
        page:'join us', path:'/join'
    }
]

function Navbar(){

    const router = useRouter();

    return(
        <nav className='nav-bar'>
            <div className='nav-bar__logo'>
                <div className='logo__img'>
                    <Image 
                      src={Logo} 
                      height={80} 
                      width={80} 
                      alt='helo' 
                      onClick={() => router.replace('/')}
                    />
                </div>
                <div className='logo__text'>
                    antigone
                </div>
            </div>
            <div className='nav-bar__links'>
                {
                    Links.map((link) => (
                        <div className='links__sub' key={link.page}>
                            <Link href={link.path} passHref>
                                <a className={router.asPath == link.path ? 'active' : ' '}>
                                    {link.page}
                                </a>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar;