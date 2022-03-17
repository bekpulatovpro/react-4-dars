import './center.css'
import Star from '../../img/star.png'
import Bobur from '../../img/bobur.png'
import Gallery from '../../img/galery.png'
import Gif from '../../img/gif.png'
import Line from '../../img/line.png'
import Smile from '../../img/smile.png'
import Hour from '../../img/hour.png'
import Button from '../button/button'
import Designer from '../../img/designer.png'
import Hibition from '../../img/bition.png'
import Photo from '../../img/photo.png'
import Message2 from '../../img/message2.png'
import Naprav from '../../img/otkazma.png'
import Heart from '../../img/heart.png'
import Strelka from '../../img/strelka.png'
import Flactuation from '../../img/flactuation.png'
import Shashlik from "../../img/shashlik.png"
import languages from "../../Localization/languages"


function Center({lang,setLang}){
   
   


    return(
        <main className='center'>
        <div className='center__div'>
            <h1>{languages[lang].main.hero.title}</h1>
            <img src={Star}  alt='star'/>
        </div>
        <div>
           <div className='center__inner'>
           <div className='bnma2'>
           <img src={Bobur} alt='Bobur' width='60' height='60' / >
                <h3 className='center__title'>{languages[lang].main.hero.description}</h3>
           </div>
                <select className='select' value={lang} onChange={(evt)=>setLang(evt.target.value)}>
                    <option value='en'>en</option>
                    <option value='ru'>ru</option>
                    <option value='uz'>uz</option>
                </select>
           </div>
           <div className='center__inner__img'>
           <div className='images' >
           <img className='center__img' src={Gallery} alt='gallery'  / >
           <img className='center__img' src={Gif} alt='gif'  / >
           <img className='center__img' src={Line} alt='line'  / >
           <img className='center__img' src={Smile} alt='smile'  / >
           <img className='center__img' src={Hour} alt='hour'  / >
           </div>
           <Button className='btn__second' variant='btn__second' username={languages[lang].main.hero.button}/>

           </div>
        </div>
        <ul className='center__list'>
        <li className='center__item'>
            <img src={Designer} width='60'/>
            <div className='item__inner'>
                <h3 className='item__title'>Designsta </h3>
                <p className='item__text'>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                <div className='inner__images'>
                    <img src={Message2}/>
                    <img src={Naprav}/>
                    <img src={Heart}/>
                    <img src={Strelka}/>
                    <img src={Flactuation}/>
                </div> 
            </div>
                <span>...</span>
        </li>
        <li className='center__item'>
            <img src={Hibition} width='60'/>
            <div className='item__inner'>
                <h3 className='item__title'>cloutexhibition </h3>
                <p className='item__text'>YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
                <div className='inner__images'>
                    <img src={Message2}/>
                    <img src={Naprav}/>
                    <img src={Heart}/>
                    <img src={Strelka}/>
                    <img src={Flactuation}/>
                </div> 
            </div>
                <span>...</span>
        </li>
        <li className='center__item1'>
            <img src={Photo} width='60'/>
            <div className='item__inner'>
                <h3 className='item__title'>CreativePhoto </h3>
                <p className='item__text'>Обетда..... <br /> Кечиринглар</p>
<div>
                   <img className='shashlik__img' src={Shashlik}/>
               <div className='inner__images'>
                    <img src={Message2}/>
                    <img src={Naprav}/>
                    <img src={Heart}/>
                    <img src={Strelka}/>
                    <img src={Flactuation}/>
                </div> 
               </div>
              
            </div>
                <span className=''>...</span>
        </li>
        



        </ul>
        

        </main>
    )
}


export default Center;