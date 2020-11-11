import React from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';

import { createComment } from '../actions';

class CommentBox extends React.Component {
    state = { message: '' };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { message } = this.state;
        const id = nanoid();
        const newComment = { id, message };
        this.props.createComment(newComment);
        this.setState({ message: '' });
    };

    render() {
        return (
            <div className='CommentBox'>
                <header className='CommentBox__Header'>
                    Give us your feedback!
                </header>
                <form
                    className='CommentBox__CommentForm'
                    onSubmit={this.handleSubmit}>
                    <textarea
                        className='CommentBox__MessageArea'
                        name='message'
                        id='comment-message'
                        onChange={this.handleChange}
                        value={this.state.message}
                    />
                    <button type='submit' className='Button Primary'>
                        Add Comment
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(null, { createComment })(CommentBox);
