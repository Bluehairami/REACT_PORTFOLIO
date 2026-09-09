import { useState } from "react"; // hook - useState
function Navbar({ Name }) {
    //current value of isDark is false, 
    //setIsDark is a function that can be used to update the value of isDark
    // const [isDark, setIsDark] = useState(false);

    return (
        <nav className="panel navbar">
            {/* //if isDark is true, use '#222' for background and '#fff' for color, otherwise use '#fff' for background and '#000' for color */}
            <span className="nav-name">{Name}</span>
            <div className="nav-links">
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
                {/* when btn get clicked setIsDark chnage to the opposite of its current value */}
                {/* <button onClick={ () => setIsDark(!isDark) }>
                    {isDark ? "Light Mode" : "Dark Mode"}
                </button> */}
            </div>
        </nav>
    )
}
export default Navbar