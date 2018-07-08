    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter as Router, Route } from 'react-router-dom';

    import App from './App';
    import CreateRequest from './components/CreateRequest';
    import RequestList from './components/RequestList';

    import IndexItem from './components/IndexItem';


    /**
     * Define routes for app
     */
    ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            {/* Route to create a new request */}
            <Route path='/request' component={CreateRequest} />

            {/* Route to view request list */}
            <Route path='/request-list' component={RequestList} />

            {/* Route to view requests (currently just some boilerplate code) */}
            <Route path='/index' component={IndexItem} />
        </div>
    </Router>,
    document.getElementById('root')
    );
