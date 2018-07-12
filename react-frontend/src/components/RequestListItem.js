import React, { Component } from "react";
import {Link} from "react-router-dom";
import RequestService from "./RequestService";
import { Router, Route, browserHistory, IndexRoute} from "react-router"

/**
 * A single request item in the list of all requests
 */
class RequestListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formattedDate: ""
        };
        this.requestService = new RequestService();
        // bug: why isn't key getting set?
        this.formatDate = this.formatDate.bind(this);
        this.formatDate(this.props.data.date);
    }

    formatDate(date) {
        if (date) {
            var dateObject = new Date(date);
            var day = dateObject.getDate();
            var month = dateObject.getMonth() + 1;
            var year = dateObject.getFullYear();
            this.state.formattedDate = month + "/" + day + "/" + year;
        }
    }

    render() {
        return (
            <tr>
                <td width="15%">
                    {this.state.formattedDate}
                </td>
                <td width="20%">
                    {this.props.data.status}
                </td>
                <td width="25%">
                    {this.props.data.items}
                </td>
                <td width="20%">
                    {this.props.data.urgency}
                </td>
                <td width="20%">
                    <Link to={"/request-detail/" + this.props.data._id} className="btn btn-primary">View Request</Link>
                </td>
            </tr>
        );
    }
}

export default RequestListItem;