import React, { Component } from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
    const commentList = props.comments.map((comment, index) =>
        <li className="list-group-item" key={index}>{comment}</li>
    );

    return (
        <div>
            <h4>Comment list:</h4>
            <ul className="comment-list list-group">
                {commentList}
            </ul>
        </div>
    )
};

const mapStateToProps = ({ comments }) => {
    return { comments };
};

export default connect(mapStateToProps)(CommentList);