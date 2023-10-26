import logo from "./assets/react.svg"
import "./Navbar.css"

function Navbar(){
    return (
        <div className="navbar">
            <div className="left-column">
                <img src={logo} width={35}/>
                <p>ReactFacts</p>
            </div>
            <div className="right-column">
                <p>React Course - Project 1</p>
            </div>
        
        </div>
    )
}

export default Navbar