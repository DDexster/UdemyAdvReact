import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from "../actions/index";

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }

    handleChange(event) {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' })
    }

    render() {
        return (
            <div className='comment-box'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h4>Your comment:</h4>
                    <textarea className='form-control' cols={20} rows={10}
                              onChange={this.handleChange.bind(this)}
                              value={this.state.comment}/>
                    <br/>
                    <button action="submit" className="btn btn-primary">Add comment</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { saveComment })(CommentBox);