import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RequestService from './RequestService';

/**
 * Detail view of a single request
 * 
 * TODO:
 * - add ability to approve or reject request
 * - add area for messaging between requester and approver
 */
class RequestDetail extends Component {

    constructor(props) {
        super(props);
        this.state = { data: '' };
        this.requestService = new RequestService();
        this.approveRequest = this.approveRequest.bind(this);
        this.rejectRequest = this.rejectRequest.bind(this);

    }

    componentDidMount() {
        axios.get('http://localhost:4200/requests/' + this.props.match.params.id)
            .then(response => {
                this.setState({ data: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    approveRequest() {
        // this.state.value? this.state.data?
        this.state.data.status = "APPROVED"; // TODO: store as enum
        this.requestService.updateData(this.state.data, this.props.match.params.id);
        console.log("appoved");
    }

    rejectRequest() {
        console.log("deny");
    }

    render() {
        return (
            <div>
                Requested Items
                <br />
                {this.state.data.items}
                <br /><br />
                <input type="button" value="Approve" onClick={this.approveRequest} className="btn btn-primary" />
                <br /><br />
                <input type="button" value="Reject" onClick={this.rejectRequest} className="btn btn-primary" />

                <br /><br />
                <Link to={"/request-list"} className="btn btn-primary">Back to Request List</Link>
            </div>
        );
    }
}

export default RequestDetail;