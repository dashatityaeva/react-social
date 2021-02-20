import React from 'react'
import preloader from "../../../assets/images/preloader.svg";


let Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt="Идет загрузка"/>
        </div>
    )
}

export default Preloader;