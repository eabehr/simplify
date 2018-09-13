import React, { Component } from "react";
import { Link } from "react-router-dom";
import RequestService from "./RequestService";
import ItemRequest from "./ItemRequest";
import ItemListRow from "./ItemListRow";

/**
 * Define the form for creating a Request for items for a client
 */
class CreateRequest extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        clientId: "", 
        items: [],
        notes: "" };
    this.addRequestService = new RequestService();

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemAdded = this.handleItemAdded.bind(this);
    this.setRequestedItems = this.setRequestedItems.bind(this);
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

  handleItemAdded(item) {
    console.log(item);
    this.setState({
      items : this.state.items.concat(item)
    }, function () {
      // how to avoid this?
   //   this.setRequestedItems();
    });
  }

  setRequestedItems() {
    return this.state.items.map(function(object, i){
      return <ItemListRow itemAdded={object} key={i} />;
    })
  }



  // define UI for request form
  render() {
    var requestedItems = this.setRequestedItems();
    return (
      <div className="container">
          Create Request:
            <br /> <br />
          <label>
            Client id (required):
                  <input required type="text" name="clientId" value={this.state.value} onChange={this.handleFormChange} className="form-control" />
          </label>
          <br /><br />

          <ItemRequest itemAdded={this.handleItemAdded} />



      <h5>Items in your request:</h5>
        {/* List items to be added */}
        { requestedItems }



          <input type="submit" value="Submit" className="btn btn-primary" />
          <Link to={"/"} className="btn btn-primary">Cancel</Link>

      </div>
    );
  }
}

export default CreateRequest;