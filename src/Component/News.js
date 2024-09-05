import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResult, settotalResult] = useState(0);


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(20);
    setloading(true);
    let url = `https://newsapi.org/v2/everything?q=${props.q}&from=2024-08-26&to=2024-08-26&sortBy=popularity&apiKey=9928a8e8a4f745578dbfc31158aa7478&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(40);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles)
    setloading(false)
    settotalResult(parsedData.totalResults)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = "NewsMonkey-" + capitalizeFirstLetter(props.q);
    updateNews();
  }, [])

  //   const handlePrevClick = async () => {
  //     setpage(page-1);
  //     updateNews();
  //   };

  // const  handleNextClick = async () => {
  //   setpage(page+1);
  //   };

  const fetchMoreData = async () => {

    setloading(true);
    let url = `https://newsapi.org/v2/everything?q=${props.q}&from=2024-08-26&to=2024-08-26&sortBy=popularity&apiKey=9928a8e8a4f745578dbfc31158aa7478&page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResult(parsedData.totalResults);
    setloading(false);
  };


  return (
    <>
      <div className='container-fluid mt-3'>
  <h1
    className='text-center text-light border border-2 border-danger rounded p-2 fw-bold shadow-sm'
    style={{
      fontFamily: "cursive",
      outline: "2px solid #333",
      outlineOffset: "3px",
      letterSpacing: "1px",
      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
      backgroundImage: "linear-gradient(to right, #004080, #ff4c4c)", // Dark blue to bright red gradient
    }}
  >
    NewsMonkey - Top {capitalizeFirstLetter(props.q)} Headlines
  </h1>
</div>

      {/* {state.loading && <Spinner/>} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<Spinner />}
      >
        <div className='container'>
          <div className='row'>
            {articles.map((element) => {
              return (
                <div className='col-md-4' key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 100) : ""}
                    description={element.description ? element.description.slice(0, 200) : ""}
                    imageUrl={element.urlToImage ? element.urlToImage : "https://via.placeholder.com/150"}
                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between">
          <button disabled={state.page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick} >&larr; Prev.</button>
          <button disabled={state.page * props.pageSize >= state.totalResults} type="button" onClick={handleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div> */}
    </>
  );
}

News.defaultProps = {
  pageSize: 6,
}

News.propTypes = {
  pageSize: PropTypes.number,
  q: PropTypes.string,
}

export default News;
