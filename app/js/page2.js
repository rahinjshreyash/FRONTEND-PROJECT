// SKILLS PAGE

class Page2 extends React.Component{
    render(){
        return(
                <div>
                    <nav id="navbar">
                    <div className="page">
                        <h1 className="title">DreamTest</h1>
                        <p>Learn. Practice. Test. Achieve.</p>
                    </div>

                    <div className="corner">
                    <div>
                        <img src="images/user.svg" alt="user" height={25} width={35}/>
                        <div>Student</div>
                         <img src="images/chevron-down.svg" alt="user" height={25} width={35}/>  
                    </div>   
                    </div>
                    </nav>

                    <h1 className="head"><center>Select Your Skills</center></h1>
                    <p className="line"><center>Choose the skills you want to learn. We will recommend the best courses for you.</center></p>

                    <div id="grid">
                        <div className="skills"><img src="images/html.svg" alt="html" height={70}/>
                        <div className="name">HTML</div>
                        </div>
                        <div className="skills"><img src="images/css.svg" alt="html" height={70}/>
                        <div className="name">CSS</div>
                        </div>
                        <div className="skills"><img src="images/javascript.svg" alt="html" height={70}/>
                        <div className="name">JAVASCRIPT</div>
                        </div>
                        <div className="skills"><img src="images/react.svg" alt="html" height={70}/>
                        <div className="name">REACT</div>
                        </div>


                        <div className="skills"><img src="images/nodejs.svg" alt="html" height={70}/>
                        <div className="name">NodeJS</div>
                        </div>
                        <div className="skills"><img src="images/expressjs.svg" alt="html" height={70}/>
                        <div className="name">ExpressJS</div>
                        </div>
                        <div className="skills"><img src="images/python.svg" alt="html" height={70}/>
                        <div className="name">PYTHON</div>
                        </div>
                        <div className="skills"><img src="images/sql.svg" alt="html" height={70}/>
                        <div className="name">SQL</div>

                       </div>
                        

                        <div className="skills"><img src="images/java.svg" alt="html" height={70}/>
                        <div className="name">JAVA</div>
                        </div>
                        <div className="skills"><img src="images/mongodb.svg" alt="html" height={70}/>
                        <div className="name">MongoDB</div>
                        </div>
                        <div className="skills"><img src="images/cplus.svg" alt="html" height={70}/>
                        <div className="name">C++</div>
                        </div>
                        <div className="skills"><img src="images/figma.svg" alt="html" height={70}/>
                        <div className="name">UI/UX Design</div>

                       </div>

                       <div id="next">
                        <button className="next" >Continue</button>

                       </div>

                       
                    </div>


                </div>
            
        );
    }
}

ReactDOM.render(
    <Page2/>,
    document.getElementById('container')
);