import React, { useState } from 'react'
import { bulletsColorsArr } from '../data/BulletsColorsCode'
import {clearParticals, InitParticals} from './Particals'

export let mainColor = '';


const Bullets = () => {


    const [open,setVisibilty] = useState(false)

    const closeBulletsDiv = ()=>{
        const bulletsDiv = document.querySelector('.colors__bullets')

        if (open === true) {
            bulletsDiv.classList.remove('show')
        }
    }
    const handler = (e) => {
        e.preventDefault();
        const bulletsDiv = document.querySelector('.colors__bullets')
        bulletsDiv.classList.toggle('show') 
        
        
        
    }

    const setBackgroundColor = (e) => {
        setVisibilty(true)
        closeBulletsDiv();
        clearParticals();
        const dataColor = e.target.getAttribute('data-colors');
        localStorage.setItem('mainColor', dataColor)
        document.documentElement.style.setProperty('--color-primary-base',dataColor)
        mainColor = dataColor;
        InitParticals();
    }


        if (localStorage !== null) {
            let localStorageMainColor = localStorage.getItem('mainColor')
            document.documentElement.style.setProperty('--color-primary-base',localStorageMainColor)
        }
    


    return (
        <div className="show_bullets">
            <button onClick={handler} className="bullets_btn" ><span></span></button>
            <ul className="colors__bullets">
                { bulletsColorsArr.map(({name , code, id })=> {
                    return  <li onClick={setBackgroundColor}  style={{backgroundColor : code}} key={id} className='colors' data-colors={code}>{name}</li>
                }) }
                <div className='div-absolute'></div>
            </ul> 
        </div>
    )
}

export default Bullets
