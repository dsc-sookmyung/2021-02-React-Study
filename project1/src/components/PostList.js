import React, { Component } from "react"
import axios from 'axios'

class PostList extends Component{
    constructor(props){
        super(props)

        this.state={
            posts:[],
            post1:[]
        }
    }

    componentDidMount(){
        axios.get('http://52.79.159.99:8080/api/header')//header get 요청
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        }) 
        axios.get('http://52.79.159.99:8080/api/slide') //slide get 요청
        .then(response => {
            console.log(response)
            this.setState({post1: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {posts}=this.state
        const {post1}=this.state
        return(
            <div>
                List of Header
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.header}</div>):
                    null
                }
                List of Slide
                {
                    post1.length ?
                    post1.map(post => <div key={post.id}>{post.slide}</div>):
                    null
                }
        </div>
        )
    }
}

export default PostList