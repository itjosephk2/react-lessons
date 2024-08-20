import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         category: 'website',
         comment: ''
      }
    }  
    
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value,
        })
    }
    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Testing')
    }
    
    render() {
        return (
        <div>
            <h1>Please Fill out the form below</h1>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='id-name'>Your Name:</label>
                    <input 
                        value={this.state.name}
                        onChange={this.handleNameChange} 
                        id='id-name' 
                        name='name' 
                        type='text'
                    />
                </div>
                <div>
                    <label htmlFor='id-category'>Query Category:</label>
                    <select 
                        value={this.state.catgegory}
                        onChange={this.handleCategoryChange} 
                        id='id-category' 
                        name='category'
                    >
                        <option value='website'>Website Issue</option>
                        <option value='order'>Order Issue</option>
                        <option value='general'>General Inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='id-comments'>Comments:</label>
                    <textarea 
                        value={this.state.comment}
                        onChange={this.handleCommentChange} 
                        id='id-comments' 
                        name='comments'
                    />
                </div>
                <input type='submit' value='submit'/>
            </form>
        </div>
        )
    }
}

export default ControlledForm