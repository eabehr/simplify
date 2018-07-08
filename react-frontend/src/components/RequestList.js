import React, { Component } from 'react';

/**
 * List of Requests for User
 */
class RequestList extends Component {

    constructor(props) {
        // set status of user
        super(props);
        this.state = {
            items: ''
        };
    }



    render() {
        return (
          <div className="request-list">
            Request List
          </div>
        );
      }
}

export default RequestList;