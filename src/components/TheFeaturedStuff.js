import React,{useState,useEffect} from "react";

import {NEWSAPI} from '../services/Api';

const TheFeaturedStuff =  (props) => {
  const [posts, setPosts]= useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const fetchPosts = async () => {
      setLoading(true);
      const res = await NEWSAPI.NewsQuery(props.q,props.number);
      setPosts(res.data.articles);
      setLoading(false);
    };
    fetchPosts();
  },[])

  if (loading) {
    return <img  className="loading" src="loading.jpg"/>;
  }

 return (
   <div className="single_blog_sidebar wow fadeInUp">
   <h2>The Featured Stuff</h2>
    <ul className="featured_nav">
     {posts.map((post, index)=>{
       if(post.urlToImage != null){
         return (
           <li key={index}> <a className="featured_img" href={post.url}><img src={post.urlToImage} alt=""  /></a>
             <div className="featured_title"> <a className="" href={post.url}>{(post.title).slice(0,40)}...</a> </div>
           </li>
         )
       }
     }
    )}
    </ul>
   </div>
 );
}
export default TheFeaturedStuff;
