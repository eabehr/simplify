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
            category: null,
            typeOfItem: null,

            countRequested: 1,
            urgency: "standard",
            notes: ""
        };

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleItemTypeChange = this.handleItemTypeChange.bind(this);
        this.getItemAttributeDropdowns = this.getItemAttributeDropdowns.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.itemOptionGenerator = new ItemOptionGenerator();
    }

    handleSubmit() {
        this.props.itemAdded(this.state);
    }

    /** 
     * When category selection changes, set category on component state
     */
    handleCategoryChange(event) {
        this.setState({ category: event.target.value });
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
                <select onChange={this.handleCategoryChange}>
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
                    <select onChange={this.handleItemTypeChange}>
                        {itemOptions}
                    </select>
                    <br/><br/>
                </div>)
        }
    }

    /**
     * Handle change in item type
     */
    handleItemTypeChange(event) {
        this.setState({ typeOfItem: event.target.value });
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
                let sizeOptions = attributes.size.map((item) =>
                    <option key={item}>{item}</option>
                );
                 
                sizeDropdown = (
                    <div>
                        <label>Size</label><br/>
                        <select>
                            {sizeOptions}
                        </select>
                    </div>)
            }
            if (attributes.gender) {
                let genderOptions = attributes.gender.map((item) =>
                    <option key={item}>{item}</option>
                );

                genderDropdown = (
                    <div>
                        <label>Gender</label><br/>
                        <select>
                            {genderOptions}
                        </select>
                    </div>)
            }
            if (attributes.style) {
                let styleOptions = attributes.style.map((item) =>
                    <option key={item}>{item}</option>
                );
                styleDropdown = (
                    <div>
                        <label>Style</label><br/>
                        <select>
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
                <form onSubmit={this.handleSubmit}>
                    <b>Add item:</b>
                    <br /><br />
                    { categoryDropdown }
                    { itemsInCategoryDropdown }
                    { attributeDropdowns }

                    <label>
                        Urgency (optional):
                    </label>
                        <br/>
                    <select name="urgency" onChange={this.handleFormChange}>
                        <option value="standard">standard</option>
                        <option value="urgent">urgent</option>
                        <option value="life-changing">life-changing</option>
                    </select>
                    
                    <br/><br/>

                    <label>
                        How many of this item?
                        <input type="number" onChange={this.handleFormChange} className="form-control" />
                    </label>
                    <br/><br/>

                    <label>
                        Notes (optional): <br/>
                        <textarea name="notes" onChange={this.handleFormChange} cols="40" rows="2"/> 
                    </label>

                    <br/><br/>
                    <input type="submit" value="Add Item" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default ItemRequest;

/**
 * TODO
 * 
 * Can set labal in dropdown like this, but poses some issues
 * <option disabled selected>Select category:</option>
 */