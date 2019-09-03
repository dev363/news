import React,{useState,useEffect} from "react";

import {NEWSAPI} from '../services/Api';

const WhatsHot =  (props) => {
  const [posts, setPosts]= useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const fetchPosts = async () => {
      setLoading(true);
      const res = await NEWSAPI.NewsCategoryWise(props.category,props.number);
      setPosts(res.data.articles);
      setLoading(false);
    };
    fetchPosts();
  },[])

  if (loading) {
    return <img  className="loading" src="loading.jpg"/>;
  }

 return (
   <div className="middlebar_content_inner wow fadeInUp">
    <ul className="middlebar_nav">
     {posts.map((post, index)=>
       (
         <li key={index}> <a className="mbar_thubnail" href={post.url}><img src={post.urlToImage} alt=""/></a> <a className="mbar_title" href={post.url}>{(post.title).slice(0,40)}...</a> </li>
       )
     )}
    </ul>
   </div>
 );
}
export default WhatsHot;
