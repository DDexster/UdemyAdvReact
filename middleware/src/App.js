import React, { Component } from "react";
import UserList from "./components/user_list";


class App extends Component {
    render() {
        return (
            <div className="app container">
                <UserList />
            </div>
        );
    }
}

export default App;
