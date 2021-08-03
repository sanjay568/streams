import React from 'react';
import {   Route  } from 'react-router-dom';
import Header from './Header';
import { Router } from 'react-router';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamLIst';
import StreamShow from './streams/StreamShow';
import {connect} from 'react-redux';
import { createBrowserHistory  } from 'history';

const App = (props) => {
    const historyB = createBrowserHistory();
    console.log(props.nums);
    return (
        <div className='ui container'>
            
            <Router history={historyB} >
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/show" component={StreamShow} />
            </Router>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        nums: state.reduceMe
    }
}
export default connect(mapStateToProps,null)(App);