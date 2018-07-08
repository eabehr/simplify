import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import RequestService from './RequestService';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

/**
 * A single request item in the list of all requests
 */
class RequestListItem extends Component {

    constructor(props) {
        super(props);
        this.requestService = new RequestService();
        // bug: why isn't key getting set?
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.data.status}
                </td>
                <td>
                    {this.props.data.items}
                </td>
                <td>
                    <Link to={"/request-detail/" + this.props.data._id} className="btn btn-primary">View Request</Link>
                </td>
            </tr>
        );
    }
}

export default RequestListItem;