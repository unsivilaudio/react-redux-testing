import React from 'react';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

const Comments = props => {
    return (
        <div className='Comments'>
            <CommentBox />
            <CommentList />
        </div>
    );
};

export default Comments;
