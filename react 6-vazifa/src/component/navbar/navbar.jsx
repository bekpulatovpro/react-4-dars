import './navbar.css'
import Button from "../button/button"
import Twitter from '../../img/twitter.svg'
import House from '../../img/home2.png'
import Explore from '../../img/hashtag.png'
import Zving from '../../img/zving.png'
import Message from '../../img/message.png'
import  Bnma from '../../img/bnma.png'
import Lists from '../../img/lists.png'
import Profile from '../../img/human.png'
import More from '../../img/more.png'
import languages from "../../Localization/languages"

import React from 'react'

function navbar({lang}){
   
    
    return(

       
        <nav className='nav'>
            
               <a href='#link' alt='img twitter'> <img className='twitter__img' src={Twitter} alt='twitter' width='40' height='33' /></a>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <img src={House} alt='twitter'/>
                        <a className='nav__link' href='#link' alt='home'>{languages[lang].header.nav.navItem1}</a>
                    </li>
                    <li className='nav__item'>
                        <img src={Explore} alt='twitter'/>
                         <a className='nav__link' href='#link' alt='home'>{languages[lang].header.nav.navItem2}</a>
                    </li>
                    <li className='nav__item'>
                        <img src={Zving} alt='twitter'/>
                         <a className='nav__link' href='#link' alt='home'>{languages[lang].header.nav.navItem3}</a>
                    </li>
                    <li className='nav__item'>
                        <img src={Message} alt='twitter'/>
                         <a className='nav__link' href='#link' alt='home'>{languages[lang].header.nav.navItem4}</a>
                    </li>
                    <li className='nav__item'>
                        <img src={Bnma} alt='twitter'/>
                         <a className='nav__link' href='#link' alt='home'>{languages[lang].header.nav.navItem5}</a>
                    </li>
                    <li className='nav__item'>
                        <img src={Lists} alt='twitter'/>
                         <a className='nav__link' href='#link' alt='home'>{languages[lang].header.nav.navItem6}</a>
                    </li>
                    <li className='nav__item'>
                        <img src={Profile} alt='twitter'/>
                        <a className='nav__link' href='#link' alt='home'>{languages[lang].header.nav.navItem7}</a>
                    </li>
                    <li className='nav__item'>
                        <img src={More} alt='twitter'/>
                        <a className='nav__link' href='#link' alt='home'>{languages[lang].header.nav.navItem8}</a>
                    </li>
                </ul>
                <Button variant='secondary' username={languages[lang].main.hero.button}/>

           



        </nav>


       
    )
}

export default navbar;