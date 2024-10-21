import './main.css'

import Header from '../header/header'
import Footer from '../footer/footer'

import GlassesTopLeft from '../assets/glassestopleft.png'
import GlassesTopMid from '../assets/glassestopmid.png'
import GlassesTopRight from '../assets/glassestopright.png'
import GlassesBotLeft from '../assets/glassesbotleft.png'
import GlassesBotMid from '../assets/glassesbotmid.png'
import GlassesBotRight from '../assets/glassesbotright.png'

import SectSevenImg from '../assets/sectSevenImg.png'

import SectThreeIMG from '../assets/sectThreeimg.png'

export default function Main(){
    return(
        <>
            <Header/>
            <main>
                <section className='sect_one'>
                    <div className='sect_one_left'>
                        <a href="">SHOP WOMEN</a>
                    </div>
                    <div className='sect_one_right'>
                        <a href="">SHOP MEN</a>
                    </div>
                </section>
                <section className='sect_two'>
                    <div className='sect_two_top'>
                        <div className='sect_two_top_con'>
                            <p>New in stock</p>
                            <a href="">SEE THE COLLECTION</a>
                        </div>
                    </div>
                    <div className='sect_two_bot'>
                        <div className='sect_two_card'>
                            <img src={GlassesTopLeft} alt="" />
                            <p>Noemi</p>
                            <p>2 colours</p>
                            <p>$95</p>
                        </div>
                        <div className='sect_two_card'>
                            <img src={GlassesTopMid} alt="" />
                            <p>Hurst</p>
                            <p>2 colours</p>
                            <p>$285</p>
                        </div>
                        <div className='sect_two_card'>
                            <img src={GlassesTopRight} alt="" />
                            <p>Louisa Nylon</p>
                            <p>2 colours</p>
                            <p>$315</p>
                        </div>
                    </div>
                </section>
                <section className='sect_three'>
                    <div className='sect_three_left'>
                        <img src={SectThreeIMG} alt="" />
                    </div>
                    <div className='sect_three_right'>
                        <div className='sect_three_right_top'>
                            <p>TIJN</p>
                            <p>Mitchel</p>
                            <p>All-time classic round shape</p>
                        </div>
                        <div className='sect_three_right_bot'>
                            <a href="">SHOP THIS MODEL</a>
                        </div>
                    </div>
                </section>
                <section className='sect_four'>
                    <div className='sect_four_top'>
                        <div className='sect_four_top_con'>
                            <p>Bestsellers</p>
                            <a href="">SEE THE COLLECTION</a>
                        </div>
                    </div>
                    <div className='sect_four_bot'>
                        <div className='sect_four_card'>
                            <img src={GlassesBotLeft} alt="" />
                            <p>Saskia</p>
                            <p></p>
                            <p>$115</p>
                        </div>
                        <div className='sect_four_card'>
                            <img src={GlassesBotMid} alt="" />
                            <p>Cynthia</p>
                            <p>2 colours</p>
                            <p>$95</p>
                        </div>
                        <div className='sect_four_card'>
                            <img src={GlassesBotRight} alt="" />
                            <p>Eimear</p>
                            <p>2 colours</p>
                            <p>$105</p>
                        </div>
                    </div>
                </section>
                <section className='sect_five'>
                    <div className='sect_five_left'>
                        <a href="">FOR SIGHT</a>
                    </div>
                    <div className='sect_five_right'>
                        
                    </div>
                </section>
                <section className='sect_six'>
                    <div className='sect_six_top'>
                        <div className='sect_six_top_con'>
                            <p>Our brands</p>
                            <a href="">SEE MORE</a>
                        </div>
                    </div>
                    <div className='sect_six_bot'>
                        <p>KreweCarlaColour</p>
                        <p>ModernLegacyTIJN</p>
                    </div>
                </section>
                <section className='sect_seven'>
                    <div className='sect_seven_con'>
                        <div className='sect_seven_left'>
                            <p>Who are we?</p>
                            <p>Apologies if you were looking for an ordinary optical store. We've hand-picked the unique brands from all over the world to give you the special look for your everyday life.
                            <br /><br /> Our glasses will have you looking great and feeling better. We work with independent brands who use the highest-grade of materials, demonstrating detail and craftsmanship in every single pair. A wide range of styles reflect the diversity of our clients and are made to suit different face shapes.</p>
                        </div>
                        <div className='sect_seven_right'>
                            <img src={SectSevenImg} alt="" />
                        </div>
                    </div>
                </section>
                <Footer/>
            </main>
        </>
    )
}