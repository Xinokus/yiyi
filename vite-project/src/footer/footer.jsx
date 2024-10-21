import './footer.css'

import Copyright from '../assets/copyright.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'

export default function Footer(){
    return(
        <>
            <footer>
                    <div className='footer_top'>
                        <div className='footer_top_con'>
                            <p>yes.</p>
                            <p>We treat your eyes with care</p>
                        </div>
                    </div>
                    <div className='footer_bot'>
                        <div className="footer_bot_con">
                            <div className='footer_bot_left'>
                                <div className='footer_bot_left_con'>
                                    <div className='footer_bot_left_lists'>
                                        <div className='footer_list'>
                                            <p>Shop</p>
                                            <ul>
                                                <li><a href="">Sun</a></li>
                                                <li><a href="">Optical</a></li>
                                                <li><a href="">Brands</a></li>
                                            </ul>
                                        </div>
                                        <div className='footer_list'>
                                            <p>Customer care</p>
                                            <ul>
                                                <li><a href="">FAQ</a></li>
                                                <li><a href="">Shipping and returns</a></li>
                                                <li><a href="">Fit guide</a></li>
                                            </ul>
                                        </div>
                                        <div className='footer_list'>
                                            <p>Info</p>
                                            <ul>
                                                <li><a href="">Terms and conditions</a></li>
                                                <li><a href="">Privacy policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='footer_bot_left_mid'>
                                        <p>Designed and built by Margarita</p>
                                        <div><img src={Copyright} alt="" /><p>2020 Yes for Eyes</p></div>
                                    </div>
                                    <div className='footer_bot_left_bot'>
                                        <p>Photo materials belong to <a href="">Krewe</a>, <a href="">Carla Colour</a>, <a href="">TIJN</a>, <a href="">Modern Legacy</a>, <a href="">Unsplash</a>

                                        </p>
                                        <p>This site is a design concept and not meant for commercial purposes. I don't own or sell any goods displayed on this site.</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='footer_bot_right'>
                                <div className='footer_bot_right_top'>
                                    <p>No spam, just pure inspiration and good news</p>
                                </div>
                                <div className='footer_bot_right_bot'>
                                    <div className='footer_bot_right_bot_left'>
                                        <p>We are always close</p>
                                        <p>+31 657 485 73 26</p>
                                        <p>hello@yesforeyes.com</p>
                                    </div>
                                    <div className='footer_bot_right_bot_right'>
                                        <img src={Facebook} alt="" />
                                        <img src={Instagram} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
        </>
    )
}