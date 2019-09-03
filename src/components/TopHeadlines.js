import React,{ useState, useEffect } from 'react';

import Pagination from './Pagination';


import {NEWSAPI} from '../services/Api';

const TopHeadlines =  () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await NEWSAPI.TopHeadlines();
      posts.filter(post => post.urlToImage !=null)
      setPosts(res.data.articles);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  // console.log(posts)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (loading) {
    return <img  className="loading" src="loading.jpg"/>;
  }

  const date= new Date()

  return (
    <div>
    <div className="leftbar_content">
      {currentPosts.map((hd,index) => {
        if(hd.urlToImage != null){
          return (
          <div className="single_stuff wow fadeInDown" key={index}>
            <div className="single_stuff_img"> <a href={hd.url} target="_blank"><img src={hd.urlToImage} alt=""/></a> </div>
            <div className="single_stuff_article">
              <div className="single_sarticle_inner"> <a className="stuff_category" href={`https://${hd.source.name}`} target="_blank">{hd.source.name}</a>
                <div className="stuff_article_inner"> <span className="stuff_date">{date.toLocaleString('default', { month: 'short' })} <strong>{date.getDate()}</strong></span>
                  <h2><a href={hd.url} target="_blank" >{hd.title}</a></h2>
                  <p>{hd.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    })}
    </div>
    <Pagination
      postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate}
    />
    </div>

  );
}
export default TopHeadlines;
