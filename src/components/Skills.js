import React from 'react'
import {skillsData} from '../data/SkillsData'

const Skills = () => {
    const scrolling = () =>{
        let   windowScrollTop = window.pageYOffset;
        let skillsOfsetTop = Skills.offsetTop;

        let widowHieght = window.innerHeight;
        if ( windowScrollTop > (skillsOfsetTop - widowHieght) ) {
            const skillsBars = document.querySelectorAll('skills__bar')
            skillsBars.forEach(bar => {
                bar.style.width = bar.dataset.progress;
            })
        }
    }

    window.onscroll = scrolling();
    return (
        <section className="skills text-white" id="skills">
            <h1 className="section-title text-white text-center"><span>My</span> Skills </h1>

            <div className="container d-flex flex-column justify-content-evenly">
                <h2 className="skills__subtitle">Profesional Skills</h2>
                        <p className="skills__text">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                        {
                            skillsData.map(({name, progress, precentage},index)=> {
                                return <div key={index} className="skills__data">
                                <div className="skills__names">
                                    <i className='bx bxl-html5 skills__icon'></i>
                                    <span className="skills__name">{name}</span>
                                </div>
                                
                                <div className="skills__bar skills__html" 
                                style={{width : progress+'%'}}
                                data-progress={progress + '%'}></div>
                                <div>
                                    <span className="skills__percentage" style={{width : precentage+'%'}} data-progress={precentage + '%'}>{precentage+'%'}</span>
                                </div>
                            </div>
    
                            })
                        }

            </div>
        </section>
    )
}

export default Skills
