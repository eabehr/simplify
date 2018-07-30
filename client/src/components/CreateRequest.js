  import React, { Component } from "react";
  import {Link} from "react-router-dom";
  import RequestService from "./RequestService";

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

              <label>
                  Client Gender (optional):
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
                  What items does your client need? (required)<br/>
                  Please include sizes if applicable<br/>
                  <textarea required name="items" value={this.state.value} onChange={this.handleFormChange} cols="40" rows="5"/> 
              </label>
              <br/><br/>

              <label>
                  Urgency (optional):
                  <br/>
                  <select name="urgency" onChange={this.handleFormChange}>
                      <option value="standard">standard</option>
                      <option value="urgent">urgent</option>
                      <option value="life-changing">life-changing</option>
                  </select>
              </label>
              <br/><br/>

              <label>
                  Notes (optional): <br/>
                  <textarea name="notes" value={this.state.value} onChange={this.handleFormChange} cols="40" rows="2"/> 
              </label>
              <br/><br/>

              <input type="submit" value="Submit" className="btn btn-primary"/>
              <Link to={"/"} className="btn btn-primary">Cancel</Link>
            </form>
        </div>
        );
      }
    }

  export default CreateRequest;