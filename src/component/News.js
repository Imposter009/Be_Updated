import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            totalArticle:0 
        }
    }
    static propTypes = {
        size: PropTypes.number,
        category: PropTypes.string
    }

    static defaultProps = {
        size: 9,
        category: 'general'
    }

    nextclick = async () => {
        console.log("nex")

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=da63069232a346e7a18daa8084cd10e3&pageSize=${this.props.size}&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles, page: this.state.page + 1 })
    }

    prevclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=da63069232a346e7a18daa8084cd10e3&pageSize=${this.props.size}&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles, page: this.state.page - 1 })
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=da63069232a346e7a18daa8084cd10e3&pageSize=${this.props.size}&page=${this.state.page}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles, totalArticle: parseData.totalResults})
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
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.prevclick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults / this.props.size)} className="btn btn-dark" onClick={this.nextclick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}