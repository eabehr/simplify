import React, { Component } from "react";
import { Link } from "react-router-dom";
import RequestService from "./RequestService";
import ItemOptionGenerator from "./items/ItemOptionGenerator";

/**
 * Define the form for creating a Request for items for a client
 */
class ItemRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // todo: nest item
            category: null, // required
            typeOfItem: null, // required
            countRequested: 1, // defaults to 1
            urgency: "standard", // defaults to standard
            notes: null, // not required

            // Extra attributes
            gender: null,
            size: null,
            style: null
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);


        this.getItemAttributeDropdowns = this.getItemAttributeDropdowns.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);

        this.itemOptionGenerator = new ItemOptionGenerator();
    }

    /**
     * Called when user selects item to add to list of items
     */
    handleAddItem() {
        // TODO
        // ????
        // is it better to have functions that handle change of select dropdowns?
        // or too assign ids to selects
        // and do document.getElementById("category").value and pass that?
        // does it make sense for this component to even maintain an internal state?


        // do some validation here
        if (!(this.state.category && this.state.typeOfItem)) {
            console.log("error trying to add item without required properties");
            return;
        }

        // call function in parent
        this.props.itemAdded(this.state);


        //  how to handle resetting form when user adds an item?
        // should I switch back to <form> ?
        this.setState({
            // todo: nest item
            category: null, // required
            typeOfItem: null, // required
            countRequested: 1, // defaults to 1
            urgency: "standard", // defaults to standard
            notes: null, // not required

            // Extra attributes
            gender: null,
            size: null,
            style: null
        });

        document.getElementById("blah").reset();
    }

    handleFieldChange(event) {
        this.setState({ [event.target.name] : event.target.value });
    }

    /**
     * Get UI element for a dropdown containing possible categories
     */
    getCategoryDropdown() {
        let categories = this.itemOptionGenerator.getCategories();
        let dropdownOptions = categories.map((category) =>
            <option key={category}>{category}</option>
        );
        return (
            <div>
                <label>Item category:</label><br/>
                <select name="category" onChange={this.handleFieldChange}>
                    <option selected disabled>Select category</option>
                    {dropdownOptions}
                </select>
                <br/><br/>
            </div>
        )
    }

    /**
     * Get UI element for a dropdown containing items within given category
     */
    getItemListDropdownForCategory(category) {
        if (category) {
            let itemsInCategory = this.itemOptionGenerator.getItemsInCategory(this.state.category);
            let itemOptions = itemsInCategory.map((item) =>
                <option key={item}>{item}</option>
            );
            return (
                <div>
                    <label>Item Type</label><br/>
                    <select name="typeOfItem" onChange={this.handleFieldChange}>
                        <option selected disabled>Select item</option>
                        {itemOptions}
                    </select>
                    <br/><br/>
                </div>)
        }
    }

    /**
     * If item has attributes for size, style, or gender, set dropdowns for them
     */
    getItemAttributeDropdowns(category, itemType) {
        if (!category) {
            return;
        }
        var attributes = this.itemOptionGenerator.getItemAttributes(category, itemType);
        if (!attributes) {
            // item type has no attributes
            return null;
        } else {
            let sizeDropdown;
            let genderDropdown;
            let styleDropdown;
            if (attributes.size) {
                let sizeOptions = attributes.size.map((size) =>
                    <option key={size}>{size}</option>
                );
                 
                sizeDropdown = (
                    <div>
                        <label>Size</label><br/>
                        <select name="size" onChange={this.handleFieldChange}>
                            {sizeOptions}
                        </select>
                    </div>)
            }
            if (attributes.gender) {
                let genderOptions = attributes.gender.map((gender) =>
                    <option key={gender}>{gender}</option>
                );

                genderDropdown = (
                    <div>
                        <label>Gender</label><br/>
                        <select name="gender" onChange={this.handleFieldChange}>
                            {genderOptions}
                        </select>
                    </div>)
            }
            if (attributes.style) {
                let styleOptions = attributes.style.map((style) =>
                    <option key={style}>{style}</option>
                );
                styleDropdown = (
                    <div>
                        <label>Style</label><br/>
                        <select name="style" onChange={this.handleFieldChange}>
                            {styleOptions}
                        </select>
                    </div>)
            }

            let attributeOptions = (
                <div>
                    { sizeDropdown }
                    { styleDropdown }
                    { genderDropdown }
                    <br/>
                </div>
            );
            return attributeOptions;
        }
    }

    // define UI for request form
    render() {
        // Get dropdown menus
        var categoryDropdown = this.getCategoryDropdown();
        var itemsInCategoryDropdown = this.getItemListDropdownForCategory(this.state.category);
        var attributeDropdowns = this.getItemAttributeDropdowns(this.state.category, this.state.typeOfItem);

        return (
            <div className="container">
                <form id="blah">
                    <b>Add item:</b>
                    <br /><br />
                    { categoryDropdown }
                    { itemsInCategoryDropdown }
                    { attributeDropdowns }

                    <label>
                        Urgency (optional):
                    </label>
                        <br/>
                    <select name="urgency" onChange={this.handleFieldChange}>
                        <option value="standard">standard</option>
                        <option value="urgent">urgent</option>
                        <option value="life-changing">life-changing</option>
                    </select>
                    
                    <br/><br/>
                    
                    <label>
                        How many of this item?
                        <input name="countRequested" type="number" onChange={this.handleFieldChange} className="form-control" />
                    </label>
                    
                    {/* 
                    Commenting out for now to unclutter UI while I develop other areas
                    <br/><br/>
                     */}

                    <br/><br/>
                    {/* what should type of input be? not submit */}
                    <input value="Add Item" className="btn btn-primary" onClick={this.handleAddItem}/>
                </form>
            </div>
        );
    }
}

export default ItemRequest;

/**
 * form or div?
 * if input type is submit, then refreshes page
 * if it isn't, validation doesnt work :()
 */


/**
 * TODO
 * 
 * Can set label in dropdown like this, but poses some issues
 * <option disabled selected>Select category:</option>
 * 
 * 
 * count &urgency not getting set
 */






 /**
  * 
  * react-json-schema-form
  * dynamic schema dependencies
  * 
  * 
  */