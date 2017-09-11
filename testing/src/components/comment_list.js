import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
    const commentList = props.comments.map(comment =>
        <li className="list-group-item" key={comment}>{comment}</li>
    );

    return (
        <ul className="comment-list list-group">
            {commentList}
        </ul>
    )
};

const mapStateToProps = state => {
    return { comments: state.comments };
};

export default connect(mapStateToProps)(CommentList);