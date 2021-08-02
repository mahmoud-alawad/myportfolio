import React from 'react'

const Contact = () => {
    return (
        <footer className="footer" id='contact'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,128L60,112C120,96,240,64,360,90.7C480,117,600,203,720,234.7C840,267,960,245,1080,218.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                                    <div className="content ">
                                        <div className="social-icons d-flex justify-content-center align-content-center">
                                            <a href="https://www.facebook.com/mahmoud.ah.awad/" className="link"> <i  className="bx  bxl-facebook skills__icon"></i></a>
                                            <a href="https://github.com/mahmoud-alawad" className="link"><i className="bx bxs-git bxl-git skills__icon"></i></a>
                                            <a href="https://www.linkedin.com/in/mahmoud-alawad-6912ba135/" className="link"><i className="bx bxl-linkedin skills__icon"></i></a>
                                            <a href="https://www.behance.net/mahmoudawad14" className="link"><i className="bx bxl-behance skills__icon"></i></a>
                                            <a href="images/CV-Europass-20170419-Alawad-IT00(1).pdf" className="link"><i class='bx bx-download' ></i></a>
                                        </div>
                                    </div>
    </footer>
    )
}

export default Contact
