import sample from '../utils/sample'
import Title from '../components/Title';
import './home.scss'

const Home = () => {
    return ( 
        <div className = "page-wrapper">
            <div className = 'project-list'>
            {sample.map((item)=>
            <Title title = {item.title}/>)}
            </div>
        </div>
    );
}
 
export default Home;