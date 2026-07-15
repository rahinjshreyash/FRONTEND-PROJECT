// Courses Page

class Page3 extends React.Component{
    render(){
        return(
            <div>
                <nav id="nav">
                    <div className="page">
                        <h1 className="title">DreamTest</h1>
                        <p>Learn. Practice. Test. Achieve.</p>
                    </div>

                    <div id="above">
                        <span>Courses</span>
                        <span>Tests</span>
                        <span>About us</span>
                    </div>

                    <div className="searchbar">
                        <img src="images/magnifier.svg" alt="user" height={27} width={35}/>
                        <input type="text" placeholder="Search courses..."></input>
                    </div>

                    <div id="extra">
                        <img src="images/bell.svg" alt="user" height={28} width={35}/>
                        <img src="images/user.svg" alt="user" height={28} width={35}/>
                    </div>
                </nav>

                 <h1 className="course">Recommended Courses</h1>
                    <p className="line2">Based on your selected skills.</p>

                <div id="grid2">
                    <div className="boxes">
                        <img src="images/web_dev.png" alt="web_dev" height={200} width={298}/>
                        <h2>Complete Web Development</h2>
                        <p>Learn HTML, CSS, JavaScript, React and more. </p>
                        <div>
                            <span><img src="images/clock.svg" alt="user" height={17} width={35}/>40 hours</span>
                            <span><img src="images/star.svg" alt="user" height={17} width={35}/>4.5</span>
                        </div>
                        <button><center>Start Course</center></button>
                    </div>
                    <div className="boxes">
                        <img src="images/nodejs.png" alt="web_dev" height={200} width={298}/>
                        <h2>Node.js Basics to Advanced</h2>
                        <p>Learn Backend development with Node.js and Express. </p>
                        <div>
                            <span><img src="images/clock.svg" alt="user" height={17} width={35}/>40 hours</span>
                            <span><img src="images/star.svg" alt="user" height={17} width={35}/>4.5</span>
                        </div>
                        <button><center>Start Course</center></button>
                    </div>
                    <div className="boxes">
                        <img src="images/python.png" alt="web_dev" height={200} width={298}/>
                        <h2>Python Programming Masterclass</h2>
                        <p>Learn Python from basics to advanced concepts. </p>
                        <div>
                            <span><img src="images/clock.svg" alt="user" height={17} width={35}/>40 hours</span>
                            <span><img src="images/star.svg" alt="user" height={17} width={35}/>4.5</span>
                        </div>
                        <button><center>Start Course</center></button>
                    </div>
                    <div className="boxes">
                        <img src="images/sql.png" alt="web_dev" height={200} width={298}/>
                        <h2>SQL for Data Management</h2>
                        <p>Master SQL queries and database management. </p>
                        <div>
                            <span><img src="images/clock.svg" alt="user" height={17} width={35}/>40 hours</span>
                            <span><img src="images/star.svg" alt="user" height={17} width={35}/>4.5</span>
                        </div>
                        <button><center>Start Course</center></button>
                    </div>
                    
                </div>





            </div>
        );
    }
}

ReactDOM.render(
    <Page3/>,
    document.getElementById('container')
);