import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse: null,
      }
    }

    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts', 
            {
                title: 'Hello World',
                body: 'It Works',
                userId: 123,
            }
        ).then(response =>  {
            this.setState({
                apiResponse: response.data
            })
        })
    }


    
    render() {
        const {apiResponse} = this.state;
        return (
        <div>
            <button onClick={this.postToApi}>
                Create Post
            </button>
            {
                apiResponse
                ? (
                    <div>
                        <h1>{apiResponse.title}</h1>
                        <p>post id: {apiResponse.id}</p>
                        <p>{apiResponse.body}</p>
                        <p>user ID: {apiResponse.userId}</p>
                    </div>
                ) 
                : (
                    <div>Please Click the button above</div>
                )
            }
        </div>
        )
    }
}

export default HTTPPost