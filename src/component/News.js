import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
   
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=da63069232a346e7a18daa8084cd10e3"
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles })
    }

    render() {
        return (
            <div className='container my-4'>
                <h3>Top News Articles</h3>
                <div className="row" >
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3  " key={element.url} >
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} url={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}