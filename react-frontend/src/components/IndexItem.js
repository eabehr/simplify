/**
 * IN PROGRESS
 * 
 * Table to display requests. Came from some boilerplate code
 * Will likely remove or completely rework.
 */
import React, { Component } from 'react';
import RequestService from './RequestService';
import axios from 'axios';
import TableRow from './TableRow';

class IndexItem extends Component {

  constructor(props) {
      super(props);
      this.state = {value: '', items: ''};
      this.addRequestService = new RequestService();
    }
    componentDidMount(){
      axios.get('http://localhost:4200/items')
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
      if(this.state.items instanceof Array){
        return this.state.items.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        })
      }
    }

    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>No.</td>
                  <td>Request</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }

export default IndexItem;