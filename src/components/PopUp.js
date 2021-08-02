import React from 'react'
import '../styles/scss/popUp.scss'
const PopUp = ({title, img, url, style, git,popUpClick,closePopUp }) => {

    return (
        <div className='popUp-cards container-fluid d-flex flex-column'>
            <i className='bx bx-x close-popUp' onClick={closePopUp}></i>
            <h2 className="text-center title">{title.toUpperCase()}</h2>
        <img className="popup-img" src={img}  alt=".."/>
                <div className="btns-container d-flex justify-content-center align-items-center my-3">
                    <a className='btn' href={git}>GitHub</a>
                    <a className='btn' href={url}>Live</a>
                    
                </div>
        </div>
    )
}

export default PopUp
