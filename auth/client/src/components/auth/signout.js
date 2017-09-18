import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class SignOut extends Component {
    componentWillMount(){
        this.props.signOutUser();
    }

    render() {
        return (
            <div className='signout container'><h2>Sorry to see you go...</h2></div>
        )
    }
}

export default connect(null, actions)(SignOut);