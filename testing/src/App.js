import React, { Component } from 'react';
import CommentBox from './components/comment_box';


class App extends Component {
    render() {
        return (
            <div className='container'>
                <CommentBox/>
            </div>
        );
    }
}

export default App;
