import React, {useState ,useEffect} from 'react'
import './Nav.css'
function Nav() {
    const [show, handleshow] = useState(false);

    useEffect(() => {
       window.addEventListener("scroll", ()=>{
           if(window.scrollY >100) {
               handleshow(true)
           }else handleshow(false)
       });
       return () =>{
           window.removeEventListener("scroll")
       }
    },[]);
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
                alt="Netflix Logo"
            / >
        </div>
    )
}

export default Nav
