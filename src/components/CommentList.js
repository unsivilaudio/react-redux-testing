import React from 'react';
import { connect } from 'react-redux';

import { setComments, fetchComments, deleteComment } from '../actions';

export class CommentList extends React.Component {
    componentDidMount() {
        this.props.fetchComments();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.comments !== this.props.comments) {
            this.props.setComments(this.props.comments);
        }
    }

    removeComment = e => {
        e.stopPropagation();
        const { id } = e.target.parentElement;
        this.props.deleteComment(id);
    };

    renderListItems = () => {
        return this.props.comments.map(el => {
            return (
                <li key={el.id} id={el.id} className='CommentList__ListItem'>
                    <p className='CommentList__ListItem--text'>{el.message}</p>
                    <span
                        className='CommentList__ListItem--remove'
                        onClick={this.removeComment}>
                        X
                    </span>
                </li>
            );
        });
    };

    render() {
        return (
            <div className='CommentList'>
                <header className='CommentList__Header'>Feedback</header>
                <ul className='CommentList__List'>{this.renderListItems()}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { comments: state.comments };
};

export default connect(mapStateToProps, {
    setComments,
    fetchComments,
    deleteComment,
})(CommentList);
