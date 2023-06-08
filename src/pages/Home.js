import sample from '../utils/sample'
import Title from '../components/Title';
import './home.scss'
import Media from '../components/Media';
import { useEffect, useState } from 'react';

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({x:0, y:0})
    
    useEffect(() => {

        const updateMousePosition = (event) => {
            setMousePosition({x: event.clientX, y: event.clientY})
        }

        window.addEventListener("mousemove", updateMousePosition)

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);
    
    return mousePosition
}

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(-1)
    const {x, y} = useMousePosition()
    return ( 
        <div className = "page-wrapper">
            <div className = 'project-list'>
                {console.log(x, y)}
                {sample.map((item, index)=>
                <Title title = {item.title} setActiveIndex = {setActiveIndex} index = {index}/>)}
            </div>
            <div className = "project-media">
                {sample.map(({mediaUrl}, index)=>{
                    const isActive = index === activeIndex ? true : false;
                    const xPos = isActive ? x : 0;
                    const yPos = isActive ? y : 0;
                    return (
                        <Media 
                            url = {mediaUrl}
                            active = {isActive}
                            x = {xPos}
                            y = {yPos}
                        />
                    )
                })}
            </div>
        </div>
    );
}
 
export default Home;