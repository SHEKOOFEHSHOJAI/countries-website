import React ,{useState} from "react";

import "./header.css";

function Header() {
    const [mode,setMode]=useState(true);

    const handelMode=()=>{
        setMode(()=>!mode);

    }
    return(
        <div className="header-continer">
            <div className="logo">Where in the World?</div>
            <div className="dark-mode" onClick={()=>handelMode()}>
                <i className={`fas fa-${mode ? "moon" :"sun"}`}></i>
                <span className="mode">{mode ? "dark mode": "light mode"}</span>
            </div>

         

         </div>
    );
    
}

export default Header;