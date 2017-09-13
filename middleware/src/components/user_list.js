import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/index";

class UserList extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUser(user) {
        return (
            <div className="card card-body">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">{user.company.name}</p>
                <a href={`https://${user.website}`}
                   className="btn btn-primary">{user.website}</a>
            </div>
        );
    }

    render() {
        return (
            <div className="user-list">
                {this.props.users.map(user => this.renderUser(user))}
            </div>
        );
    }
}

const mapStateToProps = ({ users }) => {
    return { users };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
