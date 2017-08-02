import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class Add extends Component {


    submitForm(value){
        console.log('form submitted: ', this.props.addTodo(value));
    }

    renderInput({input, label, meta: { touched, error }}){

        return (
            <div className="form-group">
                <label>{label}</label>
                <input {...input} name={input.name} type="text" className="form-control"/>
                <p className="form-text text-danger">{touched && error}</p>
            </div>
        )
    }

    render() {
        const { handleSubmit, reset } = this.props;
        return (
            <div>
                <Link to="/" className="btn btn-outline-primary my-2">Go back</Link>
                <h1>Add item</h1>
                <form onSubmit={handleSubmit((value) => this.submitForm(value))}>
                    <Field name="title" label="Title" component={this.renderInput}/>
                    <Field name="details" label="Details" component={this.renderInput}/>
                    <button className="btn btn-outline-success">Add Item</button>
                    <button onClick={reset} type="button" className="btn btn-outline-danger ml-2">Reset</button>
                </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {};
    if(values.title && values.title.length < 3){
        errors.title = "Title must be at least 3 characters long";
    }
    if(!values.title){
        errors.title = 'Please Enter a valid title';
    }
    if(!values.details){
        errors.details = 'Please Enter a valid details';
    }

    return errors;
}

Add = reduxForm({
    form: 'add-item',
    validate: validate
})(Add);

export default connect(null, {addTodo})(Add);