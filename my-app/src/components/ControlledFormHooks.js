import React, {useState} from 'react'

function ControlledFormHooks() {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }

    return (
        <div>
            <h1>Please Fill out the form below</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='id-name'>Your Name:</label>
                    <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        id='id-name' 
                        name='name' 
                        type='text'
                    />
                </div>
                <div>
                    <label htmlFor='id-category'>Query Category:</label>
                    <select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} 
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
                        value={comments}
                        onChange={(e) => setComments(e.target.value)} 
                        id='id-comments' 
                        name='comments'
                    />
                </div>
                <input type='submit' value='submit'/>
            </form>
        </div>
    )
}

export default ControlledFormHooks