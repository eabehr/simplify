import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
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
        this.requestService = new RequestService(); //addRequestService?
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

    createSingleRequest() {
        if (this.state.requests instanceof Array) {
            return this.state.requests.map(function (elem, i) {
                 return <RequestListItem data={elem} key={i} />;
            })
        }
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/* todo: make bold with bootstrap or css instead of html */}
                            <td><b>Status</b></td>
                            <td><b>Requested Items</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createSingleRequest()}
                    </tbody>
                </table>

                <br/><br/>
                <Link to={"/"} className="btn btn-primary">Back to Home</Link>
         
            </div>
        );
    }
}

export default RequestList;