import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from '../actions/index';
import { Link } from 'react-router-dom';
import Modal from './modal';

class List extends Component {
    componentWillMount(){
        this.props.getTodos();
    }

    handleDelete(id){
        this.props.deleteTodo(id).then(() => {
            this.props.getTodos();
        })
    }
    render(){
        const listElements = this.props.list.map((item, index) => {
            return (
                <li key={index} className="list-group-item">
                    <div className="col-6">
                        <Link to={`/todo/${item._id}`}>{item.title}</Link>
                    </div>
                    <div className="col-4">
                        <span className={item.complete ? "text-success":"text-danger"}>{item.complete ? "Completed":"Incomplete"}</span>
                    </div>
                    <div className="col-2">
                        <Modal className="btn btn-outline-danger" message={item.title} title="Are you sure ou want to delete todo item:" text="Delete" onClick={() => this.handleDelete(item._id)}/>
                    </div>
                </li>
            )
        });
        return (
            <div>
                <Link to="/add" className="btn btn-outline-success my-2">Add Item</Link>
                <h1>To Do List</h1>
                <ul className="list-group">
                    { listElements }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        list:state.todos.list
    }
}
export default connect(mapStateToProps, {getTodos, deleteTodo})(List);