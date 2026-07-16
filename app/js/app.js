// LOGIN PAGE





class Page1 extends React.Component{
    render(){
        return(
        <div>
            <div className="page">
            <h1 className="title">DreamTest</h1>
            <p>Learn. Practice. Test. Achieve.</p>
            </div>
    
            <div id="login">
                <div className="box">
                    <div className="t"><center>Welcome!</center></div>
                    <p><center>Login to continue your learning journey</center></p>

                    <span className="input">Email</span> <br></br>
                    <input type="text" placeholder="Enter your email"></input><br></br>

                    <span className="input">Password</span> <br></br>
                    <input type="text" placeholder="Enter your password"></input>

              
                       <button
                            className="login"
                            onClick={() => window.location.href = "page2.html"   
                            }
                        >
                            Login
                        </button>
                  
                         
                    <div className="or"><center>--OR--</center></div>

                    <button className="continue">
                    <div><img src="images/googles.png" alt="google" height={40} width={50}/></div>Continue with Google</button>
                    <button className="continue">
                    <div><img src="images/github.svg" alt="google" height={25} width={35}/></div>Continue with Githhub</button>
                    <button className="continue">
                    <div><img src="images/linkedin.png" alt="google" height={35} width={40}/></div>Continue with Linkedin</button>

                    <div className="signup"><center>Don't have an account? <a id="sign" href="">Sign up</a></center></div>
                </div>

            </div>
        </div>      
        );
    }
}

ReactDOM.render(
    <Page1/>,
    document.getElementById('react-container')
);


