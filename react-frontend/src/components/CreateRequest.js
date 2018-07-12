  import React, { Component } from "react";
  import {Link} from "react-router-dom";
  import RequestService from "./RequestService";

  /**
   * Define the form for creating a Request for items for a client
   */
  class CreateRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {clientId: "", gender: "", items: ""};
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
                  Client id:
                  <input type="text" name="clientId" value={this.state.value} onChange={this.handleFormChange} className="form-control"/>
              </label>
              <br/><br/>

              <label>
                  Client Gender:
                  <br/>
                  <select name="gender" onChange={this.handleFormChange}>
                      <option value="unspecified">unspecified</option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                      <option value="nonbinary">nonbinary</option>
                  </select>
              </label>
              <br/><br/>

              <label>
                  What items does your client need?
                  <input type="text" name="items" value={this.state.value} onChange={this.handleFormChange} className="form-control"/> 
              </label>
              <br/><br/>

              <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
            <br/><br/>
            <Link to={"/"} className="btn btn-primary">Back to Home</Link>
        </div>
        );
      }
    }

  export default CreateRequest;