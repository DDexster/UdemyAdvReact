import React, { Component } from 'react';
import CommentBox from './components/comment_box';
import CommentList from './components/comment_list';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <CommentBox/>
                <CommentList/>
            </div>
        );
    }
}

export default App;
