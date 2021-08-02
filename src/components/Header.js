import React, { useState } from 'react'
import '../styles/scss/header.scss'
import {MenuList} from '../data/MenuList'
import Bullets from './Bullets'
import Typewriter from './Typewriter'

const Header = () => {
    const [clicked, setClicked ] = useState(false);
    
    
    const showNav = () => {
        if (window.innerWidth >= 1000 && window.scrollY > 90  ) {
            setClicked(true)
        }else{
            setClicked(false)
        }
    }

    window.addEventListener('scroll',showNav)
    const navMenuList = MenuList.map(({url,title}, index) => {
        return <li
        key={index}
        className="links"
        onClick={()=> {setClicked(!clicked)}}
        >
            {/* <NavLink exact to={url}
            className="links"
            activeClassName="active"
            >
                {title}
            </NavLink> */}
            <a href={url} className='links'>{title}</a>
        </li>

    })


    return (
        <header className='header'>
                    <i className={clicked ? 'bx bx-x menu-bar' :'bx bx-menu-alt-right menu-bar'}  onClick={()=> setClicked(!clicked)}></i>
    <nav className={clicked ? "navbar pt-3 active": "navbar pt-3"}>
        <div className="container d-flex justify-content-around">
            <ul className={clicked ? "active nav-menu text-white" :"nav-menu text-white "}>
                {navMenuList}
                {/* <!-- <div class="light-mood  mx-4"><i class='bx bx-moon' ></i></div> --> */}
            </ul>
        </div>
    </nav>
    <Typewriter/>
    <Bullets/>
        </header>
    )
}

export default Header
