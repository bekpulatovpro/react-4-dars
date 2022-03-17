import './aside.css'
import Nastroy from '../../img/nastroy.png'
import Mushtariy from '../../img/mushtariy.png'
import Shuhrat from '../../img/shuhrat.png'
import languages from '../../Localization/languages'
import Skipe from '../../img/skipe.png'


function Aside({lang}){


    return(
        <aside className='aside'>
            <input className='aside__input' placeholder={languages[lang].aside.info.input} />

            <div className='aside__inner'>
                <div className='aside__info'>
                    <h3 className='aside__title'>{languages[lang].aside.info.title}</h3>
                    <img src={Nastroy} width='24'/>
                </div>
                <ul className='aside__list'>
                    <li className='aside__item'>
                        <div>
                        <p className='aside__text'>
                            Trending in Germany
                        </p>
                        <h3 className='aside__heading'>{languages[lang].aside.info.title2}</h3>
                        <p className='aside__text'>
                            50.4 Tweets
                        </p>
                        </div>
                        <span className='span'>...</span>
                    </li>
                    <li className='aside__item'>
                        <div>
                        <p className='aside__text'>
                            Trending in Germany
                        </p>
                        <h3 className='aside__heading'>{languages[lang].aside.info.title2}</h3>
                        <p className='aside__text'>
                            50.4 Tweets
                        </p>
                        </div>
                        <span className='span'>...</span>
                    </li>
                    <li className='aside__item'>
                        <div>
                        <p className='aside__text'>
                            Trending in Germany
                        </p>
                        <h3 className='aside__heading'>{languages[lang].aside.info.title2}</h3>
                        <p className='aside__text'>
                            50.4 Tweets
                        </p>
                        </div>
                        <span className='span'>...</span>
                    </li>
                    <a className='aside__link' href='#link'>{languages[lang].aside.info.link}</a>
                </ul>
            </div>
            <div className='aside__footer'>
                <h3 className='aside__title'>{languages[lang].aside.info.title3}</h3>
                <div className='footer__inner'>
                    <img src={Mushtariy}/>
                    <div>
                    <h3 className='footer__headind'>Mushtariy</h3>
                    <p className='footer__text'>@Mushtar12</p>
                    </div>
                    <button>Follow</button>
                </div>
                <div  className='footer__inner'>
                    <img src={Shuhrat}/>
                    <div>
                    <h3 className='footer__headind'>Shuhratbek</h3>
                    <p className='footer__text'>@mrshukhrat</p>
                    </div>
                    <button>Follow</button>
                </div>
                <a className='aside__link' href='#link'>{languages[lang].aside.info.link}</a>
            </div>

            <div>
                <a className='footer__link' href='#link'>Terms of Srvice</a>
                <a className='footer__link' href='#link'>Privacy policy</a>
                <a className='footer__link' href='#link'>Cookie police</a>
                <a className='footer__link' href='#link'>Imprint</a>
                <a className='footer__link' href='#link'>Adds info</a>
                <a className='footer__link' href='#link'>More...</a>
                <a className='footer__link' href='#link'>Twitter,Inc</a>
            </div>

        </aside>
    )
}
export default Aside;