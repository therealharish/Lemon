import sample from '../utils/sample'
import Title from '../components/Title';
import './home.scss'
import Media from '../components/Media';
import { useState } from 'react';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(-1)
    return ( 
        <div className = "page-wrapper">
            <div className = 'project-list'>
            {sample.map((item, index)=>
            <Title title = {item.title} setActiveIndex = {setActiveIndex} index = {index}/>)}
            </div>
            <div className = "project-media">
                {sample.map(({mediaUrl}, index)=>{
                    const isActive = index === activeIndex ? true : false;

                    return (
                    <Media 
                    url = {mediaUrl}
                    active = {isActive}/>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Home;