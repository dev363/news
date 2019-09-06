import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {NEWSAPI} from "../services/Api"
import Pagination from './Pagination';

function CategoryNews(props){
  console.log("Url Perameter",props.match.params)
  let category= props.match.params.category
  let [posts,setPosts]= useState([]);
  let [loading,setLoading]= useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage] = useState(5);
  useEffect(()=>{
    console.log(category)
    let fetchPosts= async()=>{
      setLoading(true);
      console.log(category)
      let res= await NEWSAPI.NewsCategoryWise(category,50)
      setPosts(res.data.articles);
      setLoading(false)
    }
    fetchPosts();
  },[category])

  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  let paginate = pageNumber => setCurrentPage(pageNumber);
  console.log(category)
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
