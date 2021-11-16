import React, { Component } from "react"
import axios from 'axios'

class PostForm extends Component{
    constructor(props){
        super(props)

        this.state={
            userId:'',
            userPassword: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios({method:'post', url:'http://52.79.159.99:8080/api/login',data:this.state});
        /*axios.post('http://52.79.159.99:8080/api/login',this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })*/
    }
    render(){
        const {userId,userPassword}=this.state
        return(
        <div>
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type="text" name="userPassword" value={userPassword} onChange={this.changeHandler}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

export default PostForm