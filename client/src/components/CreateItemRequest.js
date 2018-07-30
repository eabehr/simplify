import React, { Component } from "react";
import {Link} from "react-router-dom";
import RequestService from "./RequestService";

/**
 * Define the form for creating a Request for items for a client
 */
class CreateItemRequest extends Component {
  constructor(props) {
      super(props);
      this.state = {clientId: "", gender: "unspecified", items: "", urgency: "standard", notes: ""};
    //   this.addRequestService = new RequestService();

      this.handleFormChange = this.handleFormChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handle submitting of form
    handleSubmit(event) { 
    //   event.preventDefault();
    //   this.addRequestService.sendData(this.state);
    //   this.props.history.push("/");
    }

    // Set values in component state every time fields of form change
    handleFormChange(event) {
        // this.setState({ [event.target.name]: event.target.value });
    }

    // define UI for request form
    render() {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <b>New Request:</b>
            <br/> <br/>
                <label>
                    Client Number (required):
                    <input required type="text" name="clientId" value={this.state.value} onChange={this.handleFormChange} className="form-control"/>
                </label>
                <br/><br/>

                <label>
                    Item Type
                    <br/>
                    <select name="category" onChange={this.handleFormChange}>
                        <option value="clothing">clothing</option>
                        <option value="household">household</option>
                        <option value="hygiene">hygiene</option>
                        <option value="engagement">engagement</option>
                        <option value="other">other</option>
                    </select>
                </label>
                <br/><br/>

                <label>
                    Number of items: <br/>
                    <input required type="number" name="items" value={this.state.value} onChange={this.handleFormChange} cols="5" rows="1"/> 
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

export default CreateItemRequest;