import "./header.css"
const Header=()=>{
    return(
        < nav className='head-con'>
     <section className='logo-con'>
<img src={require('../../images/instaclone-logo-dark.png')} alt='logo-img'/>
</section>
     <section className='cam-con'>
<img src={require('../../images/camera.jpg')} alt='cam-img'/>
     </section>
        </nav>
    )
}
export default Header