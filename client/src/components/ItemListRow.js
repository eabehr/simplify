import React, { Component } from 'react';

class ItemListRow extends Component {
    constructor(props) {
        super(props);
      //  props.itemAdded
        console.log("props: " + props.itemAdded.typeOfItem);
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.itemAdded.category}<p>   </p>  {/* remove spaces later after fixing column width */}
                </td>
                <td>
                    {this.props.itemAdded.typeOfItem}<p>   </p>
                </td>
                <td>
                    {this.props.itemAdded.countRequested}<p>   </p>
                </td>
                {/* <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.item}
          </td> */}
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default ItemListRow;

/**
 * Todo:
 * 
 * - Add option to edit entry
 * 
 */