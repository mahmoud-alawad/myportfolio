import React, { useState } from 'react'
import {controlsButtons} from '../data/CardsData'

const ControlsProjects = ({handler}) => {

    const [clicked,setClicked] = useState(false)
    return (
        <div className='projects-controls my-2'>
                {
                    controlsButtons.map(({name},index)=> {
                        return <button key={index} onClick={(e)=> {
                            setClicked(!clicked)
                            handler(name)
                        }}>{name}</button>
                    })
                }
        </div>
    )
}

export default ControlsProjects
