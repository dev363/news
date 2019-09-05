import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {NEWSAPI} from "../services/Api" 
import Pagination from './Pagination';
// import axios from 'axios';
// import TopHeadlines from './TopHeadlines';
// import WhatsHot from './WhatsHot';
// import TheFeaturedStuff from './TheFeaturedStuff';
// import Tags from './Tags';


function CategoryNews(props){
  // console.log("Url Perameter",)
  const category= props.match.params.category
  const [posts,setPosts]= useState([]);
  const [loading,setLoading]= useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  useEffect(()=>{
    const fetchPosts= async()=>{
      setLoading(true);
      console.log(category)
      let res= await NEWSAPI.NewsCategoryWise(category,50)
      setPosts(res.data.articles);
      setLoading(false)
    }
    fetchPosts();
  },[])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  console.log(posts)
  return (

    <section id="contentbody">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            {currentPosts && currentPosts.map((post,index)=>{
              return(
                <div className="row news-post" key={index}>
                  <div className="col-sm-12 col-md-4 col-lg-4 post-image"><img src={post.urlToImage} alt="no-image"/></div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <h4>{post.title}</h4>
                    {post.content}
                  </div>
                  <div className="col-sm-12 col-md-2 col-lg-2 read-more">
                  <Link className="poplr_tagnav" to={post.url}>Read more</Link>
                  </div>
                </div>
              )
              console.log(post)
            })}
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </section>
  );

}

export default CategoryNews;
