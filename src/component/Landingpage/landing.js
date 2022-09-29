import landingImage from '../../images/10x.png'
import './landing.css'
import {Link} from "react-router-dom"
const Landing=()=>{
    return(
        <div className="landing-con">
            <div className='img-con'>
<img src={landingImage} alt="homepicture"/>
            </div>
            <div className='text-con'>
                <div className='content'>10x Team 13</div>
                <Link to="/postview">
                <div className='but-con'>
                    <button className='butt'>Enter</button>
</div>                
</Link>

            </div>
        </div>
    )
}
export default Landing;