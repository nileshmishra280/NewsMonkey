import React from 'react'
const NewsItem=(props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card shadow-lg border" style={{ width: "24rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." /><span style={{ left: '90%', zIndex: '1' }} class="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <div className="card-body">
            <strong className="card-title" style={{ fontFamily: "monospace" }}>{title}</strong>
            <p className="card-text text-black-75">{description}</p>
            <p className="card-text"><small className='text-muted'>By {author ? author : "Unknown"} On {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark text-warning fw-bold ">Read More</a>
          </div>
        </div>
      </div>
    )
  }

export default NewsItem