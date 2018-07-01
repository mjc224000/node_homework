import React, {Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Table} from 'antd';
class App extends Component {
    constructor(props) {
        super(props);
    this.state={data:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:9331').then((data) => {
            console.log(data.data);
            this.setState({data:data.data});
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Table dataSource={this.state.data} />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
