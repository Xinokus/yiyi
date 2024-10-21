import './header.css'

import Nav from './nav/nav'

import Arrow from '../assets/arrow.png'

export default function Header(){
    return(
        <>
            <header>
                <Nav/>
                <div className='header_con'>
                    <div className='header_text'>
                        <p className='header_title'>We treat your eyes with care</p>
                        <a href="" className='header_link'><p>SEE THE COLLECTION</p><img src={Arrow} alt="" /></a>
                    </div>
                </div>
            </header>
        </>
    )
}