import React, { useState } from 'react'
import {cardsData} from '../data/CardsData'
import CardProject from './CardProject'
import Controls from './ControlsProjects'
import PopUp from './PopUp'
import '../styles/scss/Projects.scss'


const Projects = () => {

const [ mainCards, setDataCards ] = useState(cardsData)
const [ clicked, setClicked ] = useState(false);
const [filterdCardsArr, setFilterdArr ] = useState('');

    const filterdArr = (name) => {
        const cardsDataFilterd = cardsData.filter((val,index) => {
            return val.style === name;
        })
        setDataCards(cardsDataFilterd)
            return cardsDataFilterd
        }



        const closePopUp = (e)=>{
            setClicked(false)
            e.target.parentElement.style.display = 'none'
        }
        const handlerPopUp = (e)=>{
            setClicked(!clicked)
            const innerHtml = e.target.offsetParent.innerHTML;
            const filterdCards = mainCards.filter((val)=>{
                console.log(e.target.dataset.text);
                return val.title === e.target.dataset.text;
            })
            setFilterdArr(filterdCards)
            
            return <PopUp inner={innerHtml}/>
        }

        const renderProjects = (arr) => {

            if (clicked) {
                return arr.map(({title, img, url, style, git}, index)=>{

                    return <PopUp 
                    key={index}
                    title={title}
                    img={img}
                    url={url}
                    style={style}
                    git={git}
                    popUpClick={handlerPopUp}
                    closePopUp={closePopUp}
                /> 
            })
            }else if(clicked === false) {
                
            return arr.map(({title, img, url, style, git}, index)=>{

                return <CardProject 
                key={index}
                title={title}
                img={img}
                url={url}
                style={style}
                git={git}
                popUpClick={handlerPopUp}
            /> 
        })
            }
            }
    return (

        <React.Fragment>
            <Controls handler={filterdArr} />
            <div className='cards grid' id='projects'>
                
                {
                    clicked ? renderProjects(filterdCardsArr) : !clicked ? renderProjects(mainCards) : renderProjects(mainCards)
                }
            </div>
        </React.Fragment>
    )
}

export default Projects
