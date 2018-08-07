  import React, { Component } from "react";
  import {Link} from "react-router-dom";
  import RequestService from "./RequestService";
  import ItemRequest from "./ItemRequest";

  /**
   * Define the form for creating a Request for items for a client
   */
  class CreateRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {clientId: "", gender: "unspecified", items: "", urgency: "standard", notes: ""};
        this.addRequestService = new RequestService();

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      // Handle submitting of form
      handleSubmit(event) { 
        event.preventDefault();
        this.addRequestService.sendData(this.state);
        this.props.history.push("/");
      }

      // Set values in component state every time fields of form change
      handleFormChange(event) {
          this.setState({ [event.target.name]: event.target.value });
      }

      // define UI for request form
      render() {
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit}>
            Create Request:
            <br/> <br/>
              <label>
                  Client id (required):
                  <input required type="text" name="clientId" value={this.state.value} onChange={this.handleFormChange} className="form-control"/>
              </label>
              <br/><br/>

           
                < ItemRequest />

              <input type="submit" value="Submit" className="btn btn-primary"/>
              <Link to={"/"} className="btn btn-primary">Cancel</Link>
            </form>
        </div>
        );
      }
    }

  export default CreateRequest;