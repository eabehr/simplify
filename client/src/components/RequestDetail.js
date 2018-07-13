import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RequestService from "./RequestService";

/**
 * Detail view of a single request
 * 
 * TODO:
 * - add area for messaging between requester and approver
 */
class RequestDetail extends Component {

    constructor(props) {
        super(props);
        this.state = { data: "" };
        this.requestService = new RequestService();
        this.approveRequest = this.approveRequest.bind(this);
        this.rejectRequest = this.rejectRequest.bind(this);

    }

    componentDidMount() {
        axios.get("http://localhost:4200/requests/" + this.props.match.params.id)
            .then(response => {
                this.setState({ data: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    /**
     * Set status of request to Approved
     */
    approveRequest() {
        this.state.data.status = "APPROVED"; // TODO: store as enum
        this.requestService.updateData(this.state.data, this.props.match.params.id);
    }

    /**
     * Set status of request to Denied
     */
    rejectRequest() {
        this.state.data.status = "DENIED"; // TODO: store as enum
        this.requestService.updateData(this.state.data, this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <b>Requested Items:</b>
                <br /><br />
                {this.state.data.items}
                <br /><br /><br />
                <b>Notes:</b>
                <br /><br />
                {this.state.data.notes}
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