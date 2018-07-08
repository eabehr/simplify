import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
        this.state = {data: ''};
    }

    componentDidMount(){
        axios.get('http://localhost:4200/requests/' + this.props.match.params.id)
        .then(response => {
          this.setState({ data: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
      }

    render() {
        return (
            <div>
                Requested Items
                <br/>
                {this.state.data.items}
                <br/><br/>
                <Link to={"/request-list"} className="btn btn-primary">Back to Request List</Link>
            </div>
        );
    }
}

export default RequestDetail;