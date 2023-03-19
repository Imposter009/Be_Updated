import React, { Component } from 'react'

export default class NewsItem extends Component {


  render() {
    let { title, description, imgUrl, url } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imgUrl ? imgUrl : "https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1024-512.png"} className="card-img-top" style={{ height: "200px" }} alt="" />
          <div className="card-body ">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}..</p>
            <a href={url} target="_blank" className="btn bt-sm btn-dark">Read More</a>

          </div>
        </div>

      </div>
    )
  }
}
