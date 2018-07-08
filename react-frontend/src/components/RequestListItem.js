import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import RequestService from './RequestService';

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
                    {/*TODO: link to view request <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link> */}
                </td>
            </tr>
        );
    }
}

export default RequestListItem;