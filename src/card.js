import "./card.css"
const Card=({post})=>{
return(
    <>
    <section className="card-con">
        <section className="card-head">
            <div className="card-left">
                <div className="card-name">{post.name}</div>
                <div className="card-place">{post.location}</div>
</div>
<span className="card-right">
<i className="fa fa-ellipsis"/>
</span>
        </section>
        <section className="card-image">
           
           <img src={require("" + post.PostImage)} alt="place"/>
        </section >
        <section className="card-bottom">
            <span className="icon">
                <i className="fa fa-heart"/>
            </span>
            <span className="icon">
            <i className="fa fa-paper-plane"/>
            </span>
            <span className="date">
                {post.date}
            </span>
</section>
            
<section className="likes">{post.likes} Likes</section>
<section className="description">{post.description}</section>
</section>
    </>
)
}
export default Card;