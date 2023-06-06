// import '../pages/home.scss'
 const Title = ({title, setActiveIndex, index}) => {
    return ( 
        <div className = "project-item">
            onMouseEnter = {()=>setActiveIndex(index)}
            onMouseLeave = {()=>setActiveIndex(-1)} 
            <h3 className = "project-title">
                <span>
                    {title}
                    {console.log(title)}
                </span>
            </h3>
        </div>
     );
 }
  
 export default Title;