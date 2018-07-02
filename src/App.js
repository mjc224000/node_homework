import React, {Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Table} from 'antd';

const url = 'http://localhost:9311/'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            createName: '',
            birth: null,
            deleteId: null,
            updateID:null
        };

    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('http://localhost:9311/course').then((data) => {
            console.log(data.data);
            this.setState({data: data.data});
        })
    }

    handleCreateSubmit() {
        const {createName, birth} = this.state;
        axios.post(url + 'course', {
            createName, birth
        }).then(() => {
        }).catch((e) => console.log(111))
    }
 handleDelete(id){
        axios.delete(url+'course',{params:{id}})
 }
    handleChange(key, e) {
        this.setState({[key]: e.target.value})
    }

    render() {
        let {data} = this.state;
        data = data.slice(0).reverse();
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Table style={{width: '50%', float: 'left'}} dataSource={data}
                       columns={[{title: 'id', dataIndex: "id", key: 'id'},
                           {title: '名字', dataIndex: 'name', key: 'name'},
                           {title: '生日', dataIndex: 'birth', key: 'birth'}
                       ]}/>

                <p><input type="text" onChange={(e) => this.handleChange('createName', e)}
                          value={this.state.createName} placeholder={'name'}/>
                    <input type="text" onChange={(e) => this.handleChange('birth', e)}
                           value={this.state.birth} placeholder={'1991-2020'}/>
                    <button onClick={this.handleCreateSubmit.bind(this)}>增</button>
                </p>

                <p><input type="text" onChange={(e) => this.handleChange('deleteId', e)}
                          value={this.state.deleteId} placeholder={'id'}/>
                    <button onClick={()=>this.handleDelete(this.state.deleteId)}>删</button>
                </p>
                <p><input type="text" value={this.state.updateID} onChange={(e)=>this.handleChange('updateID',e)} placeholder={id}/></p>
                <button onClick={this.handleUpdate.bind(this) } >删</button>
            </div>
        );
    }
}

export default App;
