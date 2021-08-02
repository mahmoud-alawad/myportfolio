import React from 'react'
import '../styles/scss/card.scss'
const CardProject = ({title, img, url, style, git,popUpClick }) => {
    
    return (
        <div className="card">
        <h2 className="text-center title">{title.toUpperCase()}</h2>
        <img className="card-img" src={img}  alt=".."/>
                <div className="btn-container d-flex flex-column justify-content-center">
                    <h1 className='text-dark mb-1'>take a look on the project</h1>
                        <button className='card-btn' onClick={popUpClick} data-text={title}>click here</button>
                    </div>
            </div>

    )
}

export default CardProject
