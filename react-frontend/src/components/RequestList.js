import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RequestService from './RequestService';
import RequestListItem from './RequestListItem';

/**
 * List of Requests for User
 */
class RequestList extends Component {
    constructor(props) {
        // set status of user
        super(props);
        this.state = {
            requests: ''
        };
        this.state.status = "PENDING";
        this.requestService = new RequestService();
        this.getRequestItems = this.getRequestItems.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4200/requests')
            .then(response => {
                this.setState({ requests: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    /**
     * Get all request components with given status
     */
    getRequestItems(_status) {
        if (this.state.requests instanceof Array) {
            if (_status) {
                return this.state.requests.map(function (elem, i) {
                    if (elem.status == _status) {
                        return <RequestListItem data={elem} key={i} />;
                    }
                })
            } else {
                return this.state.requests.map(function (elem, i) {
                    return <RequestListItem data={elem} key={i} />;
                })
            }
        }
    }

    /**
     * Updates component to show only requests with given status
     * Shows all requests if given status is empty string or null
     */
    updateStatus(_status) {
        this.state.status = _status;
        // TODO: component should be updating automatically when state changes and forceUpdate shouldn't be needed
        // I am definitely doing something wrong here - should fix
        this.forceUpdate();
    }

    render() {
        return (
            <div className="container">
                {/* arrow syntax in onclick prevents invoking function upon component render */}
                <input type="button" value="View All Requests" onClick={() => this.updateStatus(null)} className="btn btn-primary" />
                <input type="button" value="View Pending Requests" onClick={() => this.updateStatus("PENDING")} className="btn btn-primary" />
                <input type="button" value="View Approved Requests" onClick={() => this.updateStatus("APPROVED")} className="btn btn-primary" />
                <input type="button" value="View Rejected Requests" onClick={() => this.updateStatus("DENIED")} className="btn btn-primary" />

                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/* todo: make bold with bootstrap or css instead of html */}
                            <td><b>Status</b></td>
                            <td><b>Requested Items</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* pending requests should be default */}
                        {this.getRequestItems(this.state.status)}
                    </tbody>
                </table>

                <br /><br />
                <Link to={"/"} className="btn btn-primary">Back to Home</Link>

            </div>
        );
    }
}

export default RequestList;