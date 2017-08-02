import React from 'react';
import List from './list';
import Addform from './add_form';
import Details from './item_details';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


const App = () => (
    <div className="container">
        <Route exact path="/" component={List}/>
        <Route path="/add" component={ Addform }/>
        <Route path="/todo/:id" component={Details}/>
    </div>
);

export default App;
