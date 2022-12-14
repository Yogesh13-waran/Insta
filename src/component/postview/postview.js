import { useEffect,useState} from "react";
import Card from "../../card";
import Header from "../header/header"
const PostView=()=>{
    const [posts,setPosts]=useState([])
    useEffect(()=>{
       fetch("http://localhost:3004/user").then((Res)=>Res.json()).then((data)=>{
setPosts(data)
       }).catch((err)=>{
        if(err){
            console.log(err)
        }
       })
    },[])
return(
    <>
    <Header/>
    <div className="post-con">{
        posts.map((post,i)=>{
return(
    
    <Card post={post} key={i}/>
)
    })
    }
    </div>
    </>
)
}
export default PostView;