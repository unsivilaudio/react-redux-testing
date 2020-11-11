import React from 'react';
import { connect } from 'react-redux';

const CommentList = props => {
    const renderListItems = () => {
        return props.comments.map((el, i) => {
            return (
                <li key={`${i}-${el}`} className='CommentList__ListItem'>
                    {el}
                </li>
            );
        });
    };

    return (
        <div className='CommentList'>
            <header className='CommentList__Header'>Feedback</header>
            <ul className='CommentList__List'>{renderListItems()}</ul>
        </div>
    );
};

const mapStateToProps = state => {
    return { comments: state.comments };
};

export default connect(mapStateToProps)(CommentList);
