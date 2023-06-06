import React from 'react'
import '../pages/home.scss'

const Media = ({url, active}) => {
    return ( 
        <div>
            {console.log(active)}
            <img className = {active && "is-active"}
                src = {url} alt = "sample"/>
        </div>
     );
}
 
export default Media;